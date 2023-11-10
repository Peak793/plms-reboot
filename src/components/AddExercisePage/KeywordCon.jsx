/* eslint-disable react/prop-types */
import { Stack, Typography, Grid } from "@mui/material";
import CategorySection from "@/components/AddExercisePage/CategorySection";

const KeywordCon = ({ kwCon, onChange, editable }) => {
  const getCategoryTitle = (category) => {
    const words = category.split('_');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography paddingBottom={2}>Suggested Keyword Constraints :</Typography>
          <Stack spacing={1}>
            {Object.keys(kwCon.suggestedCon.value).map((ruleCategory, index) => (
              <CategorySection editable={editable} onChange={onChange} kwCon={kwCon} key={index} title={getCategoryTitle(ruleCategory)} category={"suggested"} ruleCategory={ruleCategory} />
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography paddingBottom={2}>User defined Keyword Constraints :</Typography>
          <Stack spacing={1}>
            {Object.keys(kwCon.userDefinedCon.value).map((ruleCategory, index) => (
              <CategorySection editable={editable} onChange={onChange} kwCon={kwCon} key={index} title={getCategoryTitle(ruleCategory)} category={"user_defined"} ruleCategory={ruleCategory} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default KeywordCon;