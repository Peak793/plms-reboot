import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import classes from "../assets/css/RootLayout.module.css"
import UserAvatar from "@/components/UserAvatar"
import { Box, Container } from "@mui/system";

const RootLayout = () => {
  return (
    <>
      <Sidebar />
      <Box marginX={10}>
        <UserAvatar />
        <Container maxWidth="xl" >
          <main className={classes["page-content"]}>
            <Outlet />
          </main>
        </Container>
      </Box>
      <footer></footer>
    </>
  )
}

export default RootLayout