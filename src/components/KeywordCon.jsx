import { Stack, Typography, Grid } from "@mui/material";

import { useAtom } from "jotai";
import { keywordConstraintsList } from "../store/store";
import CategorySection from "./CategorySection";


const KeywordCon = () => {
  const [kwConList,] = useAtom(keywordConstraintsList);

  return (
    <>
      <Typography
        sx={{
          color: "var(--frenchGray)"
        }}
      >Suggested Keyword Constraints:</Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4} >
          <Stack spacing={1} >
            <CategorySection title="Build-in functions" category="builtin_functions" rules={kwConList["builtin_functions"]} />
            <CategorySection title="Reserved words" category="reserved_words" rules={kwConList["reserved_words"]} />
            <CategorySection title="Other" category="other" rules={kwConList.other} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={8} >
          <Stack spacing={1} >
            <CategorySection title="User defined" category="user_defined" rules={kwConList["user_defined"] || []} />
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

export default KeywordCon;
