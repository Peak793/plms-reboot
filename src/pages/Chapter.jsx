import { Box, Stack, Container, Grid } from '@mui/material'
import folderIcon from '@/assets/images/Folder-Icon.png'
import { leveledExerciseList } from '../placeholder-data/placeholder-data'
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import Header from '@/components/Header'
import LabLevel from '@/components/LabLevel'

const Chapter = () => {
  return (
    <Box>
      <Container>
        <Stack spacing={"20px"}>

          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '/ins' },
            { label: 'Group 401', href: '/ins/g/1' },
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