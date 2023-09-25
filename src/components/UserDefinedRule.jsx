import { useEffect, useCallback } from 'react';
import { useAtom } from 'jotai';
import { keywordConstraintsList } from '../store/store';
import PropTypes from 'prop-types';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import { Stack, Checkbox, TextField, Select, FormControl, InputLabel, MenuItem, Box, IconButton } from "@mui/material";

const UserDefinedRule = ({ category, ruleIndex }) => {
  const [kwConList, setKwConList] = useAtom(keywordConstraintsList);

  const rule = kwConList[category][ruleIndex]

  const validateConstraints = useCallback(() => {
    if (rule.type !== "na") {
      return !(rule.keyword === "" || rule.limit === null);
    } else {
      return !(rule.keyword === "");
    }
  }, [rule]);

  useEffect(() => {
    if (!validateConstraints()) {
      setKwConList(prevList => {
        const updatedList = { ...prevList };
        updatedList[category][ruleIndex].active = false;
        return updatedList;
      });
    }
  }, [rule, validateConstraints, category, ruleIndex, setKwConList]);

  const handleCheckbox = () => {
    if (validateConstraints()) {
      setKwConList(prevList => {
        const updatedList = { ...prevList };
        updatedList[category][ruleIndex].active = !rule.active;
        return updatedList;
      });
    }
  };

  const handleLimitChange = (e) => {
    const newLimit = e.target.value.replace(/[^0-9]/g, '');
    setKwConList(prevList => {
      const updatedList = { ...prevList };
      updatedList[category][ruleIndex].limit = newLimit;
      return updatedList;
    });
  };

  const handleTypeChange = (event) => {
    const newType = event.target.value;

    if (newType !== "na") {
      setKwConList(prevList => {
        const updatedList = { ...prevList };
        updatedList[category][ruleIndex].type = newType;
        return updatedList;
      });
    } else {
      setKwConList(prevList => {
        const updatedList = { ...prevList };
        updatedList[category][ruleIndex].type = newType;
        updatedList[category][ruleIndex].limit = null;
        return updatedList;
      });
    }

  };

  const handleDelete = () => {
    setKwConList(prevList => {
      const updatedList = { ...prevList };
      updatedList[category].splice(ruleIndex, 1);
      return updatedList;
    });
  }

  const handleKwChange = (event) => {
    const newKeyword = event.target.value;
    setKwConList(prevList => {
      const updatedList = { ...prevList };
      updatedList[category][ruleIndex].keyword = newKeyword;
      return updatedList;
    });
  }

  const singleLimitFields = ["me", "le", "eq"];

  return (
    <Stack direction={"row"}>
      <Stack direction={"row"} spacing={1}>
        <Checkbox
          inputProps={{ "aria-label": "checkbox" }}
          checked={rule.active}
          onChange={handleCheckbox}
          sx={{
            '&.Mui-disabled': {
              color: "var(--raven)",
            },
            height: "40px"
          }}
          disabled={!validateConstraints()}
        />
        <TextField type="text" size="small" label="keyword" sx={{ width: "140px" }} value={rule.keyword} onChange={handleKwChange} />
        <Box width={"200px"} sx={{ textAlign: "center" }}>
          <FormControl size="small" fullWidth>
            <InputLabel id="con-type">Type</InputLabel>
            <Select
              labelId="con-type"
              label="Type"
              value={rule.type}
              sx={{ textAlign: "left" }}
              onChange={handleTypeChange}
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
              {singleLimitFields.includes(rule.type) && (
                <TextField
                  type="number"
                  size="small"
                  label="Limit"
                  value={rule.limit || ""}
                  onChange={handleLimitChange}
                  sx={{ width: "80px" }}
                />
              )}
            </Stack>
          </Stack>
        </FormControl>
      </Stack>
      <IconButton onClick={handleDelete} >
        <RemoveCircleTwoToneIcon color="secondary" />
      </IconButton>
    </Stack>
  );
};

UserDefinedRule.propTypes = {
  category: PropTypes.oneOf(['builtin_functions', 'reserved_words', 'other', 'user_defined']).isRequired,
  ruleIndex: PropTypes.number.isRequired,
};

export default UserDefinedRule;
