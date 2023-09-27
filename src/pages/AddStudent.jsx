import { Box, Stack, Typography } from "@mui/material"
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import blueFolder from "@/assets/images/BlueFolder-Icon.png"

const AddStudent = () => {
  return (
    <Box >
      <Stack spacing={"20px"} >
        <MyBreadCrumbs items={[
          { label: 'My Groups', href: '#' },
          { label: 'Group 401', href: '#' },
        ]} />
        <Stack spacing={1} direction={"row"} >
          <div className="page-icon" >
            <img src={blueFolder} alt="page name icon" />
          </div>
          <Typography variant='h6' component={"h1"} gutterBottom>Group 401</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default AddStudent