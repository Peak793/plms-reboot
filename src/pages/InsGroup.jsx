import { Box, Button, Container, Grid, Stack, Typography, FormControlLabel, Switch } from "@mui/material"
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import blueFolderIcon from '@/assets/images/BlueFolder-Icon.png'
import classes from '@/assets/css/InsGroup.module.css'
import TimeSchedule from "../components/TimeSchedule"
import LoginIcon from '@mui/icons-material/Login';
import LabRow from "../components/LabRow"

const InsGroup = () => {
  return (
    <Box>
      <Container>
        <Stack spacing={"20px"} >
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/instructor' },
            { label: 'Group 401', href: '#' },
          ]} />

          <Stack spacing={1} direction={"row"} >
            <div className="page-icon" >
              <img src={blueFolderIcon} alt="page name icon" />
            </div>
            <Typography variant='h6' component={"h1"} gutterBottom>Group 401 (Student)</Typography>
          </Stack>

          <Grid container spacing={"10px"} >
            <Grid item xs={4} >
              <Stack spacing={"10px"} className={classes['info-box']} padding={"20px"} >

                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Group ID</Typography>
                    <Typography >22020402</Typography>
                  </Stack>
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Group</Typography>
                    <Typography >401</Typography>
                  </Stack>
                </Stack>

                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Year</Typography>
                    <Typography >2022</Typography>
                  </Stack>
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Semester</Typography>
                    <Typography >1</Typography>
                  </Stack>
                </Stack>

                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Instructor</Typography>
                    <Typography >ชรินดา สนธิดี</Typography>
                  </Stack>
                </Stack>

                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Class date</Typography>
                  </Stack>
                </Stack>

                <TimeSchedule classDate="เสาร์, 09:00:00 - 12:00:00" />

              </Stack>
            </Grid>
            <Grid item xs={4} >
              <Stack spacing={"10px"} className={classes['info-box']} padding={"20px"}>
                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Department</Typography>
                    <Typography >Computer Engineering</Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >All Student</Typography>
                    <Typography >45</Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Student online</Typography>
                    <Typography >33</Typography>
                  </Stack>
                </Stack>
                <Box>
                  <Button variant="contained" color="primary" startIcon={<LoginIcon />} sx={{ textTransform: "none" }} >
                    Sign out all student
                  </Button>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={4} >
              <Stack spacing={"10px"} className={classes['info-box']} padding={"20px"}
                sx={{
                  justifyContent: "center",
                  alignItems: "start"
                }}
              >
                <FormControlLabel
                  value="start"
                  control={<Switch color="success" />}
                  label={<Typography color={"primary"} fontWeight={600} >Allow Login</Typography>}
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="start"
                  control={<Switch color="success" />}
                  label={<Typography color={"primary"} fontWeight={600} >Upload picture</Typography>}
                  labelPlacement="start"
                />
              </Stack>
            </Grid>
          </Grid>

          <Stack spacing={"10px"}>
            {/* Table Head */}
            <Stack direction={"row"} spacing={"5px"} sx={{ position: "sticky", top: "0", bgcolor: "var(--ebony)", zIndex: "10", paddingY: "10px" }} >
              <Box flex={1} className="table-head-column">
                <Button fullWidth sx={{ height: "100%" }} >Chapter</Button>
              </Box>
              <Box width={100} className="table-head-column">
                <Button fullWidth sx={{ height: "100%" }} >Score</Button>
              </Box>
              <Box width={300} className="table-head-column">
                <Button fullWidth sx={{ height: "100%" }} >Access exercise</Button>
              </Box>
              <Box width={300} className="table-head-column">
                <Button fullWidth sx={{ height: "100%" }} >Allow submit</Button>
              </Box>
            </Stack>

            {[...Array(17)].map((_, index) => (
              <LabRow key={index} />
            ))}

          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default InsGroup