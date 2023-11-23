import { Box, Button, Stack, Typography } from "@mui/material"
import { ABS_INS_URL, ABS_STU_URL } from "@/utils/constants/routeConst"
import { Link } from "react-router-dom"
import { useAtomValue } from "jotai"
import { userAtom } from "@/store/store"

const ExerciseChapterList = () => {
  const user = useAtomValue(userAtom);

  const getUrl = user.role === "student" ? ABS_STU_URL.DYNAMIC.EXERCISE : ABS_INS_URL.DYNAMIC.STUDENT_SUBMIT_HISTORY

  return (
    <Stack spacing={"10px"} >
      {/* Table Head */}
      <Stack direction={"row"} spacing={"5px"} >
        <Box flex={1.5} width={120} className="table-head-column">
          <Button fullWidth sx={{ height: "100%" }} >Chapter</Button>
        </Box>
        <Box flex={1} width={150} className="table-head-column">
          <Button fullWidth sx={{ height: "100%" }} >Allow Submit</Button>
        </Box>
        <Box width={395} className="table-head-column">
          <Button fullWidth sx={{ height: "100%" }} >Item Score</Button>
        </Box>
        <Box width={90} className="table-head-column">
          <Button fullWidth sx={{ height: "100%" }} >Score</Button>
        </Box>
      </Stack>
      {/* Table Body */}
      {[...Array(17)].map((_, index) => (
        <Stack key={index} direction={"row"} spacing={"5px"} >
          <Box flex={1.5} className={'row-info-box'} >
            <Typography>{index + 1}. Introduction</Typography>
          </Box>
          <Box flex={1} className={'row-info-box'} >
            <Typography sx={{ color: "var(--raven)" }} >End date</Typography>
            <Typography>30/09/2023 09:30 am</Typography>
          </Box>
          <Box width={395} className={'row-info-box'}>
            <Stack direction={"row"} flexWrap={"wrap"} >
              {[...Array(Math.floor(Math.random() * 10) + 1)].map((_, index) => (
                /* TODO: update the URL
                  "/ins/group/:groupId/sub-his/stu/:studentId/c/:chapterId/ex/:exerciseId"
                */
                <Link key={index} to={getUrl()} >
                  <Box className={'item-score-box'}>
                    <Typography>ข้อ {index + 1}</Typography>
                    <Typography>2/2</Typography>
                  </Box>
                </Link>
              ))}
            </Stack>
          </Box>
          <Box alignItems={"center"} width={90} className={`outlined ${'row-info-box'}`} >
            <Typography>คะแนน</Typography>
            <Typography>10/10</Typography>
          </Box>
        </Stack>
      ))}
      <Stack direction={"row"} spacing={"5px"} >
        <Stack padding={"20px"} justifyContent="center" flex={1} sx={{
          borderRadius: "8px",
          bgcolor: "var(--mirage)",
        }} >
          <Typography variant="h5" >TotalScore</Typography>
        </Stack>
        <Box alignItems={"center"} width={90} className={`outlined ${'row-info-box'}`} >
          <Typography>คะแนน</Typography>
          <Typography>100/100</Typography>
        </Box>
      </Stack>
    </Stack>
  )
}

export default ExerciseChapterList