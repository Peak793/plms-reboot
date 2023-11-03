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
import { getAddExercisePageInfo } from '@/utils/api';

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
  const [labName, setLabName] = useState('');
  const [contentValue, setContentValue] = useState('');
  const [codeValue, setCodeValue] = useState(`# Source code\n`);
  const [isPyodideReady, setIsPyodideReady] = useState(false);
  const setSuggested = useSetAtom(suggestedConstraints);
  const { groupId, chapterId, level } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['add-exercise-info', groupId, level],
    queryFn: ({ queryKey }) => getAddExercisePageInfo(queryKey[1], queryKey[2])
  })

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
            { label: isLoading ? "Group ..." : `Group ${data?.group_no}`, href: `/ins/group/${groupId}` },
            { label: isLoading ? "..." : data?.chapter_name, href: `/ins/group/${groupId}/chapter/${chapterId}` },
            { label: "Add Exercise", href: '#' },
          ]} />

          <Header logoSrc={folderIcon} title={data?.chapter_name} />
          <ExerciseForm lv={level} mode={"add"} editable formData={formData} onSubmit={handleSubmit} />
          <Testcases />
        </Stack>
      </Container>
    </Box>
  );
};

export default AddExercise;