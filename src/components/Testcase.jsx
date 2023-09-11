import { Stack, Typography, TextField, FormControlLabel, Switch, Button, Grid } from "@mui/material"
import CodeMirror from '@uiw/react-codemirror';
import { githubDark } from "@uiw/codemirror-theme-github"
import { useState } from "react";

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
      <Grid container >
        <Grid xs={12} md={6} padding={"0px 2.5px 0px 0px"} >
          <CodeMirror
            basicSetup={{
              lineNumbers: false,
              foldGutter: false,
            }}
            theme={githubDark}
            mode={"python"}
            height='150px'
          />
        </Grid>
        <Grid className="hide-cursor" xs={12} md={6} padding={"0px 0px 0px 2.5px"}>
          <CodeMirror
            basicSetup={{
              lineNumbers: false,
              foldGutter: false,
              highlightActiveLine: false,
              highlightActiveLineGutter: false,
              highlightSpecialChars: false,
              history: false,
              drawSelection: false,
              dropCursor: false,
              rectangularSelection: false,
              crosshairCursor: true,
              highlightSelectionMatches: false,
            }}
            readOnly
            theme={githubDark}
            mode={"python"}
            height='150px'
          />
        </Grid>
      </Grid>
    </Stack >
  )
}

export default Testcase