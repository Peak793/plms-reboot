import { useState, useRef, useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { Box, Container, Stack } from '@mui/material';
import { suggestedConstraints } from '@/store/store';
import { getKwConSourceCode } from '@/utils/pythonCode';
import ExerciseForm from '@/components/_shared/ExerciseForm';
import { useMemo } from 'react';

import Header from '@/components/_shared/Header';
import Testcases from '@/components/AddExercisePage/Testcases';
import folderIcon from '@/assets/images/foldericon.png';
import MyBreadCrumbs from '@/components/_shared/MyBreadCrumbs';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getEditExercisePageInfo } from '@/utils/api';

const EditExercise = () => {
  const pyodideWorkerRef = useRef(null);
  const [labName, setLabName] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [codeValue, setCodeValue] = useState(`# Source code\n`);
  const [isPyodideReady, setIsPyodideReady] = useState(false);
  const setSuggested = useSetAtom(suggestedConstraints);
  const { groupId, level, exerciseId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['add-exercise-info', groupId, exerciseId],
    queryFn: ({ queryKey }) => getEditExercisePageInfo(queryKey[1], queryKey[2])
  })

  useEffect(() => {
    console.log(data)

    if (!isLoading && data) {
      setLabName(data.labName || '');
      setContentValue(data.contentValue || '');
      setCodeValue(data.codeValue || `# Source code\n`);
    }
  }, [data, isLoading]);

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

  const formData = useMemo(() => {
    return {
      labName: {
        value: labName,
        setValue: setLabName,
      },
      content: {
        value: contentValue,
        setValue: setContentValue,
      },
      code: {
        value: codeValue,
        setValue: setCodeValue,
      }
    }
  }, [codeValue, contentValue, labName])

  return (
    <Box>
      <Container>
        <Stack spacing={2}>
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/ins' },
            { label: "Group ...", href: `/ins/group/${groupId}` },
            { label: "Chapter Name", href: '#' },
            { label: "Exercise Name", href: '#' },
          ]} />

          <Header logoSrc={folderIcon} title={"Chatper Name"} />
          <ExerciseForm lv={level} onPreviewPage formData={formData} onSubmit={handleSubmit} />
          <Testcases />
        </Stack>
      </Container>
    </Box>
  );
};

export default EditExercise;