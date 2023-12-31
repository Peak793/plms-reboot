import { useEffect } from "react";
import { Container, Typography, Grid, Box, Stack, Button } from "@mui/material"
import StudentInfoCard from "@/components/Home/StudentInfoCard"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Assignments from "@/components/Home/Assignments"
import ComputerEng from "@/assets/images/computereng.png"
import happyCoding from "@/assets/images/happycoding.png"
import { useAtomValue, useSetAtom } from "jotai"
import { userAtom, sidebarSelectedAtom } from "@/store/store"

const StuHome = () => {
  const user = useAtomValue(userAtom)
  const setSelected = useSetAtom(sidebarSelectedAtom);

  useEffect(() => {
    setSelected('stu_home');
  }, [])

  return (
    <Container>
      <Stack spacing={"20px"} >
        <Box padding={"30px"} bgcolor={"var(--mirage)"} borderRadius={"8px"} >
          <Grid container spacing={1} >
            <Grid item xs={12} md={8} >
              <Stack spacing={"20px"} >
                <Box>
                  <Typography variant="h5" component="h1" >Wellcome to,</Typography>
                  <Typography variant="h3" component="h1" color={"var(--cerulean)"} >Computer Programming python.</Typography>
                </Box>
                <StudentInfoCard user={user} />
              </Stack>
            </Grid>
            <Grid item md={4} sx={{ display: { xs: 'none', md: 'block' } }} >
              <Stack justifyContent={"center"} alignItems={"center"} height={"100%"} >
                <img width={"200px"} height={"200px"} src={ComputerEng} alt="Computer Engineer" />
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Assignments />
        <Stack direction="row" borderRadius="8px" overflow="hidden" bgcolor={"var(--biscay)"} >
          <Stack flex={1} justifyContent='center' alignItems='center' bgcolor="#133558" >
            <img src={happyCoding} alt="happy coding" />
          </Stack>
          <Stack flex={1} spacing="50px" justifyContent='center' alignItems='center' >
            <Stack justifyContent='center' alignItems='center'>
              <Typography variant="h5" >The heart concept is</Typography>
              <Typography variant="h3" color="var(--cerulean)" >&quot;Learning by doing&quot;</Typography>
            </Stack>
            <Button variant="contained" sx={{ paddingX: "25px", alignmentBaseline: "baseline" }} endIcon={<KeyboardDoubleArrowRightIcon />} >
              <Typography >Let&apos;s start doing exercises !</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default StuHome