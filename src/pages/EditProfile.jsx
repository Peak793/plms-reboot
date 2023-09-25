import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Avatar,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers";
import ForumIcon from '@mui/icons-material/Forum';
import MyBreadCrumbs from "@/components/MyBreadCrumbs"
import { styled } from "@mui/system";

const boxStyle = {
  padding: "20px",
  border: "1px solid var(--raven)",
  borderRadius: "8px",
  height: "100% "
}

const StyledDatePicker = styled(DatePicker)({
  '& svg, & path': {
    color: 'white',
    fill: 'white',
  }
});

const EditProfile = () => {
  return (
    <Box>
      <Container>
        <Stack spacing={"20px"} >
          <MyBreadCrumbs items={[
            { label: 'Available Groups', href: '#' },
          ]} />
          <Stack spacing={1} direction={"row"} >
            <div className="page-icon" >
              <ForumIcon />
            </div>
            <Typography variant='h6' component={"h1"} gutterBottom>Variables Expression Statement</Typography>
          </Stack>

          <Grid container spacing={"10px"} >
            <Grid item xs={12} md={6} >
              <Stack spacing={"30px"} sx={boxStyle} >
                <Box className="flex-center"  >
                  <Avatar alt="ชรินดา สนธิดี" src={""} sx={{ width: "120px", height: "120px" }} />
                </Box>
                <Typography variant="h6">
                  Personal Information
                </Typography>
                <TextField size="small" type="text" label="ID" />
                <Stack direction={"row"} spacing={"10px"} >
                  <Box flex={1} item xs="6" sx={{ marginLeft: 0 }} >
                    <TextField fullWidth type="text" size="small" label="First Name" />
                  </Box>
                  <Box flex={1} item xs="6" sx={{ marginLeft: 0 }} >
                    <TextField fullWidth type="text" size="small" label="Last Name" />
                  </Box>
                </Stack>
                <Stack direction={"row"} spacing={"10px"} >
                  <Box flex={1} item xs="6" sx={{ marginLeft: 0 }} >
                    <TextField fullWidth type="text" size="small" label="Nickname" />
                  </Box>
                  <Box flex={1} item xs="6" sx={{ marginLeft: 0 }} >
                    <StyledDatePicker label="Date of Birth" slotProps={{ textField: { size: 'small' } }} />
                  </Box>
                </Stack>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value="female"
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} >
              <Stack spacing={"10px"} sx={{ ...boxStyle, border: "0px", padding: "0px" }} >
                <Stack spacing={"30px"} sx={{ ...boxStyle, flex: "1" }} >
                  <Typography variant="h6">
                    Contact
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel size="small" id="demo-simple-select-label">Department</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      /* value={age} */
                      label="Department"
                      size="small"
                    /* onChange={handleChange} */
                    >
                      <MenuItem value={"วิศวกรรมศาสตร์"}>วิศวกรรมศาสตร์</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField fullWidth type="text" size="small" label="Email" />
                  <TextField fullWidth type="text" size="small" label="Phone Number" />
                </Stack>
                <Stack spacing={"30px"} sx={{ ...boxStyle, flex: "1" }} >
                  <Typography variant="h6">
                    Password & Security
                  </Typography>
                  <TextField fullWidth type="password" size="small" label="New Password" />
                  <TextField fullWidth type="password" size="small" label="Password re-enter" />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Stack direction={"row"} justifyContent={"flex-end"} >
            <Button variant="contained" color="primary" sx={{ paddingX: "25px " }} >Save</Button>
          </Stack>
        </Stack>
      </Container>
    </Box >
  )
}

export default EditProfile