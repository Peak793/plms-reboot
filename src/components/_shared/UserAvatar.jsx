import avatarPlaceholder from "@/assets/images/avatarplaceholder.png";
import classes from "@/assets/css/UserAvatar.module.css";
import { getClassNames } from "../../utils";
import { Avatar, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { userAtom } from "@/store/store";

const UserAvatar = () => {
  const [user] = useAtom(userAtom);

  return (
    <Stack direction={"row"} className={getClassNames(classes, "user-avatar-container")} sx={{
      marginY: "30px",
    }}>
      {user ? (
        <Stack spacing={"5px"} height={"100%"} className={getClassNames(classes, "text-container")}>
          <Typography className={getClassNames(classes, "role")} >{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</Typography>
          <Typography className={getClassNames(classes, "username")}>{user.username}</Typography>
        </Stack>
      ) : (
        <Typography variant="body1" className={getClassNames(classes, "placeholder-text")}>
          Guest User
        </Typography>
      )}
      <Avatar className={getClassNames(classes, "avatar-image")} src={user ? `${import.meta.env.VITE_BASE_URL}/${user.avatar}` : avatarPlaceholder} alt={user ? user.name : "Guest User"} sx={{ width: 60, height: 60 }} />
    </Stack>
  );
};

export default UserAvatar;
