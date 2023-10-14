/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userDefinedConstraints } from '../store/store';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import { Stack, Checkbox, TextField, Select, FormControl, InputLabel, MenuItem, Box, IconButton } from "@mui/material";

const UserDefinedRule = ({ ruleCategory, ruleIndex }) => {
  const [userDefined, setuserDefined] = useAtom(userDefinedConstraints);

  const rule = userDefined[ruleCategory][ruleIndex]


  // const validateConstraints = useCallback(() => {
  //   if (rule.type !== "na") {
  //     return !(rule.keyword === "" || rule.limit === null);
  //   } else {
  //     return !(rule.keyword === "");
  //   }
  // }, [rule]);

  // useEffect(() => {
  //   if (!validateConstraints()) {
  //     setuserDefined(prevList => {
  //       const updatedList = { ...prevList };
  //       updatedList[category][ruleIndex].active = false;
  //       return updatedList;
  //     });
  //   }
  // }, [rule, validateConstraints, category, ruleIndex, setuserDefined]);

  const handleCheckbox = () => {
    // if (validateConstraints()) {
    setuserDefined(prevList => {
      const updatedList = { ...prevList };
      updatedList[ruleCategory][ruleIndex].active = !rule.active;
      return updatedList;
    });
    // }
  };

  const handleLimitChange = (e) => {
    const newLimit = e.target.value.replace(/[^0-9]/g, '');
    setuserDefined(prevList => {
      const updatedList = { ...prevList };
      updatedList[ruleCategory][ruleIndex].limit = newLimit;
      return updatedList;
    });
  };

  const handleTypeChange = (event) => {
    const newType = event.target.value;

    if (newType !== "na") {
      setuserDefined(prevList => {
        const updatedList = { ...prevList };
        updatedList[ruleCategory][ruleIndex].type = newType;
        if (rule.limit === null) {
          updatedList[ruleCategory][ruleIndex].limit = 1;
        }
        return updatedList;
      });
    } else {
      setuserDefined(prevList => {
        const updatedList = { ...prevList };
        updatedList[ruleCategory][ruleIndex].type = newType;
        updatedList[ruleCategory][ruleIndex].limit = null;
        return updatedList;
      });
    }

  };

  const handleDelete = () => {
    setuserDefined((prevList) => {
      const updatedList = { ...prevList };
      updatedList[ruleCategory].splice(ruleIndex, 1);
      return updatedList;
    });
  }

  const handleKeywordChange = (e) => {
    const newKeyword = e.target.value;

    setuserDefined((prevList) => {
      const updatedList = { ...prevList };
      updatedList[ruleCategory][ruleIndex] = {
        ...updatedList[ruleCategory][ruleIndex],
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
        <TextField type="text" size="small" label="keyword" sx={{ width: "140px" }} value={rule.keyword} onChange={handleKeywordChange} />
        <Box width={"200px"} sx={{ textAlign: "center" }}>
          <FormControl size="small" fullWidth>
            <InputLabel id="con-type">Type</InputLabel>
            <Select
              labelId="con-type"
              label="Type"
              value={rule?.type}
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
              {singleLimitFields.includes(rule?.type) && (
                <TextField
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
      <IconButton onClick={handleDelete} >
        <RemoveCircleTwoToneIcon color="secondary" />
      </IconButton>
    </Stack>
  );
};

export default UserDefinedRule;
