import { Box, Stack, Container, Grid } from '@mui/material'
import folderIcon from '@/assets/images/foldericon.png'
import { leveledExerciseList } from '@/placeholder-data/placeholder-data'
import MyBreadCrumbs from '@/components/_shared/MyBreadCrumbs'
import Header from '@/components/_shared/Header'
import LabLevel from '@/components/ChapterPage/LabLevel'
import { useParams } from 'react-router'

const Chapter = () => {

  const { groupId, groupNo } = useParams();

  return (
    <Box>
      <Container>
        <Stack spacing={"20px"}>

          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/ins' },
            { label: `Group ${groupNo}`, href: `/ins/g/${groupId}/${groupNo}` },
            { label: 'Variables Expression Statement', href: '#' },
          ]} />

          <Header logoSrc={folderIcon} title="Variables Expression Statement" />

          <Grid container spacing={"10px"} >
            {leveledExerciseList.map((lv) => <LabLevel key={lv.level} lv={lv} />)}
          </Grid>

        </Stack>
      </Container>
    </Box >
  )
}

export default Chapter