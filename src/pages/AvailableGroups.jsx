/* eslint-disable no-unused-vars */
import { Box, Container, Stack } from "@mui/material"
import peopleIcon from "@/assets/images/peopleicon.png"
import { useState, useEffect } from "react"
import { useSetAtom } from "jotai";
import { sidebarSelectedAtom } from "@/store/store";
import axios from "axios";

// components
import Header from "@/components/_shared/Header";
import MyBreadCrumbs from "@/components/_shared/MyBreadCrumbs"
import AvgTableRow from "@/components/AvailableGroupsPage/AvgTableRow";
import AvgTableHead from "@/components/AvailableGroupsPage/AvgTableHead";

const AvailableGroups = () => {
  const [groups, setGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [instructorOptions, setInstructorOptions] = useState(new Set());
  const [selectedSemester, setSelectedSemester] = useState(new Set());
  const [selectedClassDate, setSelectedClassDate] = useState(new Set());
  const [selectedInstructor, setSelectedInstructor] = useState(new Set());
  const setSelected = useSetAtom(sidebarSelectedAtom);

  useEffect(() => {
    const fetchAllAvailableGroups = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getAllAvailableGroups?year=${import.meta.env.VITE_YEAR}`, { withCredentials: true });

        if (res.data.status) {
          setGroups(res.data.payload);
          //get all instructors name from res.data.payload
          const instructors = res.data.payload.map((group) => group.lecturer_name);
          setInstructorOptions(new Set(instructors));
        }

      } catch (error) {
        console.log(error);
      }
    }

    fetchAllAvailableGroups();

    setSelected(1.2);
  }, [])

  useEffect(() => {
    let newFilteredGroups = groups.filter((group) => {
      const classDate = `${group.day_of_week + ", " + group.time_start + " - " + group.time_end}`;

      return (
        (selectedSemester.size === 0 || selectedSemester.has(group.semester)) &&
        (selectedClassDate.size === 0 || selectedClassDate.has(classDate.split(',')[0])) &&
        (selectedInstructor.size === 0 || selectedInstructor.has(group.lecturer_name))
      );
    });

    setFilteredGroups(newFilteredGroups);
  }, [selectedSemester, selectedClassDate, selectedInstructor, groups]);

  return (
    <Box>
      <Container>
        <Stack spacing={"20px"} >
          <MyBreadCrumbs items={[
            { label: 'Available Groups', href: '#' },
          ]} />

          <Header logoSrc={peopleIcon} title="Variables Expression Statement" />

          {/* Table */}
          <Stack spacing={"10px"}>

            {/* Table head */}
            <AvgTableHead
              selectedSemester={selectedSemester}
              selectedClassDate={selectedClassDate}
              selectedInstructor={selectedInstructor}
              setSelectedSemester={setSelectedSemester}
              setSelectedClassDate={setSelectedClassDate}
              setSelectedInstructor={setSelectedInstructor}
              instructorOptions={instructorOptions}
            />

            {/* Table body */}
            {filteredGroups.map(g => <AvgTableRow key={g.group_id} groupId={g.group_id} groupNo={g.group_no} year={g.year} semester={g.semester} classDate={`${g.day_of_week + ", " + g.time_start + " - " + g.time_end}`} students={g.num_students} instructor={g.lecturer_name} />)}

          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default AvailableGroups