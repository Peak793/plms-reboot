import { Box, Button, Stack } from "@mui/material"
import { Link, useParams } from "react-router-dom";
import blueFolder from "@/assets/images/bluefoldericon.png"
// import { mockStudentsLabScores } from "@/utils";
import { useState, useEffect } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import avatarPlaceHolder from '@/assets/images/avatarplaceholder.png'
import axios from "axios";

// components
import MyBreadCrumbs from '@/components/_shared/MyBreadCrumbs'
import Header from '@/components/_shared/Header'

const buttonStyle = { height: "100%", color: "white" }

const StudentList = () => {
  const [labInfo, setLabInfo] = useState([]);
  const [students, setStudents] = useState([]);

  const { groupId, groupNo } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // fetch data from api
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getStudentListInGroupWithLabScore?group_id=${groupId}`, { withCredentials: true })

        // set the data to state
        if (res.data.status) {
          setLabInfo(res.data.payload.lab_info);
          setStudents(res.data.payload.student_list);
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [])

  return (
    <Box>
      <Stack spacing={"20px"} >
        <MyBreadCrumbs items={[
          { label: 'My Groups', href: '/ins' },
          { label: `Group ${groupNo}`, href: `/ins/g/${groupId}/${groupNo}` },
          { label: 'Student List', href: '#' }
        ]} />

        <Header logoSrc={blueFolder} title={`Group ${groupNo}`} />

        <Stack spacing={"10px"}>
          <Box>
            <Link to={`/ins/g/${groupId}/${groupNo}/add-stu`} ><Button variant="outlined" color="primary" startIcon={<AddCircleIcon color="primary" />} >Add Student</Button></Link>
          </Box>

          {/* Table Head */}
          <Stack direction={"row"} spacing={"5px"} width={"fit-content"} sx={{ position: "sticky", top: "0", bgcolor: "var(--ebony)", zIndex: "10", paddingY: "10px" }} >
            <Stack direction="row" spacing={"5px"} sx={{ position: "sticky", left: "80px", zIndex: "10", bgcolor: "var(--ebony)" }} >
              <Box width={120} className="table-head-column">
                <Button fullWidth sx={buttonStyle}  >Avatar</Button>
              </Box>
              <Box width={150} className="table-head-column">
                <Button fullWidth sx={buttonStyle} >Student ID</Button>
              </Box>
              <Box width={250} className="table-head-column">
                <Button fullWidth sx={buttonStyle} >Name</Button>
              </Box>
            </Stack>
            {labInfo.map((lab, index) => (
              <Box width={85} key={index} className="table-head-column">
                <Button fullWidth sx={buttonStyle} >Lab {index + 1} <br /> ({lab.chapter_fullmark})</Button>
              </Box>
            ))}
            <Box width={85} className="table-head-column">
              <Button fullWidth sx={buttonStyle} >Total</Button>
            </Box>
          </Stack>
          {students.map((student, index) => (
            <Stack
              key={index}
              direction={"row"}
              spacing={"5px"}
              paddingY={"10px"}
              bgcolor={"#142142"}
              width={"fit-content"}
              sx={{ borderRadius: "8px", position: "sticky", left: 0, ":hover": { bgcolor: "var(--hover)" } }} /* this one */
            >
              <Stack direction="row" spacing={"5px"} sx={{ position: "sticky", left: "80px", zIndex: "10", bgcolor: "inherit" }}> {/* and this one */}
                <Box width={120} className="table-body-column" paddingX={"10px"}>
                  <img src={student.avatar ? `${import.meta.env.VITE_BASE_URL}/${student.avatar}` : avatarPlaceHolder} alt="user avatar" className="image" />
                </Box>
                <Stack gap={"10px"} width={150} className="table-body-column" paddingX={"10px"}>
                  {student.stu_id}
                  <Button variant="contained" size="small" sx={{ textTransform: "none", fontSize: "14px" }}>Reset Password</Button>
                </Stack>
                <Box width={250} className="table-body-column" sx={{ textAlign: "left", justifyContent: "flex-start", paddingX: "15px" }} paddingX={"10px"}>
                  {student.stu_firstname + " " + student.stu_lastname}
                </Box>
              </Stack>
              <Link to={`/ins/g/${groupId}/${groupNo}/score/stu/:studentId`}>
                <Stack direction={"row"} spacing={"5px"} height={"100%"} >
                  {[...Array(labInfo.length)].map((_, i) => (
                    <Box key={i} width={85} className="table-body-column">
                      {student.chapter_score[String(i + 1)]}
                    </Box>
                  ))}
                </Stack>
              </Link>
              <Box width={85} className="table-body-column">
                {Object.values(student["chapter_score"]).reduce((a, b) => a + b, 0)}
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box >
  )
}

export default StudentList