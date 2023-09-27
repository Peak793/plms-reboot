import { Box, Stack, Container } from '@mui/material'
import Book from '@/assets/images/Book-Icon.png'
import classes from '@/assets/css/Instruction.module.css'

// components
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import Header from '@/components/Header'

const Examination = () => {
  return (
    <Box>
      <Container>
        <Stack spacing={"20px"}>

          <MyBreadCrumbs items={[
            { label: 'Examination', href: '#' },
          ]} />

          <Header logoSrc={Book} title="Examination" />

          <Box sx={{
            padding: "2px 25px",
            bgcolor: "var(--biscay)",
            borderRadius: "20px",
            width: "100%",
            minHeight: "500px",
            color: "White"
          }}>
            <div className={classes['Title']}>
              <h4>การสอบปฏิบัติ 2/2565</h4>
            </div>
            <div className={classes['rules']}>
              <p>1. abcdefg</p>
            </div>
          </Box>


        </Stack>
      </Container>
    </Box >
  )
}
export default Examination