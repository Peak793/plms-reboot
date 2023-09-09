import { Stack, Typography, Checkbox, TextField } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import MyTextField from "@/components/ui/MyTextField"

const KeywordCon = () => {
  return (
    <Grid container spacing={1}>
      <Grid xs={12} md={6} >
        <Stack spacing={1} >
          <Typography
            sx={{
              color: "var(--frenchGray)"
            }}
          >Suggested Keyword Constrains :</Typography>
          <Stack direction={"row"} spacing={1} >
            <Checkbox inputProps={{ "aria-label": "checkbox" }} sx={{ color: "white" }} />
            <MyTextField type="text" size="small" sx={{
              width: "140px"
            }} label="Keyword" />

            <TextField type="number" size="small" label="Limit" sx={{
              width: "80px"
            }} />
          </Stack>
        </Stack>
      </Grid>
      <Grid xs={12} md={6} >
        b
      </Grid>
    </Grid>
  )
}

export default KeywordCon