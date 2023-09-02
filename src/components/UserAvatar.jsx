import avatar from "@/assets/images/Avatar.png"
import classes from "@/assets/css/UserAvatar.module.css"
import { getClassNames } from "../utils"

const UserAvatar = () => {
  return (
    <div className={getClassNames(classes, "user-avatar-container")}>
      <div className={getClassNames(classes, "text-container")}>
        <span className={getClassNames(classes, "role")} >Supervisor</span> <br />
        <span className={getClassNames(classes, "username")}>ชรินดา สนธิดี</span>
      </div>
      <img className={getClassNames(classes, "avatar-image")} src={avatar} alt="avatar" />
    </div>
  )
}

export default UserAvatar