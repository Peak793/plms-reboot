import { Box, Stack } from "@mui/material"
import blueFolder from "@/assets/images/BlueFolder-Icon.png"

// components
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import Header from "@/components/Header"

const AddStudent = () => {
  return (
    <Box >
      <Stack spacing={"20px"} >
        <MyBreadCrumbs items={[
          { label: 'My Groups', href: '#' },
          { label: 'Group 401', href: '#' },
        ]} />

        <Header logoSrc={blueFolder} title="Group 401" />

      </Stack>
    </Box>
  )
}

export default AddStudent