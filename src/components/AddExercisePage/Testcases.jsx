/* eslint-disable react/prop-types */
import { Stack, Typography, Button } from "@mui/material"
import { useForm, Controller } from 'react-hook-form';
import Testcase from "@/components/AddExercisePage/Testcase"

const Testcases = ({ testcaseData = [] }) => {

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

      {/* <Testcase /> */}

      {testcaseData.map((testcase, index) => <Testcase key={index} index={index} testcaseData={testcaseData} testcase={testcase} />)}

    </Stack>
  )
}

export default Testcases