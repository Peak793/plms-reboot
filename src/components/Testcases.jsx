import { Stack, Typography, Button } from "@mui/material"
import Testcase from "./Testcase"

const Testcases = () => {
  return (
    <Stack spacing={"20px"} sx={{
      padding: "20px",
      border: "1px solid #202739",
      borderRadius: "8px",
    }} >
      <Stack direction={"row"} justifyContent={"space-between"} >
        <Typography variant='h6' >Test case</Typography>
        <Stack direction={"row"} spacing={"10px"} >
          <Button variant='contained' size='medium' sx={{
            paddingX: "25px",
            borderRadius: "8px",
            bgcolor: "var(--cerulean )",
            textTransform: "none",
          }} >Run all testcases</Button>
          <Button variant='contained' size='medium' color="success" sx={{
            paddingX: "25px",
            borderRadius: "8px",
            textTransform: "none",
          }} >Submit</Button>
        </Stack>
      </Stack>

      <Testcase />

    </Stack>
  )
}

export default Testcases