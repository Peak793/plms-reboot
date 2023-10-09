import { Box, Button, Container, Grid, Stack, Typography, FormControlLabel, Switch } from "@mui/material"
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import blueFolderIcon from '@/assets/images/BlueFolder-Icon.png'
import classes from '@/assets/css/InsGroup.module.css'
import TimeSchedule from "../components/TimeSchedule"
import LoginIcon from '@mui/icons-material/Login';
import LabRow from "@/components/LabRow"
import Header from "@/components/Header"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const InsGroup = () => {
  const [groupData, setGroupData] = useState({});
  const [labData, setLabData] = useState([]);
  const [assignGroupItem, setAssignGroupItem] = useState([]);
  const [groupPermission, setGroupPermission] = useState({});//{allow_login: true, allow_upload: true}

  // get the params from url using useParams() hook
  const { groupId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // fetch data from api
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getGroupDataById?group_id=${groupId}`, { withCredentials: true })

      // set the data to state
      if (res.data.status) {
        setGroupData(res.data.payload.class_schedule);
        setLabData(res.data.payload.lab_info);
        setAssignGroupItem(res.data.payload.assigned_group_item);
        setGroupPermission(res.data.payload.group_permission);
      }
    }

    fetchData();
  }, [])

  return (
    <Box>
      <Container>
        <Stack spacing={"20px"} >
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/ins' },
            { label: 'Group 401', href: '#' },
          ]} />

          <Header logoSrc={blueFolderIcon} title="Group 401" />

          <Grid container spacing={"10px"} >
            <Grid item xs={4} >
              <Stack spacing={"10px"} className={classes['info-box']} padding={"20px"} >

                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Group ID</Typography>
                    <Typography >{groupData?.group_id}</Typography>
                  </Stack>
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Group</Typography>
                    <Typography >{groupData?.group_no}</Typography>
                  </Stack>
                </Stack>

                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Year</Typography>
                    <Typography >{groupData?.year}</Typography>
                  </Stack>
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Semester</Typography>
                    <Typography >{groupData?.semester}</Typography>
                  </Stack>
                </Stack>

                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Instructor</Typography>
                    <Typography >{groupData?.supervisor_firstname + " " + groupData?.supervisor_lastname}</Typography>
                  </Stack>
                </Stack>

                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Class date</Typography>
                  </Stack>
                </Stack>

                <TimeSchedule classDate={`${groupData?.day_of_week}, ${groupData?.time_start} - ${groupData?.time_end}`} />

              </Stack>
            </Grid>
            <Grid item xs={4} >
              <Stack spacing={"10px"} className={classes['info-box']} padding={"20px"}>
                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Department</Typography>
                    <Typography >{groupData?.dept_name}</Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >All Student</Typography>
                    <Typography >{groupData?.student_no}</Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Student online</Typography>
                    <Typography ></Typography>
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
                  control={<Switch color="success" checked={groupData?.allow_login === "yes"} />}
                  label={<Typography color={"primary"} fontWeight={600} >Allow Login</Typography>}
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="start"
                  control={<Switch color="success" checked={groupData?.allow_exercise === "yes"} />}
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
                <Button fullWidth sx={{ height: "100%", color: "white" }} >Chapter</Button>
              </Box>
              <Box width={100} className="table-head-column">
                <Button fullWidth sx={{ height: "100%", color: "white" }} >Score</Button>
              </Box>
              <Box width={300} className="table-head-column">
                <Button fullWidth sx={{ height: "100%", color: "white" }} >Access exercise</Button>
              </Box>
              <Box width={300} className="table-head-column">
                <Button fullWidth sx={{ height: "100%", color: "white" }} >Allow submit</Button>
              </Box>
            </Stack>

            {labData?.map((lab, index) => (
              <LabRow key={index} lab={lab} />
            ))}

          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default InsGroup