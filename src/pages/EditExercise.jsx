import { useState, useRef, useEffect, useMemo } from 'react';
import { defaultCon } from '@/store/store';
import { Box, Container, Stack } from '@mui/material';
import { getKwConSourceCode } from '@/utils/pythonCode';
import ExerciseForm from '@/components/_shared/ExerciseForm';
import Header from '@/components/_shared/Header';
import Testcases from '@/components/AddExercisePage/Testcases';
import folderIcon from '@/assets/images/foldericon.png';
import MyBreadCrumbs from '@/components/_shared/MyBreadCrumbs';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getEditExercisePageInfo } from '@/utils/api';

const EditExercise = () => {
  // Params
  const { groupId, level, chapterId, exerciseId } = useParams();

  // Query
  const { data, isLoading } = useQuery({
    queryKey: ['edit-exercise-info', groupId, exerciseId, chapterId],
    queryFn: ({ queryKey }) => getEditExercisePageInfo(queryKey[1], queryKey[2], queryKey[3])
  })

  const formData = (!isLoading && data) ? {
    lab_name: data.lab_exercise.lab_name,
    lab_content: data.lab_exercise.lab_content,
    sourcecode_content: data.lab_exercise.sourcecode_content || "",
    keywordCon: {
      suggestedCon: defaultCon,
      userDefinedCon: defaultCon
    }
  } :
    {
      lab_name: '',
      lab_content: '',
      sourcecode_content: '# Source code\n',
      keywordCon: {
        suggestedCon: defaultCon,
        userDefinedCon: defaultCon
      },
    }

  // Render
  return (
    <Box>
      <Container>
        <Stack spacing={2}>
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/ins' },
            { label: isLoading ? "..." : `Group ${data?.group_no}`, href: `/ins/group/${groupId}` },
            { label: isLoading ? "..." : `Chapter ${chapterId} : ${data?.chapter_name}`, href: isLoading ? "#" : `/ins/group/${groupId}/chapter/${data?.lab_exercise.lab_chapter}` },
            { label: isLoading ? "..." : data?.lab_exercise.lab_name, href: '#' },
          ]} />

          <Header logoSrc={folderIcon} title={`Chapter ${chapterId} : ${data?.chapter_name}`} />
          <ExerciseForm lv={level} editable={true} formData={formData} setEditable={() => { }} />
          <Testcases testcaseData={[]} />
        </Stack>
      </Container>
    </Box>
  );
};

export default EditExercise;