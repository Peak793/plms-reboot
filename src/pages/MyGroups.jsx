import UserAvatar from "@/components/UserAvatar"
import classes from "@/assets/css/MyGroups.module.css"
import { NavLink } from "react-router-dom";
import { getClassNames } from "@/utils"

const MyGroups = () => {
  return (
    <div className={getClassNames(classes, "mygroups-page")} >
      <UserAvatar />
      <section className={`default-content-container`} >
        <div className="bread-crumbs" >
          <NavLink to="" className="breadcrumb-item">
            My Groups
          </NavLink>
        </div>
      </section>
    </div>
  )
}

export default MyGroups