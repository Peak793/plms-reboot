/* eslint-disable react/prop-types */
import {
  Box, Container, Grid, Stack, Typography, Avatar, TextField,
  FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
  InputLabel, Select, MenuItem, Button
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import ForumIcon from '@mui/icons-material/Forum';
import { styled } from "@mui/system";
import MyBreadCrumbs from "@/components/_shared/MyBreadCrumbs";
import Header from '@/components/_shared/Header';

const boxStyle = {
  padding: "20px",
  border: "1px solid var(--raven)",
  borderRadius: "8px",
  height: "100% ",
  flex: "1"
};

const StyledDatePicker = styled(DatePicker)({
  '& svg, & path': {
    color: 'white',
    fill: 'white',
  }
});

// Reusable Text Field Component
const MyTextField = ({ label, type = "text", ...props }) => (
  <TextField fullWidth size="small" label={label} type={type} {...props} />
);

// Reusable Section Component
const Section = ({ title, children }) => (
  <Stack spacing={"30px"} sx={boxStyle}>
    <Typography variant="h6">{title}</Typography>
    {children}
  </Stack>
);

// Form Fields Configuration
const personalInfoFields = [
  { label: "ID" },
  { label: "First Name", flex: 1 },
  { label: "Last Name", flex: 1 },
  { label: "Nickname", flex: 1 },
];

const EditProfile = () => {
  return (
    <Box>
      <Container>
        <Stack spacing={"20px"}>
          {/* Breadcrumbs and Header components */}
          <MyBreadCrumbs items={[{ label: 'Edit Profile', href: '#' }]} />
          <Header logoIcon={<ForumIcon />} title="Variables Expression Statement" />

          <Grid container spacing={"10px"}>
            <Grid item xs={12} md={6}>
              {/* Personal Information Section */}
              <Section title="Personal Information">
                <Box className="flex-center">
                  <Avatar alt="ชรินดา สนธิดี" src={""} sx={{ width: "120px", height: "120px" }} />
                </Box>
                {personalInfoFields.map(field => (
                  <MyTextField key={field.label} label={field.label} style={{ flex: field.flex }} />
                ))}
                <StyledDatePicker label="Date of Birth" slotProps={{ textField: { size: 'small' } }} />
                <FormControl>
                  <FormLabel id="gender-label">Gender</FormLabel>
                  <RadioGroup row aria-labelledby="gender-label" name="gender" defaultValue="female">
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Section>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Contact Section */}
              <Stack spacing="10px" height={"100%"} >
                <Section title="Contact">
                  <FormControl fullWidth>
                    <InputLabel size="small" id="department-label">Department</InputLabel>
                    <Select
                      labelId="department-label"
                      id="department"
                      label="Department"
                      size="small"
                    >
                      <MenuItem value={"วิศวกรรมศาสตร์"}>วิศวกรรมศาสตร์</MenuItem>
                    </Select>
                  </FormControl>
                  <MyTextField label="Email" />
                  <MyTextField label="Phone Number" />
                </Section>
                {/* Password & Security Section */}
                <Section title="Password & Security">
                  <MyTextField label="New Password" type="password" />
                  <MyTextField label="Password re-enter" type="password" />
                </Section>
              </Stack>
            </Grid>
          </Grid>

          {/* Save Button */}
          <Stack direction={"row"} justifyContent={"flex-end"}>
            <Button variant="contained" color="primary" sx={{ paddingX: "25px " }}>Save</Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default EditProfile;
