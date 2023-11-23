import { Container, Stack } from "@mui/material"
import Header from "@/components/_shared/Header"
import ExerciseChapterList from "@/components/_shared/ExerciseChapterList"
import MyBreadCrumbs from "@/components/_shared/MyBreadCrumbs"
import codingIcon from '@/assets/images/codingicon.png'

const ExerciseList = () => {
  return (
    <Container>
      <Stack spacing="20px" >
        <MyBreadCrumbs items={[
          { label: 'Exercises', href: "#" },
        ]} />
        <Stack spacing="5px" >
          <Header
            logoSrc={codingIcon}
            title="Exercises"
          />
          <ExerciseChapterList />
        </Stack>
      </Stack>
    </Container>
  )
}

export default ExerciseList