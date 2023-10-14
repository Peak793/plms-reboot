import { useState, useRef } from 'react';
import { useSetAtom } from 'jotai';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import folderIcon from '@/assets/images/Folder-Icon.png';
import { suggestedConstraints } from '../store/store';
import { getKwConSourceCode } from '../utils/pythonCode';
import Header from '@/components/Header';
import KeywordCon from '@/components/KeywordCon';
import MyBreadCrumbs from '@/components/MyBreadCrumbs';
import MyCodeEditor from '@/components/MyCodeEditor';
import MyTextEditor from '@/components/MyTextEditor';
import Testcases from '@/components/Testcases';

const initializeWorker = (ref, setIsPyodideReady, setSuggested) => {
  if (ref.current) return;

  ref.current = new Worker('/workers/pyodideWorker.js');
  ref.current.onmessage = ({ data }) => {
    if (data.status === 'initialized') {
      setIsPyodideReady(true);
      console.log(data.message);
    } else if (data.status === "success") {
      setSuggested(data.data)
    } else {
      alert(data.message)
    }
  };
};

const AddExercise = () => {
  const pyodideWorkerRef = useRef(null);
  const [contentValue, setContentValue] = useState('');
  const [codeValue, setCodeValue] = useState(`# Source code\n`);
  const [isPyodideReady, setIsPyodideReady] = useState(false);
  const setSuggested = useSetAtom(suggestedConstraints);

  initializeWorker(pyodideWorkerRef, setIsPyodideReady, setSuggested);

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
            <MyTextEditor value={contentValue} onChange={setContentValue} placeholder="Write your content" />
            <MyCodeEditor value={codeValue} highlight={true} onChange={setCodeValue} maxHeight={"400px"} />
            <KeywordCon />
          </Stack>

          <Testcases />
        </Stack>
      </Container>
    </Box>
  );
};

export default AddExercise;