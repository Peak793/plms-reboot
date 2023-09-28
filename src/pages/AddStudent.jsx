import { Box, Button, Stack, TextField } from "@mui/material"
import blueFolder from "@/assets/images/BlueFolder-Icon.png"

// components
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import Header from "@/components/Header"

const placeholder = `Copy from Excel and paste here

1 6xxxxxxx Name Surname
2 6xxxxxxx Name Surname
3 6xxxxxxx Name Surname
...
          `

const AddStudent = () => {
  return (
    <Box >
      <Stack spacing={"20px"}>
        <MyBreadCrumbs items={[
          { label: 'My Groups', href: '#' },
          { label: 'Group 401', href: '#' },
        ]} />

        <Header logoSrc={blueFolder} title="Group 401" />

        <Box >
          <TextField color="primary" variant="outlined" fullWidth multiline rows={25} placeholder={placeholder} />
        </Box>

        <Stack direction="row" justifyContent={"flex-end"} >
          <Button variant="contained" color="primary" >Submit</Button>
        </Stack>

      </Stack>
    </Box>
  )
}

export default AddStudent