import { useState, useRef, useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { suggestedConstraints, userDefinedConstraints, defaultCon } from '@/store/store';
import { Box, Container, Stack } from '@mui/material';
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


const AddExercise = () => {
  const { groupId, chapterId, level } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['add-exercise-info', groupId, level],
    queryFn: ({ queryKey }) => getAddExercisePageInfo(queryKey[1], queryKey[2])
  })

  return (
    <Box>
      <Container>
        <Stack spacing={2}>
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/ins' },
            { label: isLoading ? "Group ..." : `Group ${data?.group_no}`, href: `/ins/group/${groupId}` },
            { label: isLoading ? "..." : `Chapter ${chapterId} : ${data?.chapter_name}`, href: `/ins/group/${groupId}/chapter/${chapterId}` },
            { label: "Add Exercise", href: '#' },
          ]} />

          <Header logoSrc={folderIcon} title={`Chapter ${chapterId} : ${data?.chapter_name}`} />
          <ExerciseForm onAddExercisePage={true} lv={level} mode={"add"} editable />
          <Testcases />
        </Stack>
      </Container>
    </Box>
  );
};

export default AddExercise;