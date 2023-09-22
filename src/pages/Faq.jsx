import { Box, Stack, Container, Typography, Grid } from '@mui/material'
import DialogBubble from '@/assets/images/DialogBubble.png'
import MyBreadCrumbs from '@/components/MyBreadCrumbs'
import FaqList from '../components/FaqList'

const Examination = () => {
    return (
        <Box>
          <Container>
            <Stack spacing={"20px"}>
    
              <MyBreadCrumbs items={[
                { label: 'FAQ', href: '#' },
              ]} />
    
              <Stack spacing={1} direction={"row"} >
                <div className="page-icon" >
                  <img src={DialogBubble} alt="page name icon" />
                </div>
                <Typography variant='h6' component={"h1"} gutterBottom>FAQ</Typography>
              </Stack>
            
              <FaqList/>
            </Stack>
          </Container>
        </Box >
      )
}
export default Examination