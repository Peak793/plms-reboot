import PropTypes from "prop-types";
import { useState } from 'react';
import { Stack, Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Paper, Button, TextField } from "@mui/material";
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import checked from '@/assets/images/Checked.png';
import { modalStyle } from '../utils';
import moment from 'moment';

const AllowTypeForm = ({ title, open }) => {
  const [selectedAllowType, setSelectedAllowType] = useState("1");
  const [time, setTime] = useState({ hours: '00', minutes: '00', seconds: '00' });
  const [dateTime, setDateTime] = useState({
    startDateTime: moment(),
    endDateTime: moment(),
  });

  const handleRadioGroupChange = (event) => {
    setSelectedAllowType(event.target.value);
  };

  const handleTimerChange = (key) => (event) => {
    let value = event.target.value;

    if (/^\d+$/.test(value) || value === '') {
      setTime({ ...time, [key]: value.slice(0, 2) });
    }
  };

  const handleBlur = (key) => {
    let value = time[key];
    if (value.length === 1) {
      setTime({ ...time, [key]: '0' + value });
    }
  };

  const handleDateTimeChange = (field) => (newDateTime) => {
    if (newDateTime) {
      setDateTime({
        ...dateTime,
        [field]: newDateTime
      });
    }
  };

  const handleClose = (buttonType) => {
    if (buttonType === 'cancel') {
      // Reset all settings to default values
      setTime({ hours: '00', minutes: '00', seconds: '00' });
      setDateTime({
        startDateTime: moment(),
        endDateTime: moment(),
      });
      setSelectedAllowType("1");
      open(false);
    } else if (buttonType === 'done') {
      open(false);
    }
  };

  return (
    <Stack spacing={"15px"} sx={modalStyle}>
      <Stack direction={"row"} spacing={"10px"} alignItems={"center"}>
        <Box width={20} height={20}>
          <img src={checked} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
        <Typography variant='h6'>{title}</Typography>
      </Stack>

      <FormControl>
        <RadioGroup
          aria-labelledby="type of allow access"
          value={selectedAllowType}
          onChange={handleRadioGroupChange}
          name="access allow type"
          sx={{
            '& > :not(style)': {
              marginBottom: '0px',
              marginTop: '0px'
            }
          }}
        >
          <FormControlLabel value={"1"} control={<Radio />} label="Until I come change it" />
          <FormControlLabel value={"2"} control={<Radio />} label="Set timer" />
          <FormControlLabel value={"3"} control={<Radio />} label="Set date and time" />
        </RadioGroup>

        {selectedAllowType === "2" && (
          <Paper sx={{
            display: 'flex',
            padding: '20px',
            justifyContent: "center",
            marginTop: "10px",
          }} >
            <Stack direction={"row"} spacing={"10px"} alignItems="center">
              <TextField
                value={time.hours}
                size='small'
                label="HH"
                onChange={handleTimerChange('hours')}
                onBlur={() => handleBlur('hours')}
                inputProps={{ maxLength: 2 }}
                sx={{ width: '50px' }}
              />
              <Typography variant="h6">:</Typography>
              <TextField
                value={time.minutes}
                size='small'
                label="MM"
                onChange={handleTimerChange('minutes')}
                onBlur={() => handleBlur('minutes')}
                inputProps={{ maxLength: 2 }}
                sx={{ width: '50px' }}
              />
              <Typography variant="h6">:</Typography>
              <TextField
                value={time.seconds}
                size='small'
                label="SS"
                onChange={handleTimerChange('seconds')}
                onBlur={() => handleBlur('seconds')}
                inputProps={{ maxLength: 2 }}
                sx={{ width: '50px' }}
              />
            </Stack>
          </Paper>
        )}

        {selectedAllowType === "3" && (
          <Paper sx={{
            display: 'flex',
            padding: '20px',
            justifyContent: "center",
            marginTop: "10px",
          }} >
            <Stack direction={"row"} spacing={"10px"} alignItems="center">

              <DateTimeField
                label="Start date"
                size='small'
                format="DD/MM/YYYY hh:mm A"
                value={dateTime.startDateTime}
                onChange={handleDateTimeChange('startDateTime')}
              />

              <DateTimeField
                label="End date"
                size='small'
                format="DD/MM/YYYY hh:mm A"
                value={dateTime.endDateTime}
                onChange={handleDateTimeChange('endDateTime')}
              />

            </Stack>
          </Paper>
        )}
      </FormControl>

      <Stack direction={"row"} justifyContent={"flex-end"} spacing={"5px"}>
        <Button onClick={() => handleClose('cancel')} variant="contained" sx={{ width: "70px", bgcolor: "var(--raven)", ":hover": { bgcolor: "#444" } }}>Cancel</Button>
        <Button onClick={() => handleClose('done')} variant="contained" sx={{ width: "70px" }}>Done</Button>
      </Stack>
    </Stack>
  );
};

AllowTypeForm.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.func.isRequired
}

export default AllowTypeForm;
