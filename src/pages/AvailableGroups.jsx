import { Box, Container, Grid, Stack, Typography, Button, Menu, MenuItem, FormControlLabel, FormGroup, Checkbox, Link } from "@mui/material"
import MyBreadCrumbs from "@/components/MyBreadCrumbs"
import peopleIcon from "@/assets/images/People-Icon.png"
import PropTypes from 'prop-types';
import { useState, useEffect } from "react"
import { groups, SemesterOptions, ClassDateOptions, InstructorOptions } from "../utils";

import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { dayColor } from "../utils"


const AvailableGroups = () => {
  const [filteredGroups, setFilteredGroups] = useState(groups);
  const [semesterOptions, setSemesterOptions] = useState(SemesterOptions);
  const [classDateOptions, setClassDateOptions] = useState(ClassDateOptions);
  const [instructorOptions, setInstuctorOptions] = useState(InstructorOptions);
  const [selectedSemester, setSelectedSemester] = useState(new Set());
  const [selectedClassDate, setSelectedClassDate] = useState(new Set());
  const [selectedInstructor, setSelectedInstructor] = useState(new Set());

  useEffect(() => {
    let newFilteredGroups = groups.filter((group) => {
      return (
        (selectedSemester.size === 0 || selectedSemester.has(group.semester)) &&
        (selectedClassDate.size === 0 || selectedClassDate.has(group.classDate.split(',')[0])) &&
        (selectedInstructor.size === 0 || selectedInstructor.has(group.instructor))
      );
    });

    setFilteredGroups(newFilteredGroups);
  }, [selectedSemester, selectedClassDate, selectedInstructor]);

  const toggleCheckbox = (setState, value) => {
    setState((prevState) => {
      const newState = new Set(prevState);
      if (newState.has(value)) {
        newState.delete(value);
      } else {
        newState.add(value);
      }
      return newState;
    });
  };

  const semesterPopupState = usePopupState({ variant: 'popover', popupId: 'semesterMenu' })
  const classDatePopupState = usePopupState({ variant: 'popover', popupId: 'classDateMenu' })
  const instructorPopupState = usePopupState({ variant: 'popover', popupId: 'instructorMenu' })

  console.log(selectedClassDate)
  return (
    <Box>
      <Container>
        <Stack spacing={"20px"} >
          <MyBreadCrumbs items={[
            { label: 'Available Groups', href: '#' },
          ]} />

          <Stack spacing={1} direction={"row"} >
            <div className="page-icon" >
              <img src={peopleIcon} alt="page name icon" />
            </div>
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
                      <Link variant="contained" color="primary" onClick={() => { setSelectedSemester(new Set()) }} >Uncheck All</Link>
                      {[...semesterOptions].map(semester => <FormControlLabel key={semester}
                        control={<Checkbox
                          checked={selectedSemester.has(semester)}
                          onChange={() => toggleCheckbox(setSelectedSemester, semester)}
                        />}
                        label={semester}
                      />)}
                    </FormGroup>
                  </MenuItem>
                </Menu>
              </Grid>
              <Grid item md={3} className="flex-center table-head-column" sx={{ padding: "0px 2.5px" }} >
                <Button fullWidth variant="outlined" {...bindTrigger(classDatePopupState)} endIcon={<UnfoldMoreIcon />} >Class date</Button>
                <Menu {...bindMenu(classDatePopupState)} sx={{ width: "100%" }} >
                  <MenuItem>
                    <FormGroup>
                      <Link variant="contained" color="primary" onClick={() => { setSelectedClassDate(new Set()) }} >Uncheck All</Link>
                      {[...classDateOptions].map(classDate => <FormControlLabel key={classDate} control={<Checkbox />} checked={selectedClassDate.has(classDate)} onChange={() => toggleCheckbox(setSelectedClassDate, classDate)} label={(
                        <Typography sx={{
                          borderRadius: "30px",
                          bgcolor: dayColor[classDate],
                          color: "black",
                          width: "100px",
                          display: 'flex',
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                        >
                          {classDate}
                        </Typography>)}
                      />
                      )}
                    </FormGroup>
                  </MenuItem>
                </Menu>
              </Grid>
              <Grid item md={1} className="flex-center table-head-column" sx={{ padding: "0px 2.5px" }} >
                <Button fullWidth variant="outlined" >Students</Button>
              </Grid>
              <Grid item md={2} className="flex-center table-head-column" sx={{ padding: "0px 2.5px" }} >
                <Button fullWidth variant="contained" {...bindTrigger(instructorPopupState)} endIcon={<UnfoldMoreIcon />} >Instructor</Button>
                <Menu {...bindMenu(instructorPopupState)} sx={{ width: "100%" }} >
                  <MenuItem>
                    <FormGroup>
                      <Link variant="contained" color="primary" onClick={() => { setSelectedInstructor(new Set()) }} >Uncheck All</Link>
                      {[...instructorOptions].map(i => <FormControlLabel
                        key={i}
                        control={<Checkbox />}
                        label={i}
                        checked={selectedInstructor.has(i)}
                        onChange={() => toggleCheckbox(setSelectedInstructor, i)}
                      />)}
                    </FormGroup>
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>

            {/* Table body */}
            {filteredGroups.map(g => <TableRow key={g.groupId} groupId={g.groupId} groupNo={g.groupNo} year={g.year} semester={g.semester} classDate={g.classDate} students={g.students} instructor={g.instructor} />)}

          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

const TableRow = ({ groupId, groupNo, year, semester, classDate, students, instructor }) => {
  return (
    <Grid container sx={{ minHeight: "26px", padding: "15px 0px", background: "var(--biscay)", borderRadius: "8px", cursor: "pointer", ":hover": { bgcolor: "var(--hover)" } }} >
      <Grid item lg={1.5} className="flex-center" sx={{ padding: "0px 2.5px" }} >
        <Typography>{groupId}</Typography>
      </Grid>
      <Grid item md={1.5} className="flex-center" sx={{ padding: "0px 2.5px" }} >
        <Typography>{groupNo}</Typography>
      </Grid>
      <Grid item md={1.5} className="flex-center" sx={{ padding: "0px 2.5px" }} >
        <Typography>{year}</Typography>
      </Grid>
      <Grid item md={1.5} className="flex-center" sx={{ padding: "0px 2.5px" }} >
        <Typography>{semester}</Typography>
      </Grid>
      <Grid item md={3} className="flex-center" sx={{ padding: "0px 2.5px" }} >
        <Typography sx={{ borderRadius: "30px", bgcolor: dayColor[classDate.split(",")[0]] || "var(--raven)", color: "black", width: "fit-content", paddingX: "25px" }} >
          {classDate}
        </Typography>
      </Grid>
      <Grid item md={1} className="flex-center" sx={{ padding: "0px 2.5px" }} >
        <Typography>
          {students}
        </Typography>
      </Grid>
      <Grid item md={2} className="flex-center" sx={{ padding: "0px 2.5px" }} >
        <Typography>{instructor}</Typography>
      </Grid>
    </Grid>
  )
}

TableRow.propTypes = {
  groupId: PropTypes.string.isRequired,
  groupNo: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  semester: PropTypes.string.isRequired,
  classDate: PropTypes.string.isRequired,
  students: PropTypes.number.isRequired,
  instructor: PropTypes.string.isRequired,
};

export default AvailableGroups