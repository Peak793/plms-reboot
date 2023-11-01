import { Stack, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { RichTextReadOnly } from "mui-tiptap"
import { extensions } from "@/utils/tiptap-extensions"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TestcaseDisplay from "@/components/StuExercise/TestcaseDisplay";
import he from 'he';

const Problem = () => {

  const htmlString = `
<p style="font-size: 13px; color: rgb(107, 113, 122);">ให้สร้างไฟล์ ชือ ch1_3.py โดยมีข้อมูลดังนี้</p><pre style="line-height: 1.42857;">lambda=79&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# สร้างตัวแปรชือ lambda แล้ว นำ 79 ไปเก็บไว้ในตัวแปร lambda
print("lambda =",lambda)&nbsp;&nbsp;&nbsp;&nbsp;# แสดงผลค่า lambda</pre><p style="color: rgb(51, 51, 51); line-height: 1.42857;"><br></p><p style="font-size: 13px; color: rgb(107, 113, 122);">ทดลองการทำงาน ใน vscode แล้ว submit ไฟล์ที่สร้างขี้นมา</p><p style="font-size: 13px; color: rgb(107, 113, 122); line-height: 1.42857;"><br></p><p style="font-size: 13px; color: rgb(107, 113, 122); line-height: 1.42857;"><u>หมายเหตุ</u></p><p style="font-size: 13px; color: rgb(107, 113, 122); line-height: 1.42857;">1. โปรแกรมนี้ไม่สามารถทำงานได้ เนื่องจาก lambda เป็นคำสงวน(reserved words) ไม่สามารถนำมาเป็นชื่อตัวแปรได้</p><p style="font-size: 13px; color: rgb(107, 113, 122); line-height: 1.42857;">2. ให้เปลี่ยน lambda เป็นชื่ออื่น ที่ไม่ใช่คำสงวน เช่น x, y, team</p><p style="font-size: 13px; color: rgb(107, 113, 122); line-height: 1.42857;">3. รายชือคำสงวน(reserved words) ตามด้านล่าง</p><p style="margin: 0pt 0in; font-size: 13px; color: rgb(107, 113, 122); line-height: normal; direction: ltr; unicode-bidi: embed;"><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">False</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp;&nbsp;&nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">class</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">return</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal;"><span style="font-family: &quot;Courier New&quot;;">is&nbsp;</span></span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp; &nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">finally&nbsp;</span></p><p style="margin: 0pt 0in; font-size: 13px; color: rgb(107, 113, 122); line-height: normal; direction: ltr; unicode-bidi: embed;"><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">None&nbsp; &nbsp;&nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">if</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">for</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">lambda</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp;&nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">continue</span></p><p style="margin: 0pt 0in; font-size: 13px; color: rgb(107, 113, 122); line-height: normal; direction: ltr; unicode-bidi: embed;"><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">True&nbsp; &nbsp;&nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">def</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp; &nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">from</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp; &nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">while</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal;"><span style="font-family: &quot;Courier New&quot;;">nonlocal</span><br></span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">and</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp; &nbsp;del&nbsp; &nbsp; &nbsp;global &nbsp; not&nbsp; &nbsp; &nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal;"><span style="font-family: &quot;Courier New&quot;;">with</span><br></span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">as</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">elif</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp;&nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">try</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">or</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp; &nbsp;&nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal;"><span style="font-family: &quot;Courier New&quot;;">yield</span><br></span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">assert</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp;&nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">else</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp;&nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">import</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal;"><span style="font-family: &quot;Courier New&quot;;">&nbsp;&nbsp; pass</span><br></span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">break &nbsp;&nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">except</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; in</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">&nbsp; &nbsp; &nbsp; &nbsp;</span><span style="font-variant-numeric: normal; font-variant-east-asian: normal; font-family: &quot;Courier New&quot;;">raise</span></p><p style="font-size: 13px; color: rgb(107, 113, 122); line-height: 1.42857;"><br></p><p style="font-size: 13px; color: rgb(107, 113, 122); line-height: 1.42857;">4. ให้ลบ สคริงซึ่งเป็นค่าคงที่ที่ปรากฎในคำสั่ง print เพื่อให้ได้ผลลัพธ์เฉพาะตัวเลขตรงตามตัวอย่างที่แสดงด้านล่าง<br></p><p style="font-size: 13px; color: rgb(107, 113, 122); line-height: 1.42857;"><br></p><p style="font-size: 13px; color: rgb(107, 113, 122);"><br></p><p style="font-size: 13px; color: rgb(107, 113, 122);"><br></p>
`;

  return (
    <Stack spacing="10px" height={"calc(100% - 54px)"} marginTop={"54px"} width={"100%"} padding={"10px"} sx={{ overflowY: "auto", position: "absolute" }}>
      <Typography variant="h6" >Exercise Name</Typography>

      {/* Content */}
      <Box paddingX="15px" >
        <RichTextReadOnly content={he.decode(htmlString)} extensions={extensions} />
      </Box>

      {/* Keyword Constraints */}
      <Box borderRadius={"8px"} >
        <Accordion sx={{ bgcolor: "transparent" }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ bgcolor: "var(--mirage)", borderRadius: "8px", overflow: "hidden" }}
          >
            <Typography>Keyword Constraints:</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "var(--biscay)", borderRadius: "8px" }} >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Testcases */}
      <TestcaseDisplay />
    </Stack>
  )
}

export default Problem