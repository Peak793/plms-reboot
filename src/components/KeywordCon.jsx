import { Stack, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import ConstraintRule from "./ConstraintRule";

const KeywordCon = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={6} >
        <Stack spacing={3} >
          <Typography
            sx={{
              color: "var(--frenchGray)"
            }}
          >Suggested Keyword Constrains :</Typography>
          <ConstraintRule />
        </Stack>
      </Grid>
      <Grid xs={12} md={6} >
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