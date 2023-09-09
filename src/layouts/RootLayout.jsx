import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import UserAvatar from "@/components/UserAvatar"
import { Box, Container } from "@mui/system";

const RootLayout = () => {
  return (
    <>
      <Sidebar />
      <Box marginX={10} marginBottom={10} >
        <UserAvatar />
        <Container maxWidth="xl" >
          <Outlet />
        </Container>
      </Box>
      <footer></footer>
    </>
  )
}

export default RootLayout