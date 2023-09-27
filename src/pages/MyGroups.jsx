import { Box, Container, Typography, Stack, Grid } from "@mui/material"
import slideShow from '@/assets/images/SlideShow-Icon.png'

// components
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import GroupCard from "@/components/GroupCard"
import Header from '@/components/Header'

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

          <Header logoSrc={slideShow} title="Variables Expression Statement" />

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