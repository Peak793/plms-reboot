import { Box, Stack, Container, Typography, Grid } from '@mui/material'
import Newspaper from '@/assets/images/Newspaper-Icon.png'
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import classes from '@/assets/css/Instruction.module.css'

const Instruction = () => {
    return (
        <Box>
          <Container>
            <Stack spacing={"20px"}>
    
              <MyBreadCrumbs items={[
                { label: 'Instructions', href: '#' },
              ]} />
    
              <Stack spacing={1} direction={"row"} >
                <div className="page-icon" >
                  <img src={Newspaper} alt="page name icon" />
                </div>
                <Typography variant='h6' component={"h1"} gutterBottom>Instructions</Typography>
              </Stack>
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