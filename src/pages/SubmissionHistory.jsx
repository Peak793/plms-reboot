import { Box, Stack, Container } from "@mui/material";
import folderIcon from '@/assets/images/Folder-Icon.png';

// components
import MyBreadCrumbs from '@/components/MyBreadCrumbs';
import Header from '@/components/Header';
import StudentBriefInfo from "@/components/StudentBriefInfo";
import ExerciseInfoBox from "@/components/ExerciseInfoBox";
import SubmissionHistoryBox from "@/components/SubmissionHistoryBox";

const SubmissionHistory = () => {

  return (
    <Box>
      <Container>
        <Stack spacing={"20px"}>
          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '#' },
            { label: 'Group 401', href: '#' },
            { label: 'Score(Individual)', href: '#' },
            { label: 'Introduction', href: '#' },
          ]} />

          <StudentBriefInfo
            studentId="63010202"
            studentName="ชรินดา สนธิดี"
            studentNickName="แบม"
            groupId="22020402"
            groupNo={401}
          />

          <Header logoSrc={folderIcon} title="Group 401 (Student)" />

          <ExerciseInfoBox />

          <SubmissionHistoryBox />

        </Stack>
      </Container>
    </Box>
  );
};

export default SubmissionHistory;
