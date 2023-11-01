import { Stack, Typography, Box, Button } from "@mui/material"
import PanelHeader from "@/components/StuExercise/PanelHeader"
import CodeIcon from '@mui/icons-material/Code';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MyCodeEditor from "@/components/_shared/MyCodeEditor";
import Split from "react-split";
import MyDiff from "@/components/_shared/MyDiff";

const expected = ` *** Distance *** 
Enter Velocity Acceleration Time: 10,0,10
Your Distance = 80.00`
const actual = ` *** Distance *** 
Enter Velocity Acceleration Time: 10,0,10
Your Distance = 100.00`

const WorkSpacePanel = () => {
  return (
    <Stack height={"100%"} sx={{ borderRadius: "8px", position: "relative" }}>
      <PanelHeader display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
        <Stack direction={"row"} spacing={"10px"} >
          <CodeIcon />
          <Typography>Code editor</Typography>
          <ExpandLessIcon />
        </Stack>
        <Stack>

        </Stack>
      </PanelHeader>

      <Box sx={{ flex: "1" }} >
        <Split
          className="work-space"
          sizes={[100, 0]}
          minSize={[200, 54]}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          direction="vertical"
          cursor="col-resize"
        >
          <Box overflow={"auto"} borderRadius="8px" >
            <MyCodeEditor minHeight="100%" />
          </Box>

          <Stack borderRadius={"8px"} sx={{ overflowY: "hidden", position: "relative" }} >
            <PanelHeader display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Stack direction={"row"} spacing={"10px"} >
                <CodeIcon />
                <Typography>Result</Typography>
                <ExpandLessIcon />
              </Stack>
              <Stack>
                <Button color="primary" variant="contained" sx={{ textTransform: "none" }} >Submit</Button>
              </Stack>
            </PanelHeader>
            <Stack spacing={"10px"} padding="5px" bgcolor="black" height="100%" sx={{ overflowY: "auto" }} >
              <MyDiff expected={expected} actual={actual} />
              <MyDiff expected={expected} actual={actual} />
              <MyDiff expected={expected} actual={actual} />
              <MyDiff expected={expected} actual={actual} />
            </Stack>
          </Stack>
        </Split>
      </Box>
    </Stack>
  )
}

export default WorkSpacePanel