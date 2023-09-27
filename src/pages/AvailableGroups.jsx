/* eslint-disable no-unused-vars */
import { Box, Container, Stack } from "@mui/material"
import peopleIcon from "@/assets/images/People-Icon.png"
import { useState, useEffect } from "react"
import { groups } from "@/utils";

// components
import Header from "@/components/Header";
import MyBreadCrumbs from "@/components/MyBreadCrumbs"
import AvgTableRow from "@/components/AvgTableRow";
import AvgTableHead from "@/components/AvgTableHead";

const AvailableGroups = () => {
  const [filteredGroups, setFilteredGroups] = useState(groups);
  const [selectedSemester, setSelectedSemester] = useState(new Set());
  const [selectedClassDate, setSelectedClassDate] = useState(new Set());
  const [selectedInstructor, setSelectedInstructor] = useState(new Set());

  useEffect(() => {
    let newFilteredGroups = groups.filter((group) => {
      return (
        (selectedSemester.size === 0 || selectedSemester.has(group.semester)) &&
        (selectedClassDate.size === 0 || selectedClassDate.has(group.classDate.split(',')[0])) &&
        (selectedInstructor.size === 0 || selectedInstructor.has(group.instructor))
      );
    });

    setFilteredGroups(newFilteredGroups);
  }, [selectedSemester, selectedClassDate, selectedInstructor]);

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
            />

            {/* Table body */}
            {filteredGroups.map(g => <AvgTableRow key={g.groupId} groupId={g.groupId} groupNo={g.groupNo} year={g.year} semester={g.semester} classDate={g.classDate} students={g.students} instructor={g.instructor} />)}

          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default AvailableGroups