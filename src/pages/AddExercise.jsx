import { Container, Box, Typography, Stack, Button, TextField } from '@mui/material'
import folderIcon from '@/assets/images/Folder-Icon.png'
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import { useState } from 'react';
import MyCodeEditor from '@/components/MyCodeEditor';
import MyTextEditor from '@/components/MyTextEditor';
import KeywordCon from '../components/KeywordCon';

const AddExercise = () => {
  const [contentValue, setContentValue] = useState('')
  const [codeValue, setCodeValue] = useState('# Source Code\n');

  return (
    <Box>
      <Container>
        <Stack spacing={"20px "}>
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '#' },
            { label: 'Group 401', href: '#' },
          ]} />
          <Stack spacing={1} direction={"row"} >
            <img src={folderIcon} alt="page name icon" />
            <Typography variant='h6' component={"h1"} gutterBottom>Variables Expression Statement</Typography>
          </Stack>

          <Stack spacing={"20px"} sx={{
            padding: "20px",
            border: "1px solid #202739",
            borderRadius: "8px",
          }} >

            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Typography variant='h6' >Level 2 - Middle</Typography>
              <Button variant='contained' size='medium' sx={{
                paddingX: "25px",
                borderRadius: "8px",
                bgcolor: "var(--cerulean )",
                textTransform: "none",
              }} >Submit</Button>
            </Stack>

            <TextField label={"Lab name"} />

            <MyTextEditor value={contentValue} onChange={setContentValue} placeholder={'Write your content'} />

            <MyCodeEditor value={codeValue} onChange={setCodeValue} />

            <KeywordCon />
          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default AddExercise