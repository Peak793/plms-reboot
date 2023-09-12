import { Stack, Typography, Box, Button, Grid } from "@mui/material"
import PropTypes from 'prop-types';
import { dayColor } from "../utils";

const GroupCard = ({ groupNo, schedule, year, semester, department }) => {

  return (
    <Grid item xs={12} md={4} >
      <Stack spacing={"25px"} sx={{
        bgcolor: "var(--biscay)",
        height: "270px",
        borderRadius: "8px",
        padding: "30px 20px",
        ":hover": {
          bgcolor: "var(--hover)"
        },
        transition: "all ease-in-out 0.2s"
      }} >
        <Typography variant="h5" >Group {groupNo}</Typography>
        <Stack spacing={"10px"}>
          <Box sx={{
            padding: "2px 25px",
            bgcolor: dayColor[schedule.split(",")[0]],
            borderRadius: "20px",
            width: "fit-content",
            color: "black"
          }}>{schedule}</Box>

          <Stack direction={"row"} spacing={"20px"} >

            <Stack direction={"row"} spacing={"5px"}>
              <Typography variant="subitem2" color="primary" >Year</Typography>
              <Typography>{year}</Typography>
            </Stack>

            <Stack direction={"row"} spacing={"5px"}>
              <Typography variant="subitem2" color="primary" >Semester</Typography>
              <Typography>{semester}</Typography>
            </Stack>

          </Stack>

          <Stack direction={"row"} spacing={"5px"}>
            <Typography variant="subitem2" color="primary" >Semester</Typography>
            <Typography>{department}</Typography>
          </Stack>

        </Stack>

        <Stack direction={"row"} spacing={"10px"} sx={{
          width: "100%"
        }}>
          <Button variant="contained" sx={{
            borderRadius: "30px",
            padding: "7px 25px",
          }} >Exercise</Button>
          <Button variant="contained" sx={{
            borderRadius: "30px",
            padding: "7px 25px",
          }} >Student</Button>
        </Stack>

      </Stack>
    </Grid>
  )
}

GroupCard.propTypes = {
  groupNo: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  semester: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
}

export default GroupCard