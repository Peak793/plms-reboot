import { Box, Button, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import blueFolder from "@/assets/images/BlueFolder-Icon.png"
import { mockStudentsLabScores } from "../utils";
import { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const StudentList = () => {
  const [students, setStudents] = useState(mockStudentsLabScores);

  return (
    <Box>
      <Stack spacing={"20px"} >
        <MyBreadCrumbs items={[
          { label: 'My Groups', href: '#' },
          { label: 'Group 401', href: '#' },
        ]} />
        <Stack spacing={1} direction={"row"} >
          <div className="page-icon" >
            <img src={blueFolder} alt="page name icon" />
          </div>
          <Typography variant='h6' component={"h1"} gutterBottom>Group 401</Typography>
        </Stack>

        <Stack spacing={"10px"}>
          <Box>
            <Link to={"/instructor/group/:groupId/add-student"} ><Button variant="outlined" color="primary" startIcon={<AddCircleIcon color="primary" />} >Add Student</Button></Link>
          </Box>

          {/* Table Head */}
          <Stack direction={"row"} spacing={"5px"} width={"fit-content"} sx={{ position: "sticky", top: "0", bgcolor: "var(--ebony)", zIndex: "10", paddingY: "10px" }} >
            <Stack direction="row" spacing={"5px"} sx={{ position: "sticky", left: "80px", zIndex: "10", bgcolor: "var(--ebony)" }} >
              <Box width={120} className="table-head-column">
                <Button fullWidth sx={{ height: "100%" }} >Avatar</Button>
              </Box>
              <Box width={150} className="table-head-column">
                <Button fullWidth sx={{ height: "100%" }} >Student ID</Button>
              </Box>
              <Box width={180} className="table-head-column">
                <Button fullWidth sx={{ height: "100%" }} >Name</Button>
              </Box>
            </Stack>
            {[...Array(20)].map((_, index) => (
              <Box width={85} key={index} className="table-head-column">
                <Button fullWidth sx={{ height: "100%" }} >Lab {index + 1} <br /> (10)</Button>
              </Box>
            ))}
            <Box width={85} className="table-head-column">
              <Button fullWidth sx={{ height: "100%" }} >Total</Button>
            </Box>
          </Stack>
          {students.map((student, index) => (
            <Stack
              key={index}
              direction={"row"}
              spacing={"5px"}
              paddingY={"10px"}
              bgcolor={"var(--biscay)"}
              width={"fit-content"}
              sx={{ borderRadius: "8px", position: "sticky", left: 0 }}
            >
              <Stack direction="row" spacing={"5px"} sx={{ position: "sticky", left: "80px", zIndex: "10", bgcolor: "#142142" }}>
                <Box width={120} className="table-body-column" paddingX={"10px"}>
                  <img src={student.avatar} alt="user avatar" className="image" />
                </Box>
                <Stack gap={"10px"} width={150} className="table-body-column" paddingX={"10px"}>
                  {student.studentID}
                  <Button variant="contained" size="small" sx={{ textTransform: "none", fontSize: "14px" }}>Reset Password</Button>
                </Stack>
                <Box width={180} className="table-body-column" paddingX={"10px"}>
                  {student.name}
                </Box>
              </Stack>
              {student.scores.map((score, i) => (
                <Box key={i} width={85} className="table-body-column">
                  {score}
                </Box>
              ))}
              <Box width={85} className="table-body-column">
                {student.scores.reduce((acc, curr) => acc + curr, 0)}
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box >
  )
}

export default StudentList