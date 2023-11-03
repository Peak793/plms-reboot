import { Box, Container, Stack, Typography, Button } from "@mui/material"
import blueFolderIcon from '@/assets/images/bluefoldericon.png'
import avatarPlaceholder from '@/assets/images/avatarplaceholder.png'
import classes from '@/assets/css/StudentScore.module.css'
import { Link } from "react-router-dom"

// components
import MyBreadCrumbs from '@/components/_shared/MyBreadCrumbs'
import Header from '@/components/_shared/Header'
import StudentBriefInfo from "@/components/_shared/StudentBriefInfo"

const StudentScore = () => {
  return (
    <Box>
      <Container>
        <Stack spacing={"20px"} >
          <MyBreadCrumbs items={[
            { label: 'Available Groups', href: '#' },
          ]} />

          <Header logoSrc={blueFolderIcon} title="Group 401 (Student)" />

          <StudentBriefInfo
            imgSrc={avatarPlaceholder}
            studentId="63010202"
            studentName="ชรินดา สนธิดี"
            studentNickName="แบม"
            groupId="22020402"
            groupNo={401}
          />

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
                <Box flex={1.5} className={classes['row-info-box']} >
                  <Typography>{index + 1}. Introduction</Typography>
                </Box>
                <Box flex={1} className={classes['row-info-box']} >
                  <Typography sx={{ color: "var(--raven)" }} >End date</Typography>
                  <Typography>30/09/2023 09:30 am</Typography>
                </Box>
                <Box width={395} className={classes['row-info-box']}>
                  <Stack direction={"row"} flexWrap={"wrap"} >
                    {[...Array(Math.floor(Math.random() * 10) + 1)].map((_, index) => (
                      <Link key={index} to="/ins/group/:groupId/sub-his/stu/:studentId/c/:chapterId/ex/:exerciseId" >
                        <Box className={classes['item-score-box']}>
                          <Typography>ข้อ {index + 1}</Typography>
                          <Typography>2/2</Typography>
                        </Box>
                      </Link>
                    ))}
                  </Stack>
                </Box>
                <Box alignItems={"center"} width={90} className={`outlined ${classes['row-info-box']}`} >
                  <Typography>คะแนน</Typography>
                  <Typography>10/10</Typography>
                </Box>
              </Stack>
            ))}
          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default StudentScore