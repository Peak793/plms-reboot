import avatar from "@/assets/images/Avatar.png"
import classes from "@/assets/css/UserAvatar.module.css"
import { getClassNames } from "../utils"
import { Avatar, Stack } from "@mui/material"

const UserAvatar = () => {
  return (
    <Stack direction={"row"} className={getClassNames(classes, "user-avatar-container")} sx={{
      marginY: "30px",
    }}>
      <Stack spacing={"5px"} className={getClassNames(classes, "text-container")}>
        <span className={getClassNames(classes, "role")} >Supervisor</span>
        <span className={getClassNames(classes, "username")}>ชรินดา สนธิดี</span>
      </Stack>
      <Avatar className={getClassNames(classes, "avatar-image")} src={avatar} alt="ชรินดา สนธิดี" sx={{ width: 60, height: 60 }} />
    </Stack>
  )
}

export default UserAvatar