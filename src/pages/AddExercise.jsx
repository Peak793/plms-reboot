import { Container, Box, Typography, Stack, Button, TextField } from '@mui/material';
import { useState, useRef } from 'react';
import { useAtom } from 'jotai';
import { keywordConstraintsList } from '../store/store';
import MyBreadCrumbs from '@/components/MyBreadCrumbs';
import MyCodeEditor from '@/components/MyCodeEditor';
import MyTextEditor from '@/components/MyTextEditor';
import KeywordCon from '../components/KeywordCon';
import Testcases from '../components/Testcases';
import { getKwConSourceCode } from '../utils/pythonCode';
import folderIcon from '@/assets/images/Folder-Icon.png';

const initializeWorker = (ref, setIsPyodideReady, setKwConList) => {
  if (ref.current) return;

  ref.current = new Worker('/workers/pyodideWorker.js');
  ref.current.onmessage = ({ data }) => {
    if (data.status === 'initialized') {
      setIsPyodideReady(true);
      console.log(data.message);
    } else if (data.status === "success") {
      setKwConList(prev => ({ ...prev, ...data.data }))
    } else {
      alert(data.message)
    }
  };
};

const AddExercise = () => {
  const pyodideWorkerRef = useRef(null);
  const [contentValue, setContentValue] = useState('');
  const [codeValue, setCodeValue] = useState(`# Source code
def longest_balanced_substring(s):
  stack = []
  base = -1
  max_len = 0
  start = 0
  for i in range(len(s)):
      if s[i] == '(':
          stack.append(i)
      else:
          if not stack:
              base = i
          else:
              stack.pop()
              if not stack:
                  max_len = max(max_len, i - base + 1)
              else:
                  max_len = max(max_len, i - stack[-1])
  return s[start:start + max_len]
`);
  const [isPyodideReady, setIsPyodideReady] = useState(false);
  const [, setKwConList] = useAtom(keywordConstraintsList)

  initializeWorker(pyodideWorkerRef, setIsPyodideReady, setKwConList);

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
        <Stack spacing={"20px"}>
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/instructor' },
            { label: 'Group 401', href: '/instructor/group/:groupId' },
          ]} />
          <Stack spacing={1} direction={"row"}>
            <div className="page-icon"><img src={folderIcon} alt="page name icon" /></div>
            <Typography variant='h6' component={"h1"}>Variables Expression Statement</Typography>
          </Stack>
          <Stack spacing={"20px"} sx={{ padding: "20px", border: "1px solid #202739", borderRadius: "8px" }}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Typography variant='h6'>Level 2 - Middle</Typography>
              <Button variant='contained' size='medium' sx={{ paddingX: "25px", borderRadius: "8px", bgcolor: "var(--cerulean )", textTransform: "none" }} onClick={handleSubmit}>Submit</Button>
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
