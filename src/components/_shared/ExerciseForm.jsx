/* eslint-disable react/prop-types */
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import KeywordCon from '@/components/AddExercisePage/KeywordCon';
import MyCodeEditor from '@/components/_shared/MyCodeEditor';
import MyRte from '@/components/_shared/MyRte';

const ExerciseForm = ({ lv, onPreviewPage, editable = false,
  formData = {
    labName: {
      value: '',
      setValue: () => { }
    },
    content: {
      value: '',
      setValue: () => { }
    },
    code: {
      value: '',
      setValue: () => { }
    },
    testcase: [],
  },
  onSubmit = () => { }
}) => {
  return (
    <Stack spacing={2} sx={{ padding: "20px", border: "1px solid #202739", borderRadius: "8px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Level {lv}</Typography>

        {onPreviewPage ?
          <Stack direction={"row"} spacing={"10px"}>
            <Button variant="contained" size="medium" sx={{ paddingX: "25px", textTransform: "none" }} onClick={() => { }}>Edit</Button>
            <Button variant="contained" color="error" size="medium" sx={{ paddingX: "25px", textTransform: "none" }} onClick={() => { }}>Remove this problem</Button>
          </Stack>
          :
          <Stack direction={"row"} spacing={"10px"} >
            <Button variant="contained" size="medium" sx={{ paddingX: "25px", textTransform: "none" }} onClick={onSubmit}>Submit</Button>
          </Stack>
        }
      </Stack>
      <TextField label="Lab name" value={formData.labName.value} onChange={(e) => formData.labName.setValue(e.target.value)} disabled={!editable} />
      <MyRte editable={editable} value={formData.content.value} setContentValue={formData.content.setValue} />
      <Box height={400} >
        <MyCodeEditor editable={editable} value={formData.code.value} onChange={formData.code.setValue} />
      </Box>
      <KeywordCon />
    </Stack>
  )
}

export default ExerciseForm