import { useState } from "react";
import logo from "@/assets/images/Logo.png";
import close from "@/assets/images/Close.png";
import classes from "@/assets/css/Sidebar.module.css";
import { getClassNames } from "../utils";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className={getClassNames(classes, 'sidebar', isExpanded ? 'expanded' : 'collapsed')}>
      <div className={getClassNames(classes, 'logo-container', isExpanded ? 'expanded' : 'collapsed')}>
        <img
          src={logo}
          alt="logo"
          className={getClassNames(classes, 'logo', isExpanded ? 'expanded' : 'collapsed')}
        />
        <img
          onClick={() => setIsExpanded((cur) => !cur)}
          className={getClassNames(classes, 'close-button', isExpanded ? 'expanded' : 'collapsed')}
          src={close}
          alt="close"
        />
      </div>
    </nav>
  );
};

export default Sidebar;
