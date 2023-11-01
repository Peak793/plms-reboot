import { useState, useRef, useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import folderIcon from '@/assets/images/foldericon.png';
import { suggestedConstraints } from '@/store/store';
import { getKwConSourceCode } from '@/utils/pythonCode';
import Header from '@/components/_shared/Header';
import KeywordCon from '@/components/AddExercisePage/KeywordCon';
import MyBreadCrumbs from '@/components/_shared/MyBreadCrumbs';
import MyCodeEditor from '@/components/_shared/MyCodeEditor';
import Testcases from '@/components/AddExercisePage/Testcases';
import MyRte from '@/components/_shared/MyRte';

// const initializeWorker = (ref, setIsPyodideReady, setSuggested) => {
//   if (ref.current) return;

//   ref.current = new Worker('/workers/pyodideWorker.js');
//   ref.current.onmessage = ({ data }) => {
//     if (data.status === 'initialized') {
//       setIsPyodideReady(true);
//       console.log(data.message);
//     } else if (data.status === "success") {
//       setSuggested(data.data)
//     } else {
//       alert(data.message)
//     }
//   };
// };

const AddExercise = () => {
  const pyodideWorkerRef = useRef(null);
  const [contentValue, setContentValue] = useState('');
  const [codeValue, setCodeValue] = useState(`# Source code\n`);
  const [isPyodideReady, setIsPyodideReady] = useState(false);
  const setSuggested = useSetAtom(suggestedConstraints);

  useEffect(() => {
    // Initialize the worker when the component mounts
    pyodideWorkerRef.current = new Worker('/workers/pyodideWorker.js');
    pyodideWorkerRef.current.onmessage = ({ data }) => {
      if (data.status === 'initialized') {
        setIsPyodideReady(true);
        console.log(data.message);
      } else if (data.status === "success") {
        setSuggested(data.data);
      } else {
        alert(data.message);
      }
    };

    // Cleanup function to terminate the worker when the component is unmounted
    return () => {
      if (pyodideWorkerRef.current) {
        pyodideWorkerRef.current.terminate();
      }
    };
  }, []);

  const handleSubmit = () => {
    if (!isPyodideReady) {
      console.warn('Pyodide is not ready yet.');
      alert('Pyodide is not ready yet.');
      return;
    }
    pyodideWorkerRef.current.postMessage({ pythonCode: getKwConSourceCode(codeValue) });
  };

  return (
    <Box>
      <Container>
        <Stack spacing={2}>
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/ins' },
            { label: 'Group 401', href: '/ins/g/:groupId' },
          ]} />

          <Header logoSrc={folderIcon} title="Variables Expression Statement" />

          <Stack spacing={2} sx={{ padding: "20px", border: "1px solid #202739", borderRadius: "8px" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Level 2 - Middle</Typography>
              <Button variant="contained" size="medium" sx={{ paddingX: "25px", borderRadius: "8px", bgcolor: "var(--cerulean )", textTransform: "none" }} onClick={handleSubmit}>Submit</Button>
            </Stack>
            <TextField label="Lab name" />
            <MyRte value={contentValue} setContentValue={setContentValue} />
            <Box height={400} >
              <MyCodeEditor value={codeValue} highlight={true} onChange={setCodeValue} />
            </Box>
            <KeywordCon />
          </Stack>

          <Testcases />
        </Stack>
      </Container>
    </Box>
  );
};

export default AddExercise;