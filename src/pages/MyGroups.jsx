import { Box, Container, Stack, Grid } from "@mui/material"
import slideShow from '@/assets/images/SlideShow-Icon.png'
import { useState } from "react"

// components
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import GroupCard from "@/components/GroupCard"
import Header from '@/components/Header'
import { useEffect } from "react"
import axios from "axios"

export default function MyGroups() {
  const [groupList, setGroupList] = useState([])

  useEffect(() => {
    const fetchGroupList = async () => {
      await axios.get(import.meta.env.VITE_BASE_API_URL + "/supervisor_rest/getGroupListById", { withCredentials: true }).then(res => {
        setGroupList(res.data.payload.group_list)
      })
    }

    fetchGroupList()
  }, [])

  return (
    <Box>
      <Container>
        <Stack spacing={"20px"} >
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/ins' },
          ]} />

          <Header logoSrc={slideShow} title="My Groups" />

          <Grid container spacing={"10px"} sx={{
            width: "100%"
          }} >
            {groupList.length !== 0 && groupList.map(group => <GroupCard
              key={group.group_id}
              groupNo={group.group_no}
              schedule={`${group.day_of_week}, ${group.time_start} - ${group.time_end}`}
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