import { Box, Stack, Container, Grid } from '@mui/material'
import folderIcon from '@/assets/images/Folder-Icon.png'
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import LabCard from '@/components/LabCard'
import Header from '@/components/Header'
import { leveledExerciseList } from '../placeholder-data/placeholder-data'

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
            {leveledExerciseList.map((lv) => <LabCard key={lv.level} lv={lv} />)}
          </Grid>

        </Stack>
      </Container>
    </Box >
  )
}

export default Chapter