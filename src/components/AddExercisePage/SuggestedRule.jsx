/* eslint-disable react/prop-types */
import { Stack, TextField, FormControl, IconButton } from "@mui/material"
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';

const SuggestedRule = ({ onAddingRule, editable, kwCon, ruleCategory, ruleIndex }) => {

  const rule = kwCon.suggestedCon.value[ruleCategory][ruleIndex]

  const handleAddingRule = () => {
    const isDuplicate = kwCon.userDefinedCon.value[ruleCategory].some((userRule) => userRule.keyword === rule.keyword);

    if (isDuplicate) {
      // handle duplicate rule
      alert(`A rule with the keyword "${rule.keyword}" already exists in the "${ruleCategory}" category.`);
      return;
    }

    const newRule = {
      keyword: rule.keyword,
      active: true,
      type: "eq",
      limit: rule.limit,
    };

    onAddingRule((prev) => {
      const newKwConList = { ...prev };
      newKwConList.userDefinedCon[ruleCategory] = [...prev.userDefinedCon[ruleCategory], newRule];
      return newKwConList;
    });
  };

  return (
    <Stack direction={'row'} spacing={1} sx={{ paddingLeft: "20px" }} >
      <Stack direction={"row"} spacing={1}>
        <TextField disabled type="text" size="small" value={rule?.keyword} sx={{
          width: "250px",
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "#000000",
          },
        }} />
        <FormControl>
          <Stack spacing={1} >
            <Stack direction={"row"} spacing={1} >
              <TextField
                disabled
                type="text"
                size="small"
                value={rule?.limit}
                sx={{ width: "55px" }}
              />
            </Stack>
          </Stack>
        </FormControl>
      </Stack>
      {editable && <IconButton onClick={handleAddingRule}>
        <AddCircleTwoToneIcon color="success" />
      </IconButton>}
    </Stack>
  )
}


export default SuggestedRule