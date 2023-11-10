/* eslint-disable react/prop-types */
import { Stack, Typography, TextField, FormControlLabel, Switch, Button, Grid } from "@mui/material"
import TerminalBlock from "@/components/_shared/TerminalBlock";
import InputTerminalBlock from "@/components/_shared/InputTerminalBlock";

const Testcase = ({ testcaseData, testcase, index }) => {

  const handleInputChange = (value, index) => {
    testcaseData.setValue(prev => {
      const newTestcase = [...prev]; // Create a new array
      newTestcase[index].testcase_content = value; // Update the value
      return newTestcase; // Return the new array
    });
  }

  return (
    <Stack>
      <Stack direction={"row"} spacing={"10px"} alignItems={"center"} justifyContent={"space-between"}
        sx={{
          bgcolor: "rgba(25, 44, 91, 0.50)",
          width: "100%",
          padding: "5px 10px",
          borderRadius: "8px 8px 0px 0px",
          flexWrap: "wrap"
        }}
      >
        <Stack direction={"row"} spacing={"10px"} alignItems={"center"} >
          <Typography>Testcase {index + 1} :</Typography>
          <TextField size="small" type="text" value={testcase.testcase_note || ""} label="Testcase name" />
          <FormControlLabel
            value="show-to-student"
            control={<Switch color="success" checked={testcase.show_to_student === "yes" ? true : false} onChange={() => { }} />}
            label="Show to student :"
            labelPlacement="start"
          />
          <FormControlLabel
            value="use-for-marking"
            control={<Switch color="success" checked={testcase.active === "yes" ? true : false} onChange={() => { }} />}
            label="Use for marking :"
            labelPlacement="start"
          />
        </Stack>
        <Button variant='contained' size='midium' sx={{
          paddingX: "25px",
          borderRadius: "8px",
          bgcolor: "var(--cerulean )",
          textTransform: "none",
          flexShrink: "0",
        }} >Run</Button>
      </Stack>
      <Grid container spacing={"5px"} >
        <Grid item xs={12} md={6} >
          <InputTerminalBlock value={testcase.testcase_content} onChange={(e) => handleInputChange(e.target.value, index)} />
        </Grid>
        <Grid item className="hide-cursor" xs={12} md={6}>
          <TerminalBlock text={testcase.testcase_output} />
        </Grid>
      </Grid>
    </Stack >
  )
}

export default Testcase