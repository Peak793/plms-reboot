import { Box, Stack, Container } from '@mui/material'
import { useEffect } from 'react'
import Book from '@/assets/images/bookicon.png'
import classes from '@/assets/css/Instruction.module.css'
import { useSetAtom } from "jotai";
import { sidebarSelectedAtom } from "../store/store";

// components
import MyBreadCrumbs from '@/components/_shared/MyBreadCrumbs'
import Header from '@/components/_shared/Header'

const Examination = () => {
  const setSelected = useSetAtom(sidebarSelectedAtom);

  useEffect(() => {
    setSelected(2.2);
  }, [])

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