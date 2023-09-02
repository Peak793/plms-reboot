import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import classes from "../assets/css/RootLayout.module.css"

const RootLayout = () => {
  return (
    <>
      <Sidebar />
      <main className={classes["page-content"]}>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default RootLayout