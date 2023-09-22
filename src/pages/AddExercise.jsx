import { Container, Box, Typography, Stack, Button, TextField } from '@mui/material';
import folderIcon from '@/assets/images/Folder-Icon.png';
import MyBreadCrumbs from '@/components/MyBreadCrumbs';
import { useEffect, useState, useRef } from 'react';
import MyCodeEditor from '@/components/MyCodeEditor';
import MyTextEditor from '@/components/MyTextEditor';
import KeywordCon from '../components/KeywordCon';
import Testcases from '../components/Testcases';

const AddExercise = () => {
  const pyodideWorkerRef = useRef(null);
  const [contentValue, setContentValue] = useState('');
  const [codeValue, setCodeValue] = useState('# Source Code\n');
  const [isPyodideReady, setIsPyodideReady] = useState(false);
  const [returnValue, setReturnValue] = useState({ isError: false, returnValue: null });

  if (!pyodideWorkerRef.current) {
    pyodideWorkerRef.current = new Worker('/workers/pyodideWorker.js');
    pyodideWorkerRef.current.onmessage = (event) => {
      const { success, result, error, status } = event.data;
      if (status === 'initialized') {
        setIsPyodideReady(true);
        console.log("Pyodide is Ready")
      } else if (success) {
        setReturnValue({
          isError: false,
          returnValue: result
        });
      } else {
        setReturnValue({
          isError: true,
          returnValue: error
        });
      }
    };
  }

  const handleSubmit = () => {
    if (isPyodideReady) {
      pyodideWorkerRef.current.postMessage({ pythonCode: codeValue });
    } else {
      console.warn('Pyodide is not ready yet.');
    }
  };

  return (
    <Box>
      <Container>
        <Stack spacing={"20px"}>
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/instructor' },
            { label: 'Group 401', href: '/instructor/group/:groupId' },
          ]} />
          <Stack spacing={1} direction={"row"} >
            <div className="page-icon">
              <img src={folderIcon} alt="page name icon" />
            </div>
            <Typography variant='h6' component={"h1"} gutterBottom>Variables Expression Statement</Typography>
          </Stack>

          <Stack spacing={"20px"} sx={{
            padding: "20px",
            border: "1px solid #202739",
            borderRadius: "8px",
          }} >

            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Typography variant='h6'>Level 2 - Middle</Typography>
              <Button
                variant='contained'
                size='medium'
                sx={{
                  paddingX: "25px",
                  borderRadius: "8px",
                  bgcolor: "var(--cerulean )",
                  textTransform: "none",
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Stack>

            <TextField label={"Lab name"} />

            <MyTextEditor value={contentValue} onChange={setContentValue} placeholder={'Write your content'} />

            <MyCodeEditor value={codeValue} onChange={setCodeValue} />

            <KeywordCon />
          </Stack>

          <Testcases />

        </Stack>
      </Container>
    </Box>
  );
}

export default AddExercise;
