import { Container, Box, Typography, Stack, Button, TextField } from '@mui/material';
import { useEffect, useReducer, useRef } from 'react';
import { getKwConSourceCode } from '../utils/pythonCode';
import folderIcon from '@/assets/images/Folder-Icon.png';
import { initSuggestWorker } from '../utils/workerUtils';

//components
import MyBreadCrumbs from '@/components/MyBreadCrumbs';
import MyCodeEditor from '@/components/MyCodeEditor';
import MyTextEditor from '@/components/MyTextEditor';
import KeywordCon from '@/components/KeywordCon';
import Testcases from '@/components/Testcases';
import Header from '@/components/Header';

const initialState = {
  contentValue: '',
  codeValue: '# Source code',
  isPyodideReady: false,
  kwConList: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTENT_VALUE':
      return { ...state, contentValue: action.payload };
    case 'SET_CODE_VALUE':
      return { ...state, codeValue: action.payload };
    case 'SET_PYODIDE_READY':
      return { ...state, isPyodideReady: action.payload };
    case 'UPDATE_KW_CON_LIST':
      return { ...state, kwConList: { ...state.kwConList, ...action.payload } };
    default:
      return state;
  }
};

const AddExercise = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const pyodideWorkerRef = useRef(null);

  useEffect(() => {
    initSuggestWorker(pyodideWorkerRef, dispatch);
  }, []);

  const { contentValue, codeValue, isPyodideReady } = state;

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

          <Header logoSrc={folderIcon} title="Variables Expression Statement" />

          <Stack spacing={"20px"} sx={{ padding: "20px", border: "1px solid #202739", borderRadius: "8px" }}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Typography variant='h6'>Level 2 - Middle</Typography>
              <Button variant='contained' size='medium' sx={{ paddingX: "25px", borderRadius: "8px", bgcolor: "var(--cerulean )", textTransform: "none" }} onClick={handleSubmit}>Submit</Button>
            </Stack>
            <TextField label={"Lab name"} />
            <MyTextEditor value={contentValue} onChange={(content) => dispatch({ type: "SET_CONTENT_VALUE", payload: content })} placeholder={'Write your content'} />
            <MyCodeEditor value={codeValue} onChange={() => { }} />
            <KeywordCon />
          </Stack>
          <Testcases />
        </Stack>
      </Container>
    </Box>
  );
}

export default AddExercise;
