import { Stack, Typography, Grid } from "@mui/material"
import ConstraintRule from "./ConstraintRule";

const KeywordCon = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6} >
        <Stack spacing={3} >
          <Typography
            sx={{
              color: "var(--frenchGray)"
            }}
          >Suggested Keyword Constrains :</Typography>
          <ConstraintRule />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} >
        <Stack spacing={3} >
          <Typography
            sx={{
              color: "var(--frenchGray)"
            }}
          >User Defined Keyword Constrains :</Typography>
          <ConstraintRule />
        </Stack>
      </Grid>
    </Grid >
  )
}

export default KeywordCon