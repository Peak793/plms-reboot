import { Box, Stack, Container, Typography, Grid } from '@mui/material'
import folderIcon from '@/assets/images/Folder-Icon.png'
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import LabCard from '../components/LabCard'
import { leveledExerciseList } from '../placeholder-data/placeholder-data'

const Chapter = () => {
  return (
    <Box>
      <Container>
        <Stack spacing={"20px"}>

          <MyBreadCrumbs items={[
            { label: 'My Groups', href: '#' },
            { label: 'Group 401', href: '#' },
            { label: 'Variables Expression Statement', href: '#' },
          ]} />

          <Stack spacing={1} direction={"row"} >
            <img src={folderIcon} alt="page name icon" />
            <Typography className='page-name' variant='h6' component={"h1"} gutterBottom>Variables Expression Statement</Typography>
          </Stack>

          <Grid container spacing={"10px"} >
            {leveledExerciseList.map((lv) => <LabCard key={lv.level} lv={lv} />)}
          </Grid>

        </Stack>
      </Container>
    </Box >
  )
}

export default Chapter