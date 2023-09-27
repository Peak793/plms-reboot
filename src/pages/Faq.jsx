import { Box, Stack, Container } from '@mui/material'
import DialogBubble from '@/assets/images/DialogBubble.png'

// components
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import FaqList from '@/components/FaqList'
import Header from '@/components/Header'


const Examination = () => {
  return (
    <Box>
      <Container>
        <Stack spacing={"20px"}>

          <MyBreadCrumbs items={[
            { label: 'FAQ', href: '#' },
          ]} />

          <Header logoSrc={DialogBubble} title="FAQ" />

          <FaqList />
        </Stack>
      </Container>
    </Box >
  )
}
export default Examination