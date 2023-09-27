import { Box, Container, Stack, Typography, Button } from "@mui/material"
import blueFolderIcon from '@/assets/images/BlueFolder-Icon.png'
import avatarPlaceholder from '@/assets/images/AvatarPlaceholder.png'
import classes from '@/assets/css/StudentScore.module.css'

// components
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import Header from '@/components/Header'

const StudentScore = () => {
  return (
    <Box>
      <Container>
        <Stack spacing={"20px"} >
          <MyBreadCrumbs items={[
            { label: 'Available Groups', href: '#' },
          ]} />

          <Header logoSrc={blueFolderIcon} title="Group 401 (Student)" />

          <Stack spacing={"10px"} direction={"row"} >
            <Box width={80} height={80} borderRadius={"8px"} overflow={"hidden"} >
              <img className="image-contain" src={avatarPlaceholder} alt="" />
            </Box>

            <Stack className="outlined" spacing={"10px"} bgcolor={"var(--mirage)"} padding={"10px 20px"} borderRadius={"8px"} >
              <Stack direction={"row"} spacing={"5px"}>
                <Typography variant="subitem2" color="primary" >Student ID</Typography>
                <Typography>63010202</Typography>
              </Stack>
              <Stack direction={"row"} spacing={"5px"}>
                <Typography variant="subitem2" color="primary" >Name</Typography>
                <Typography>ชรินดา สนธิดี (แบม)</Typography>
              </Stack>
            </Stack>

            <Stack className="outlined" spacing={"10px"} bgcolor={"var(--mirage)"} padding={"10px 20px"} borderRadius={"8px"} >
              <Stack direction={"row"} spacing={"5px"}>
                <Typography variant="subitem2" color="primary" >Group ID</Typography>
                <Typography>22020402</Typography>
              </Stack>
              <Stack direction={"row"} spacing={"5px"}>
                <Typography variant="subitem2" color="primary" >Group</Typography>
                <Typography>401</Typography>
              </Stack>
            </Stack>
          </Stack>

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
                      <Box key={index} className={classes['item-score-box']}>
                        <Typography>ข้อ {index + 1}</Typography>
                        <Typography>2/2</Typography>
                      </Box>
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