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
    setSelected("examination");
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

            <ol className={classes['rules']} >
              <li>นำบัตรนักศึกษา หรือบัตรประชาชน  ดินสอ ปากกามาด้วย</li>
              <li>นักศึกษาต้องมาทำการสอบ ที่ ภาควิชาวิศวกรรมคอมพิวเตอร์</li>
              <li>เป็นการสอบแบบ <strong>Closed book</strong></li>
              <li>นักศึกษาจะไม่สามารถเข้าดูประวัติการส่งงานได้</li>
              <li>เวปไซต์นี้จะไม่สามารถเข้าถึงได้จากเครือข่ายคอมพิวเตอร์นอกสถาบัน</li>
              <li>เครื่องคอมพิวเตอร์จะตั้งค่าให้เข้าได้ เวปไซต์เดียวเท่านั้น จะเข้าเวปอื่น ๆ ไม่ได้</li>
              <li>เมื่อเข้าห้องแล้ว ให้ทดสอบเครื่องคอมพิวเตอร์ ถ้าพบอุปกรณ์ไม่ดี ให้แจ้งผู้ดูแล</li>
              <li>ให้ทดสอบ IDE (Vs code) ที่ใช้ โดยทดลองเขียนโปรแกรม helloworld ถ้าไม่ได้ให้แจ้งผู้ดูแล ก่อนเริ่มสอบ</li>
              <li>save file ที่ไดร์ฟ D หรือ E</li>
              <li>ถ้ามีการรีสตาร์ท ข้อมูลที่บันทึกไว้จะสูญหาย</li>
              <li>ห้ามนำเอกสารเข้าห้องสอบ</li>
              <li>ห้ามพกอุปกรณ์อิเลกทรอนิกส์ติดตัว ให้ปิดเครื่อง และนำไปวางในที่ปลอดภัย</li>
              <li>ถ้าพบว่าทำการทุจริต จะลงโทษ ตามระเบียบของทางคณะวิศวกรรมศาสตร์</li>
              <li>ให้เซนต์ชื่อก่อนสอบ และหลังสอบ</li>
            </ol>

          </Box>


        </Stack>
      </Container>
    </Box >
  )
}
export default Examination