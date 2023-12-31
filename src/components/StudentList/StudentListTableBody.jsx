/* eslint-disable react/prop-types */
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { ABS_INS_URL } from "@/utils/constants/routeConst";
import { useParams } from "react-router-dom";
import avatarPlaceHolder from "@/assets/images/avatarplaceholder.png";

const StudentListTableBody = ({ isLoading, labInfo, students }) => {
  const { groupId } = useParams();

  return (
    <>
      {!isLoading &&
        students.map((student, index) => (
          <Stack
            key={index}
            direction="row"
            spacing="5px"
            paddingY="10px"
            bgcolor="#142142"
            width="fit-content"
            sx={{
              borderRadius: "8px",
              position: "sticky",
              left: 0,
              ":hover": { bgcolor: "var(--hover)" },
            }}
          >
            <Stack
              direction="row"
              spacing="5px"
              sx={{
                position: "sticky",
                left: "80px",
                zIndex: "10",
                bgcolor: "inherit",
              }}
            >
              <Box width={120} className="table-body-column" paddingX="10px">
                <img
                  src={
                    student.avatar
                      ? `${import.meta.env.VITE_BASE_URL}/${student.avatar}`
                      : avatarPlaceHolder
                  }
                  alt="user avatar"
                  className="image"
                />
              </Box>
              <Stack
                gap="10px"
                width={150}
                className="table-body-column"
                paddingX="10px"
              >
                {student.stu_id}
                <Button
                  variant="contained"
                  size="small"
                  sx={{ textTransform: "none", fontSize: "14px" }}
                >
                  Reset Password
                </Button>
              </Stack>
              <Box
                width={250}
                className="table-body-column"
                sx={{ textAlign: "left", justifyContent: "flex-start", paddingX: "15px" }}
                paddingX="10px"
              >
                {student.stu_firstname + " " + student.stu_lastname}
              </Box>
            </Stack>

            <Link to={ABS_INS_URL.DYNAMIC.STUDENT_SCORE(groupId, student.stu_id)}>
              <Stack direction="row" spacing="5px" height="100%">
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
    </>
  );
};

export default StudentListTableBody;