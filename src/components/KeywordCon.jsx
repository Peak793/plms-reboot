import { Stack, Typography, Grid } from "@mui/material";
import { useAtom } from "jotai";
import { suggestedConstraints, userDefinedConstraints } from "../store/store";
import CategorySection from "./CategorySection";

const KeywordCon = () => {
  const [suggested,] = useAtom(suggestedConstraints);
  const [userDefined,] = useAtom(userDefinedConstraints);

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
            {Object.keys(suggested).map((ruleCategory, index) => (
              <CategorySection key={index} title={getCategoryTitle(ruleCategory)} category={"suggested"} ruleCategory={ruleCategory} />
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography paddingBottom={2}>User defined Keyword Constraints :</Typography>
          <Stack spacing={1}>
            {Object.keys(userDefined).map((ruleCategory, index) => (
              <CategorySection key={index} title={getCategoryTitle(ruleCategory)} category={"user_defined"} ruleCategory={ruleCategory} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default KeywordCon;