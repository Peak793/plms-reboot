import { Box, Container, Grid, Stack, Typography, Button, Menu, MenuItem, FormControlLabel, FormGroup, Checkbox } from "@mui/material"
import MyBreadCrumbs from "@/components/MyBreadCrumbs"
import peopleIcon from "@/assets/images/People-Icon.png"
import { useState } from "react"
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { dayColor } from "../utils"

const AvailableGroups = () => {
  const [selectedSemester, setSelectedSemester] = useState([])
  const [selectedClassDate, setselectedClassDate] = useState([])
  const [selectedInstructor, setSelectedInstructor] = useState([])
  const semesterPopupState = usePopupState({ variant: 'popover', popupId: 'semesterMenu' })
  const classDatePopupState = usePopupState({ variant: 'popover', popupId: 'classDateMenu' })
  const instructorPopupState = usePopupState({ variant: 'popover', popupId: 'instructorMenu' })

  return (
    <Box>
      <Container>
        <Stack spacing={"20px"} >
          <MyBreadCrumbs items={[
            { label: 'Available Groups', href: '#' },
          ]} />

          <Stack spacing={1} direction={"row"} >
            <img src={peopleIcon} alt="page name icon" />
            <Typography variant='h6' component={"h1"} gutterBottom>Variables Expression Statement</Typography>
          </Stack>

          {/* Table */}
          <Stack spacing={"10px"}>

            {/* Table head */}
            <Grid container sx={{
              display: { xs: "none", md: "flex" }
            }} >
              <Grid item lg={1.5} className="flex-center table-head-column" sx={{ padding: "0px 2.5px" }} >
                <Button fullWidth variant="outlined">Group ID</Button>
              </Grid>
              <Grid item md={1.5} className="flex-center table-head-column" sx={{ padding: "0px 2.5px" }} >
                <Button fullWidth variant="outlined" >Group</Button>
              </Grid>
              <Grid item md={1.5} className="flex-center table-head-column" sx={{ padding: "0px 2.5px" }} >
                <Button fullWidth variant="outlined" >Year</Button>
              </Grid>
              <Grid item md={1.5} className="flex-center table-head-column" sx={{ padding: "0px 2.5px" }} >
                <Button fullWidth variant="outlined" {...bindTrigger(semesterPopupState)} endIcon={<UnfoldMoreIcon />} >Semester</Button>
                <Menu {...bindMenu(semesterPopupState)} sx={{ width: "100%" }} >
                  <MenuItem>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
                      <FormControlLabel control={<Checkbox />} label="1" />
                      <FormControlLabel control={<Checkbox />} label="2" />
                    </FormGroup>
                  </MenuItem>
                </Menu>
              </Grid>
              <Grid item md={3} className="flex-center table-head-column" sx={{ padding: "0px 2.5px" }} >
                <Button fullWidth variant="outlined" {...bindTrigger(classDatePopupState)} endIcon={<UnfoldMoreIcon />} >Class date</Button>
                <Menu {...bindMenu(classDatePopupState)} sx={{ width: "100%" }} >
                  <MenuItem>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
                      <FormControlLabel control={<Checkbox />} label={<Typography sx={{ borderRadius: "30px", bgcolor: dayColor["จันทร์"], color: "black", width: "100px", display: 'flex', justifyContent: "center", alignItems: "center" }}>จันทร์</Typography>} />
                      <FormControlLabel control={<Checkbox />} label={<Typography sx={{ borderRadius: "30px", bgcolor: dayColor["อังคาร"], color: "black", width: "100px", display: 'flex', justifyContent: "center", alignItems: "center" }}>อังคาร</Typography>} />
                      <FormControlLabel control={<Checkbox />} label={<Typography sx={{ borderRadius: "30px", bgcolor: dayColor["พุธ"], color: "black", width: "100px", display: 'flex', justifyContent: "center", alignItems: "center" }}>พุธ</Typography>} />
                      <FormControlLabel control={<Checkbox />} label={<Typography sx={{ borderRadius: "30px", bgcolor: dayColor["พฤหัสบดี"], color: "black", width: "100px", display: 'flex', justifyContent: "center", alignItems: "center" }}>พฤหัสบดี</Typography>} />
                      <FormControlLabel control={<Checkbox />} label={<Typography sx={{ borderRadius: "30px", bgcolor: dayColor["ศุกร์"], color: "black", width: "100px", display: 'flex', justifyContent: "center", alignItems: "center" }}>ศุกร์</Typography>} />
                      <FormControlLabel control={<Checkbox />} label={<Typography sx={{ borderRadius: "30px", bgcolor: dayColor["เสาร์"], color: "black", width: "100px", display: 'flex', justifyContent: "center", alignItems: "center" }}>เสาร์</Typography>} />
                      <FormControlLabel control={<Checkbox />} label={<Typography sx={{ borderRadius: "30px", bgcolor: dayColor["อาทิตย์"], color: "black", width: "100px", display: 'flex', justifyContent: "center", alignItems: "center" }}>อาทิตย์</Typography>} />
                    </FormGroup>
                  </MenuItem>
                </Menu>
              </Grid>
              <Grid item md={1} className="flex-center table-head-column" sx={{ padding: "0px 2.5px" }} >
                <Button fullWidth variant="outlined" >Students</Button>
              </Grid>
              <Grid item md={2} className="flex-center table-head-column" sx={{ padding: "0px 2.5px" }} >
                <Button fullWidth variant="outlined" {...bindTrigger(instructorPopupState)} endIcon={<UnfoldMoreIcon />} >Instructor</Button>
                <Menu {...bindMenu(instructorPopupState)} sx={{ width: "100%" }} >
                  <MenuItem>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
                      <FormControlLabel control={<Checkbox />} label="ชรินดา สนธิดี" />
                    </FormGroup>
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>

            {/* Table body */}
            <Grid container sx={{ minHeight: "26px", padding: "15px 0px", background: "var(--biscay)", borderRadius: "8px" }} >
              <Grid item lg={1.5} className="flex-center" sx={{ padding: "0px 2.5px" }} >
                <Typography>22020401</Typography>
              </Grid>
              <Grid item md={1.5} className="flex-center" sx={{ padding: "0px 2.5px" }} >
                <Typography>401</Typography>
              </Grid>
              <Grid item md={1.5} className="flex-center" sx={{ padding: "0px 2.5px" }} >
                <Typography>2022</Typography>
              </Grid>
              <Grid item md={1.5} className="flex-center" sx={{ padding: "0px 2.5px" }} >
                <Typography>1</Typography>
              </Grid>
              <Grid item md={3} className="flex-center" sx={{ padding: "0px 2.5px" }} >
                <Typography sx={{ borderRadius: "30px", bgcolor: dayColor["เสาร์, 09:00:00 - 12:00:00".split(",")[0]] || "var(--raven)", color: "black", width: "fit-content", paddingX: "25px" }} >เสาร์, 09:00:00 - 12:00:00</Typography>
              </Grid>
              <Grid item md={1} className="flex-center" sx={{ padding: "0px 2.5px" }} >
                <Typography>45</Typography>
              </Grid>
              <Grid item md={2} className="flex-center" sx={{ padding: "0px 2.5px" }} >
                <Typography>ชรินดา สนธิดี</Typography>
              </Grid>
            </Grid>
          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default AvailableGroups