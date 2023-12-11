import { Box, Button, Container, Grid, Stack, Typography, FormControlLabel, Switch, Skeleton } from "@mui/material"
import blueFolderIcon from '@/assets/images/bluefoldericon.png'
import classes from '@/assets/css/InsGroup.module.css'
import LoginIcon from '@mui/icons-material/Login';
import { useParams } from "react-router-dom"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { setAllowGroupLogin, setAllowGroupUploadPicture } from "@/utils/api";
import axios from "axios"

import Header from "@/components/_shared/Header"
import MyBreadCrumbs from '@/components/_shared/MyBreadCrumbs'
import TimeSchedule from "@/components/_shared/TimeSchedule"
import LabRow from "@/components/InsGroupPage/LabRow"

const InsGroup = () => {
  const { groupId } = useParams();
  const queryClient = useQueryClient();

  // TODO: Do something with this later
  const { data: groupData, isLoading: isClassLoading } = useQuery({
    queryKey: ['groupData', groupId],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getGroupDataById?group_id=${groupId}`, { withCredentials: true })
      return res.data.payload.class_schedule;
    }
  });

  const { data: labData, isLoading: isLabChapterLoading } = useQuery({
    queryKey: ['labData', groupId],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getGroupDataById?group_id=${groupId}`, { withCredentials: true })
      return res.data.payload.group_permission;
    }
  });

  const { mutate: mutateAllowLogin } = useMutation({
    mutationFn: setAllowGroupLogin,
    onSuccess: () => {
      queryClient.invalidateQueries(['groupData', groupId])
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const { mutate: mutateAllowUploadPicture } = useMutation({
    mutationFn: setAllowGroupUploadPicture,
    onSuccess: () => {
      queryClient.invalidateQueries(['groupData', groupId])
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const toggleAllowLogin = () => {
    mutateAllowLogin({
      group_id: groupId,
      allow_login: groupData?.allow_login === "yes" ? "no" : "yes"
    })
  }

  const toggleAllowUploadPicture = () => {
    mutateAllowUploadPicture({
      group_id: groupId,
      allow_upload_pic: groupData?.allow_upload_pic === "yes" ? "no" : "yes"
    })
  }

  return (
    <Box>
      <Container>
        <Stack spacing={"20px"} >
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/ins' },
            { label: `Group ${groupData?.group_no}`, href: '#' },
          ]} />

          <Header logoSrc={blueFolderIcon} title={`Group ${!isClassLoading ? groupData?.group_no : "..."}`} />

          <Grid container spacing={"10px"} >
            <Grid item xs={4} >
              <Stack spacing={"10px"} className={classes['info-box']} padding={"20px"} >

                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Group ID</Typography>
                    <Typography >{isClassLoading ? <Skeleton variant="text" width={90} sx={{ fontSize: "16px" }} /> : groupData?.group_id}</Typography>
                  </Stack>
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Group</Typography>
                    <Typography >{isClassLoading ? <Skeleton variant="text" width={45} sx={{ fontSize: "16px" }} /> : groupData?.group_no}</Typography>
                  </Stack>
                </Stack>

                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Year</Typography>
                    <Typography >{isClassLoading ? <Skeleton variant="text" width={55} sx={{ fontSize: "16px" }} /> : groupData?.year}</Typography>
                  </Stack>
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Semester</Typography>
                    <Typography >{isClassLoading ? <Skeleton variant="text" width={30} sx={{ fontSize: "16px" }} /> : groupData?.semester}</Typography>
                  </Stack>
                </Stack>

                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Instructor</Typography>
                    <Typography >{isClassLoading ? <Skeleton variant="text" width={180} sx={{ fontSize: "16px" }} /> : (groupData?.supervisor_firstname + " " + groupData?.supervisor_lastname)}</Typography>
                  </Stack>
                </Stack>

                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Class date</Typography>
                  </Stack>
                </Stack>

                {
                  isClassLoading ? <Skeleton variant="rounded" width={250} height={24} /> : <TimeSchedule classDate={`${groupData?.day_of_week}, ${groupData?.time_start} - ${groupData?.time_end}`} />
                }

              </Stack>
            </Grid>

            <Grid item xs={4} >
              <Stack spacing={"10px"} className={classes['info-box']} padding={"20px"}>
                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >Department</Typography>
                    <Typography >{isClassLoading ? <Skeleton variant="text" width={90} sx={{ fontSize: "16px" }} /> : groupData?.dept_name}</Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} spacing={"20px"} >
                  <Stack direction={"row"} gap={"5px"} >
                    <Typography color={"primary"}  >All Student</Typography>
                    <Typography >{isClassLoading ? <Skeleton variant="text" width={40} sx={{ fontSize: "16px" }} /> : groupData?.student_no}</Typography>
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
                  control={<Switch color="success" onClick={toggleAllowLogin} checked={groupData?.allow_login === "yes"} />}
                  label={<Typography color={"primary"} fontWeight={600} >Allow Login</Typography>}
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="start"
                  control={<Switch color="success" onClick={toggleAllowUploadPicture} checked={groupData?.allow_upload_pic === "yes"} />}
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

            {isLabChapterLoading && <>
              <Skeleton variant="rounded" height={62} />
              <Skeleton variant="rounded" height={62} />
              <Skeleton variant="rounded" height={62} />
              <Skeleton variant="rounded" height={62} />
              <Skeleton variant="rounded" height={62} />
            </>}
            {!isLabChapterLoading && Object.keys(labData || {}).map((key, index) => (
              <LabRow key={index} lab={labData[key]} groupId={groupId} groupNo={groupData?.group_no} />
            ))}

          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default InsGroup