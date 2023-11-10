/* eslint-disable react/prop-types */
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import { Stack, Checkbox, TextField, Select, FormControl, InputLabel, MenuItem, Box, IconButton } from "@mui/material";

const UserDefinedRule = ({ kwCon, editable, onChange, ruleCategory, ruleIndex }) => {

  const rule = kwCon.userDefinedCon.value[ruleCategory][ruleIndex]

  const handleCheckbox = () => {
    // if (validateConstraints()) {
    kwCon.userDefinedCon.setValue(prevList => {
      const updatedList = { ...prevList };
      updatedList[ruleCategory][ruleIndex].active = !rule.active;
      return updatedList;
    });
    // }
  };

  const handleLimitChange = (e) => {
    const newLimit = e.target.value.replace(/[^0-9]/g, '');
    onChange(prevList => {
      const updatedList = { ...prevList };
      updatedList.userDefinedCon[ruleCategory][ruleIndex].limit = newLimit;
      return updatedList;
    });
  };

  const handleTypeChange = (event) => {
    const newType = event.target.value;

    if (newType !== "na") {
      onChange(prevList => {
        const updatedList = { ...prevList };
        updatedList.userDefinedCon[ruleCategory][ruleIndex].type = newType;
        if (rule.limit === null) {
          updatedList.userDefinedCon[ruleCategory][ruleIndex].limit = 1;
        }
        return updatedList;
      });
    } else {
      onChange(prevList => {
        const updatedList = { ...prevList };
        updatedList.userDefinedCon[ruleCategory][ruleIndex].type = newType;
        updatedList.userDefinedCon[ruleCategory][ruleIndex].limit = null;
        return updatedList;
      });
    }

  };

  const handleDelete = () => {
    onChange((prevList) => {
      const updatedList = { ...prevList };
      updatedList.userDefinedCon[ruleCategory].splice(ruleIndex, 1);
      return updatedList;
    });
  }

  const handleKeywordChange = (e) => {
    const newKeyword = e.target.value;

    onChange((prevList) => {
      const updatedList = { ...prevList };
      updatedList.userDefinedCon[ruleCategory][ruleIndex] = {
        ...updatedList.userDefinedCon[ruleCategory][ruleIndex],
        keyword: newKeyword,
      };
      return updatedList;
    });
  };

  const singleLimitFields = ["me", "le", "eq"];

  return (
    <Stack direction={"row"}>
      <Stack direction={"row"} spacing={1}>
        <Checkbox
          inputProps={{ "aria-label": "checkbox" }}
          checked={rule?.active}
          onChange={handleCheckbox}
          sx={{
            '&.Mui-disabled': {
              color: "var(--raven)",
            },
            height: "40px"
          }}
        // disabled={() => { }}
        />
        <TextField disabled={!editable} type="text" size="small" label="keyword" sx={{ width: "140px" }} value={rule.keyword} onChange={handleKeywordChange} />
        <Box width={"200px"} sx={{ textAlign: "center" }}>
          <FormControl size="small" fullWidth>
            <InputLabel id="con-type">Type</InputLabel>
            <Select
              labelId="con-type"
              label="Type"
              value={rule?.type}
              sx={{ textAlign: "left" }}
              onChange={handleTypeChange}
              disabled={!editable}
            >
              <MenuItem value={"eq"} sx={{ ":hover": { bgcolor: "var(--hover)" } }} >= Equal</MenuItem>
              <MenuItem value={"me"} sx={{ ":hover": { bgcolor: "var(--hover)" } }} >≥ More than or equal</MenuItem>
              <MenuItem value={"le"} sx={{ ":hover": { bgcolor: "var(--hover)" } }} >≤ Less than or equal</MenuItem>
              <MenuItem value={"na"} sx={{ ":hover": { bgcolor: "var(--hover)" } }} >✕ Not appear</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <FormControl>
          <Stack spacing={1} >
            <Stack direction={"row"} spacing={1} >
              {singleLimitFields.includes(rule?.type) && (
                <TextField
                  disabled={!editable}
                  type="number"
                  size="small"
                  label="Limit"
                  value={rule?.limit || ""}
                  onChange={handleLimitChange}
                  sx={{ width: "80px" }}
                />
              )}
            </Stack>
          </Stack>
        </FormControl>
      </Stack>
      <IconButton onClick={editable ? handleDelete : () => { }} >
        <RemoveCircleTwoToneIcon color="secondary" />
      </IconButton>
    </Stack>
  );
};

export default UserDefinedRule;
