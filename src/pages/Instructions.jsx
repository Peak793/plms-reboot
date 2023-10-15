import { useEffect } from 'react';
import { Box, Stack, Container } from '@mui/material'
import Newspaper from '@/assets/images/newspapericon.png'
import classes from '@/assets/css/Instruction.module.css'
import { useSetAtom } from "jotai";
import { sidebarSelectedAtom } from "@/store/store";

// components
import MyBreadCrumbs from '@/components/_shared/MyBreadCrumbs'
import Header from '@/components/_shared/Header'

const Instruction = () => {

  const setSelected = useSetAtom(sidebarSelectedAtom);

  useEffect(() => {
    setSelected(2.1);
  }, [])

  return (
    <Box>
      <Container>
        <Stack spacing={"20px"}>

          <MyBreadCrumbs items={[
            { label: 'Instructions', href: '#' },
          ]} />

          <Header logoSrc={Newspaper} title="Instructions" />

          <Box sx={{
            padding: "2px 25px",
            bgcolor: "var(--biscay)",
            borderRadius: "20px",
            width: "100%",
            minHeight: "500px",
            color: "White"
          }}>
            <div className={classes['Title']}>
              <h4>ข้อแนะนำการใช้งาน</h4>
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
export default Instruction