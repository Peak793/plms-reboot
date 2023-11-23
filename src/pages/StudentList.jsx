import { Box, Button, Skeleton, Stack } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import blueFolder from "@/assets/images/bluefoldericon.png";
import { useState, useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import avatarPlaceHolder from "@/assets/images/avatarplaceholder.png";
import { buttonStyle } from "@/utils";
import { getStudentListInGroupWithLabScore } from "@/utils/api";
import { ABS_INS_URL } from "@/utils/constants/routeConst";
import { useQuery } from "@tanstack/react-query";

// components
import MyBreadCrumbs from "@/components/_shared/MyBreadCrumbs";
import Header from "@/components/_shared/Header";


const buttonStyleExtended = { ...buttonStyle, minHeight: "63.48px" }

const StudentList = () => {
  const [labInfo, setLabInfo] = useState([]);
  const [students, setStudents] = useState([]);

  const { groupId } = useParams();

  const { data: studentList = [], isLoading } = useQuery({
    queryKey: ["studentList", groupId],
    queryFn: ({ queryKey }) => getStudentListInGroupWithLabScore(queryKey[1]),
  });

  useEffect(() => {
    if (!isLoading && studentList) {
      setLabInfo(studentList.lab_info);
      setStudents(studentList.student_list);
    }
  }, [isLoading, studentList]);

  return (
    <Box>
      <Stack spacing={"20px"}>
        <MyBreadCrumbs
          items={[
            { label: "My Groups", href: "/ins" },
            { label: `Group ${studentList.group_no}`, href: `/ins/group/${groupId}/` },
            { label: "Student List", href: "#" },
          ]}
        />

        <Header logoSrc={blueFolder} title={`Group ${studentList.group_no}`} />

        <Stack spacing={"10px"}>
          <Box>
            <Link to={ABS_INS_URL.DYNAMIC.ADD_STUDENT(groupId)} >
              <Button
                variant="outlined"
                color="primary"
                startIcon={<AddCircleIcon color="primary" />}
              >
                Add Student
              </Button>
            </Link>
          </Box>

          {/* Table Head */}
          <Stack
            direction={"row"}
            spacing={"5px"}
            width={"fit-content"}
            sx={{
              position: "sticky",
              top: "0",
              bgcolor: "var(--ebony)",
              zIndex: "10",
              paddingY: "10px",
            }}
          >
            <Stack
              direction="row"
              spacing={"5px"}
              sx={{
                position: "sticky",
                left: "80px",
                zIndex: "10",
                bgcolor: "var(--ebony)",
              }}
            >
              <Box width={120} className="table-head-column">
                <Button fullWidth sx={buttonStyleExtended}>
                  Avatar
                </Button>
              </Box>
              <Box width={150} className="table-head-column">
                <Button fullWidth sx={buttonStyleExtended}>
                  Student ID
                </Button>
              </Box>
              <Box width={250} className="table-head-column">
                <Button fullWidth sx={buttonStyleExtended}>
                  Name
                </Button>
              </Box>
            </Stack>
            {isLoading && [...Array(11)].map((_, index) => <Skeleton key={index} variant="rounded" width={85} height={63.48} animation="wave" />)}
            {!isLoading && labInfo.map((lab, index) => (
              <Box width={85} key={index} className="table-head-column">
                <Button fullWidth sx={buttonStyleExtended}>
                  Lab {index + 1} <br /> ({lab.chapter_fullmark})
                </Button>
              </Box>
            ))}
            {!isLoading && <Box width={85} className="table-head-column">
              <Button fullWidth sx={buttonStyleExtended}>
                Total
              </Button>
            </Box>}
          </Stack>
          {isLoading && <>
            <Skeleton variant="rounded" width={1520} height={120} />
            <Skeleton variant="rounded" width={1520} height={120} />
            <Skeleton variant="rounded" width={1520} height={120} />
            <Skeleton variant="rounded" width={1520} height={120} />
          </>}
          {!isLoading && students.map((student, index) => (
            <Stack
              key={index}
              direction={"row"}
              spacing={"5px"}
              paddingY={"10px"}
              bgcolor={"#142142"}
              width={"fit-content"}
              sx={{
                borderRadius: "8px",
                position: "sticky",
                left: 0,
                ":hover": { bgcolor: "var(--hover)" },
              }}
            >
              <Stack
                direction="row"
                spacing={"5px"}
                sx={{
                  position: "sticky",
                  left: "80px",
                  zIndex: "10",
                  bgcolor: "inherit",
                }}
              >
                <Box width={120} className="table-body-column" paddingX={"10px"}>
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
                  gap={"10px"}
                  width={150}
                  className="table-body-column"
                  paddingX={"10px"}
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
                  paddingX={"10px"}
                >
                  {student.stu_firstname + " " + student.stu_lastname}
                </Box>
              </Stack>
              {/* TODO: Change placeholder value in the URL. */}
              <Link to={ABS_INS_URL.DYNAMIC.STUDENT_INDIVIDUAL(groupId, ":studentId")} >
                <Stack direction={"row"} spacing={"5px"} height={"100%"}>
                  {[...Array(labInfo.length)].map((_, i) => (
                    <Box key={i} width={85} className="table-body-column">
                      {student.chapter_score[String(i + 1)]}
                    </Box>
                  ))}
                </Stack>
              </Link>
              <Box width={85} className="table-body-column">
                {Object.values(student["chapter_score"]).reduce(
                  (a, b) => a + b,
                  0
                )}
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box >
  );
};

export default StudentList;