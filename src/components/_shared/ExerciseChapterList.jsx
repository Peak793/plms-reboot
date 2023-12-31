/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material"
import ChapterListTableHead from "@/components/ExerciseChapterList/ChapterListTableHead"
import ChapterListTableBody from "@/components/ExerciseChapterList/ChapterListTableBody"

const ExerciseChapterList = ({ isLoading, data }) => {

  const calculateTotalScore = () => {
    let totalScore = 0
    data.forEach(chapter => {
      chapter.items.forEach(item => {
        totalScore += parseInt(item.stu_lab.marking)
      })
    })
    return totalScore
  }

  return (
    <Stack spacing={"10px"} >
      <ChapterListTableHead />
      {/* Table Body */}
      {!isLoading && data && data.map((chapter, index) => (
        <ChapterListTableBody key={index} chapter={chapter} />
      ))}
      {!isLoading && data &&
        <Stack direction={"row"} spacing={"5px"} >
          <Stack padding={"20px"} justifyContent="center" flex={1} sx={{
            borderRadius: "8px",
            bgcolor: "var(--mirage)",
          }} >
            <Typography variant="h5" >TotalScore</Typography>
          </Stack>
          <Box alignItems={"center"} width={90} className={`outlined ${'row-info-box'}`} >
            <Typography>คะแนน</Typography>
            <Typography>{calculateTotalScore()}/{data.reduce((acc, object) => acc + parseInt(object?.chapter_fullmark), 0)}</Typography>
          </Box>
        </Stack>
      }
    </Stack>
  )
}

export default ExerciseChapterList