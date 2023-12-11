import { Stack } from "@mui/material"
import Split from 'react-split'

import MyBreadCrumbs from '@/components/_shared/MyBreadCrumbs'
import ProblemPanel from '@/components/StuExercise/ProblemPanel'
import WorkSpacePanel from '@/components/StuExercise/WorkSpacePanel'


const StuExcercise = () => {
  return <Stack spacing={"20px"} height={"calc(100% - 96px)"} position={"absolute"} sx={{ width: "calc(100% - 64px)" }} >
    <MyBreadCrumbs items={[
      { label: 'Exercise', href: '#' },
      { label: 'Exercise Name', href: '#' },
    ]} />

    <Split
      className="split stu-exercise"
      sizes={[45, 55]}
      minSize={460}
      expandToMin={false}
      gutterSize={10}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
    >
      <ProblemPanel />
      <WorkSpacePanel />
    </Split>

  </Stack>
}

export default StuExcercise