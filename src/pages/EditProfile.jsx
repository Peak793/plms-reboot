/* eslint-disable react/prop-types */
import {
  Box, Container, Grid, Stack, Typography, Avatar, TextField,
  FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
  InputLabel, Select, MenuItem, Button, IconButton
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import PersonIcon from '@mui/icons-material/Person';
import { styled } from "@mui/system";
import { useForm, Controller } from "react-hook-form";
import EditIcon from '@mui/icons-material/Edit';
import Header from '@/components/_shared/Header';

const boxStyle = {
  padding: "20px",
  border: "1px solid var(--raven)",
  borderRadius: "8px",
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
  <TextField size="small" label={label} type={type} {...props} />
);

// Reusable Section Component
const Section = ({ title, children, ...props }) => (
  <Stack {...props} spacing={"30px"} sx={boxStyle}>
    {title && <Typography variant="h6">{title}</Typography>}
    {children}
  </Stack>
);

const EditProfile = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      avatar: "",
      firstname: "",
      lastName: "",
      nickname: "",
      dob: null,
      gender: "",
      department: "",
      email: "",
      tel: "",
      new_password: "",
      comfirm_password: "",
    }
  })

  const onSubmit = (data) => console.log(data)

  const handlePreview = (value) => {
    if (typeof value === "string") {
      return value
    }
    else {
      return URL.createObjectURL(value)
    }
  }

  return (
    <Box>
      <Container >
        <Stack spacing={"20px"}>
          {/* Breadcrumbs and Header components */}
          <Header logoIcon={<PersonIcon sx={{ fontSize: "30px" }} />} title="Edit Profile" />

          <form onSubmit={handleSubmit(onSubmit)} >
            <Grid container spacing={"10px"} >
              <Grid item xs={12} md={6} >
                <Section height="100%" >
                  <Stack className="flex-center" >
                    <Box position='relative'>
                      <Controller
                        name="avatar"
                        control={control}
                        render={({ field: { value, onChange, ...field } }) => (
                          <>
                            <Avatar alt="ชรินดา สนธิดี" src={handlePreview(value)} sx={{
                              width: "150px",
                              height: "150px"
                            }}
                            />
                            <input
                              {...field}
                              value={value?.fileName}
                              onChange={(event) => {
                                onChange(event.target.files[0]);
                              }}
                              type="file"
                              id="avatar"
                              style={{
                                display: 'none'
                              }}
                            />
                            <label htmlFor="avatar">
                              <IconButton
                                component="span" // wrap the IconButton with a label to associate it with the input
                                sx={{
                                  position: 'absolute',
                                  bottom: 0,
                                  right: 0,
                                  backgroundColor: 'var(--cerulean)',
                                  color: 'white',
                                  '&:hover': {
                                    backgroundColor: 'var(--cerulean)',
                                  },
                                }}
                              >
                                <EditIcon />
                              </IconButton>
                            </label>
                          </>
                        )}
                      />
                    </Box>
                  </Stack>
                  <Typography variant="h5">Personal Information</Typography>
                  <Stack direction={'row'} spacing="10px" >
                    <Controller
                      name="first_name"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          size="small"
                          label={"First Name"}
                          value={field.value}
                          onChange={field.onChange}
                          type={"text"}
                          sx={{ flex: 1 }}
                        />
                      )}
                    />
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          size="small"
                          label={"Last Name"}
                          value={field.value}
                          onChange={field.onChange}
                          type={"text"}
                          sx={{ flex: 1 }}
                        />
                      )}
                    />
                  </Stack>
                  <Stack direction={'row'} spacing="10px" >
                    <Controller
                      name="nickname"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          size="small"
                          label={"Nickname"}
                          value={field.value}
                          onChange={field.onChange}
                          type={"text"}
                          sx={{ flex: 1 }}
                        />
                      )}
                    />
                    <Controller
                      name="dob"
                      control={control}
                      render={({ field }) => (
                        <StyledDatePicker
                          label="Date of Birth"
                          slotProps={{ textField: { size: 'small' } }}
                          sx={{ flex: 1 }}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </Stack>
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <FormControl>
                        <FormLabel id="gender-label">Gender</FormLabel>
                        <RadioGroup row aria-labelledby="gender-label" name="gender" value={field.value} onChange={field.onChange}>
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                          <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                      </FormControl>
                    )}
                  />
                </Section>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing="10px">
                  <Section title="Contact" >
                    <Controller
                      name="department"
                      control={control}
                      render={({ field }) => (
                        <FormControl fullWidth>
                          <InputLabel size="small" id="department-label">Department</InputLabel>
                          <Select
                            labelId="department-label"
                            id="department"
                            label="Department"
                            size="small"
                            onAbort={field.onChange}
                            value={field.value}
                          >
                            <MenuItem value={"วิศวกรรมศาสตร์"}>วิศวกรรมศาสตร์</MenuItem>
                          </Select>
                        </FormControl>
                      )}
                    />
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <MyTextField label="Email" value={field.value} onChange={field.onChange} />
                      )}
                    />
                    <Controller
                      name="tel"
                      control={control}
                      render={({ field }) => (
                        <MyTextField label="Phone Number" value={field.value} onChange={field.onChange} />
                      )}
                    />
                  </Section>
                  <Section title="Reset password">
                    <Controller
                      name="new_password"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          size="small"
                          label={"New password"}
                          value={field.value}
                          onChange={field.onChange}
                          type={"text"}
                          sx={{ flex: 1 }}
                        />
                      )}
                    />
                    <Controller
                      name="comfirm_password"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          size="small"
                          label={"Comfirm password"}
                          value={field.value}
                          onChange={field.onChange}
                          type={"text"}
                          sx={{ flex: 1 }}
                        />
                      )}
                    />
                  </Section>
                </Stack>
              </Grid>
            </Grid>

            <Stack direction={"row"} spacing={"10px"} justifyContent='flex-end' marginTop={"10px"} >
              <Box>
                <Button type='submit' variant="contained" sx={{ flex: 1 }} >
                  Save
                </Button>
              </Box>
            </Stack>

          </form>


        </Stack>
      </Container>
    </Box >
  );
};

export default EditProfile;
