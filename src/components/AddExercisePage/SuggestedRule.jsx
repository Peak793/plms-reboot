/* eslint-disable react/prop-types */
import { Stack, TextField, FormControl, IconButton } from "@mui/material"
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { useAtomValue, useAtom } from 'jotai';
import { suggestedConstraints, userDefinedConstraints } from '@/store/store';

const SuggestedRule = ({ ruleCategory, ruleIndex }) => {
  const sugested = useAtomValue(suggestedConstraints)
  const [userDefined, setUserDefined] = useAtom(userDefinedConstraints)

  const rule = sugested[ruleCategory][ruleIndex]

  const handleAddingRule = () => {
    const isDuplicate = userDefined[ruleCategory].some((userRule) => userRule.keyword === rule.keyword);

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

    setUserDefined((prev) => {
      const newKwConList = {
        ...prev,
        [ruleCategory]: [...prev[ruleCategory], newRule],
      };
      return newKwConList;
    });
  };

  return (
    <Stack direction={'row'} spacing={1} sx={{ paddingLeft: "20px" }} >
      <Stack direction={"row"} spacing={1}>
        <TextField disabled type="text" size="small" value={rule.keyword} sx={{
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
                type="number"
                size="small"
                value={rule.limit}
                sx={{ width: "85px" }}
              />
            </Stack>
          </Stack>
        </FormControl>
      </Stack>
      <IconButton onClick={handleAddingRule}>
        <AddCircleTwoToneIcon color="success" />
      </IconButton>
    </Stack>
  )
}


export default SuggestedRule