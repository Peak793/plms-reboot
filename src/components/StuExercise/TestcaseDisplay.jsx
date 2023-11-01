import { Stack, Box, Typography } from "@mui/material"
import TerminalBlock from "@/components/_shared/TerminalBlock";

const placeholder = ` *** Distance *** 
Enter Velocity Acceleration Time: 10,0,10
Your Distance = 100.00
`

const TestcaseDisplay = () => {
  return (
    <Stack spacing={"10px"} >
      <Stack>
        <Box padding={"10px"} bgcolor={"var(--biscay)"} borderRadius={"8px 8px 0px 0px"} >
          <Typography>Testcase 1:</Typography>
        </Box>
        <Box borderRadius={"0px 0px 8px 8px"} >
          <TerminalBlock text={placeholder} hug="true" />
        </Box>
      </Stack>
      <Stack>
        <Box padding={"10px"} bgcolor={"var(--biscay)"} borderRadius={"8px 8px 0px 0px"} >
          <Typography>Testcase 1:</Typography>
        </Box>
        <Box borderRadius={"0px 0px 8px 8px"} >
          <TerminalBlock text={placeholder} hug="true" />
        </Box>
      </Stack>
    </Stack>
  )
}

export default TestcaseDisplay