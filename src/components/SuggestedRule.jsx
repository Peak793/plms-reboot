import { Stack, TextField, FormControl, IconButton } from "@mui/material"
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import PropTypes from "prop-types"
import { useAtom } from 'jotai';
import { keywordConstraintsList } from '../store/store';

const SuggestedRule = ({ category, ruleIndex }) => {
  const [kwConList, setKwConList] = useAtom(keywordConstraintsList);

  const rule = kwConList[category][ruleIndex]

  const handleAddingRule = () => {
    const newRule = {
      active: true,
      keyword: rule.keyword,
      type: "eq",
      limit: rule.limit,
    };

    setKwConList(prev => {
      const updatedUserDefined = [...prev["user_defined"], newRule];
      return {
        ...prev,
        ["user_defined"]: updatedUserDefined,
      };
    });
  }

  return (
    <Stack direction={'row'} spacing={1} sx={{ paddingLeft: "20px" }} >
      <Stack direction={"row"} spacing={1}>
        <TextField disabled type="text" size="small" value={rule.keyword} sx={{
          width: "140px",
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
      <IconButton onClick={handleAddingRule} >
        <AddCircleTwoToneIcon color="success" />
      </IconButton>
    </Stack>
  )
}

SuggestedRule.propTypes = {
  category: PropTypes.string.isRequired,
  ruleIndex: PropTypes.number.isRequired,
}

export default SuggestedRule