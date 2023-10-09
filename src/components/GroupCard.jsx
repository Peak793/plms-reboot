import { Stack, Typography, Box, Button, Grid } from "@mui/material"
import PropTypes from 'prop-types';
import { dayColor } from "../utils";
import { Link } from "react-router-dom";

const GroupCard = ({ groupNo, schedule, year, semester, department }) => {

  return (
    <Grid item xs={12} md={4} >
      <Stack spacing={"25px"} sx={{
        bgcolor: "var(--biscay)",
        height: "fit-content",
        minHeight: "270px",
        borderRadius: "8px",
        padding: "30px 20px",
        transition: "all ease-in-out 0.2s"
      }} >
        <Typography variant="h4" color={'primary'} >Group {groupNo}</Typography>
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
          <Link to={"/ins/g/:groupId"} >
            <Button variant="contained" sx={{
              borderRadius: "30px",
              padding: "7px 25px",
            }} >Exercise</Button>
          </Link>
          <Link to={"/ins/g/:groupId/stu-list"} >
            <Button variant="contained" sx={{
              borderRadius: "30px",
              padding: "7px 25px",
            }} >Student</Button>
          </Link>
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