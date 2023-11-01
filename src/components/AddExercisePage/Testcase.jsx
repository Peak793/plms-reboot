import { Stack, Typography, TextField, FormControlLabel, Switch, Button, Grid } from "@mui/material"
import { useState } from "react";
import MyCodeEditor from "@/components/_shared/MyCodeEditor";
import TerminalBlock from "@/components/_shared/TerminalBlock";

const Testcase = () => {
  const [showToStudent, setShowToStudent] = useState(true);
  const [useForMarking, setUseForMarking] = useState(true);

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
          <Typography>Testcase 1 :</Typography>
          <TextField size="small" type="text" label="Testcase name" />
          <FormControlLabel
            value="show-to-student"
            control={<Switch color="success" checked={showToStudent} onChange={() => setShowToStudent(value => !value)} />}
            label="Show to student :"
            labelPlacement="start"
          />
          <FormControlLabel
            value="use-for-marking"
            control={<Switch color="success" checked={useForMarking} onChange={() => setUseForMarking(value => !value)} />}
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
          <MyCodeEditor
            basicSetup={{
              lineNumbers: false,
              foldGutter: false,
              syntaxHighlighting: false,
            }}
            height='150px'
          />
        </Grid>
        <Grid item className="hide-cursor" xs={12} md={6}>
          <TerminalBlock text={""} />
        </Grid>
      </Grid>
    </Stack >
  )
}

export default Testcase