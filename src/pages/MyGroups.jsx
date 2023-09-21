import { Box, Container, Typography, Stack, Grid } from "@mui/material"
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import slideShow from '@/assets/images/SlideShow-Icon.png'
import GroupCard from "../components/GroupCard"

const groups = [
  {
    groupNo: "401",
    schedule: "เสาร์, 09:00:00 - 12:00:00",
    year: "2022",
    semester: "1",
    department: "Computer Engineering"
  },
  {
    groupNo: "402",
    schedule: "จันทร์, 09:00:00 - 12:00:00",
    year: "2022",
    semester: "1",
    department: "Computer Engineering"
  },
  {
    groupNo: "403 ",
    schedule: "พุธ, 09:00:00 - 12:00:00",
    year: "2022",
    semester: "1",
    department: "Computer Engineering"
  },
]

export default function MyGroups() {
  return (
    <Box>
      <Container>
        <Stack spacing={"20px"} >
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/instructor' },
          ]} />
          <Stack spacing={1} direction={"row"} >
            <div className="page-icon" >
              <img src={slideShow} alt="page name icon" />
            </div>
            <Typography variant='h6' component={"h1"} gutterBottom>Variables Expression Statement</Typography>
          </Stack>

          <Grid container spacing={"10px"} sx={{
            width: "100%"
          }} >
            {groups.map(group => <GroupCard
              key={group.groupNo}
              groupNo={group.groupNo}
              schedule={group.schedule}
              year={group.year}
              semester={group.semester}
              department={group.department}
            />)}
          </Grid>
        </Stack>
      </Container>
    </Box >
  )
}