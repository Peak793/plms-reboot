import { Container, Stack } from "@mui/material"
import Header from "@/components/_shared/Header"
import ExerciseChapterList from "@/components/_shared/ExerciseChapterList"
import MyBreadCrumbs from "@/components/_shared/MyBreadCrumbs"
import codingIcon from '@/assets/images/codingicon.png'
import { getChapterList } from "@/utils/api"
import { useQuery } from "@tanstack/react-query"
import { userAtom } from "@/store/store"
import { useAtom } from "jotai"

const StuExerciseList = () => {
  const [user] = useAtom(userAtom)

  const { data: chapterList, isLoading: isChapterListLoading } = useQuery({
    queryKey: ["chapterList", user?.id],
    queryFn: () => getChapterList(user?.id),
    refetchInterval: 300000,
  })

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
          <ExerciseChapterList isLoading={isChapterListLoading} data={chapterList} />
        </Stack>
      </Stack>
    </Container>
  )
}

export default StuExerciseList