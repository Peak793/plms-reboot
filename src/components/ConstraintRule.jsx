import { useState, useEffect, useCallback } from 'react';
import { Stack, Checkbox, TextField, Select, FormControl, InputLabel, MenuItem, Box, FormHelperText } from "@mui/material";

const ConstraintRule = () => {
  const [type, setType] = useState('');
  const [limit1, setLimit1] = useState(null);
  const [limit2, setLimit2] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const validateConstraints = useCallback(() => {
    let valid = true;
    let message = '';

    if (type === 'bt') {
      if (parseFloat(limit1) >= parseFloat(limit2)) {
        message = "invalid value";
        valid = false;
      }
    }

    setIsValid(valid);
    setErrorMessage(message);
  }, [type, limit1, limit2]);

  useEffect(() => {
    validateConstraints();
  }, [type, limit1, limit2, validateConstraints]);

  const handleCheckbox = () => {
    if (isValid) {
      setIsChecked(!isChecked);
    }
  };

  return (
    <Stack direction={"row"} spacing={1}>
      <Checkbox
        inputProps={{ "aria-label": "checkbox" }}
        checked={isChecked}
        onChange={handleCheckbox}
        sx={{
          height: "40px"
        }}
        disabled={!isValid}
      />

      <TextField
        type="text"
        size="small"
        label="keyword"
        sx={{ width: "140px" }}
      />

      <Box width={"130px"} sx={{ textAlign: "center" }}>
        <FormControl size="small" fullWidth>
          <InputLabel id="con-type">Type</InputLabel>
          <Select
            labelId="con-type"
            label="Type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <MenuItem value={"eq"}>Equal</MenuItem>
            <MenuItem value={"mt"}>More than</MenuItem>
            <MenuItem value={"lt"}>Less than</MenuItem>
            <MenuItem value={"bt"}>Between</MenuItem>
            <MenuItem value={"na"}>Not appear</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <FormControl>
        <Stack spacing={1} >
          <Stack direction={"row"} spacing={1} >
            {type === "mt" && (
              <TextField
                type="number"
                size="small"
                label="Limit"
                value={limit1}
                onChange={(e) => {
                  const sanitizedValue = e.target.value.replace(/[^0-9]/g, '');
                  setLimit1(sanitizedValue);
                }}
                sx={{ width: "80px" }}
              />
            )}
            {type === "lt" && (
              <TextField
                type="number"
                size="small"
                label="Limit"
                value={limit1}
                onChange={(e) => {
                  const sanitizedValue = e.target.value.replace(/[^0-9]/g, '');
                  setLimit1(sanitizedValue);
                }}
                sx={{ width: "80px" }}
              />
            )}
            {type === "eq" && (
              <TextField
                type="number"
                size="small"
                label="Limit"
                value={limit1}
                onChange={(e) => {
                  const sanitizedValue = e.target.value.replace(/[^0-9]/g, '');
                  setLimit1(sanitizedValue);
                }}
                sx={{ width: "80px" }}
              />
            )}
            {type === "bt" && (
              <>
                <TextField
                  type="number"
                  size="small"
                  label="Min"
                  value={limit1}
                  onChange={(e) => {
                    const sanitizedValue = e.target.value.replace(/[^0-9]/g, '');
                    setLimit1(sanitizedValue);
                  }}
                  sx={{ width: "80px" }}
                  error={!isValid}
                />
                <TextField
                  type="number"
                  size="small"
                  label="Max"
                  value={limit2}
                  onChange={(e) => {
                    const sanitizedValue = e.target.value.replace(/[^0-9]/g, '');
                    setLimit2(sanitizedValue);
                  }}
                  sx={{ width: "80px" }}
                  error={!isValid}
                />
              </>
            )}
            {type === "na" && <></>} {/* No input for "Not appear" */}
          </Stack>
          {!isValid && <FormHelperText error >{errorMessage}</FormHelperText>}
        </Stack>
      </FormControl>
    </Stack>
  );
};

export default ConstraintRule;
