import { useState } from "react";
import logo from "@/assets/images/Logo.png";
import close from "@/assets/images/Close.png";
import chartIcon from "@/assets/images/Chart-Icon.png";
import peopleIcon from "@/assets/images/People-Icon.png";
import newspaperIcon from "@/assets/images/Newspaper-Icon.png";
import bookIcon from "@/assets/images/Book-Icon.png";
import dialogBubble from "@/assets/images/DialogBubble.png";
import slideShow from "@/assets/images/SlideShow-Icon.png";
import classes from "@/assets/css/Sidebar.module.css";
import { getClassNames } from "../utils";
import { NavLink } from "react-router-dom";

const categories = [
  {
    label: "Group Management",
    shortLabel: "Group",
    icon: chartIcon,
    children: [
      { label: "My Groups", icon: slideShow },
      { label: "Available Groups", icon: peopleIcon }
    ],
  },
  {
    label: "Instructions",
    icon: chartIcon,
    children: [
      { label: "Instructions", icon: newspaperIcon, },
      { label: "Examination", icon: bookIcon, },
      { label: "FAQ", icon: dialogBubble, },
    ],
  }
]

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState("My Groups");

  return (
    <nav className={getClassNames(classes, 'sidebar', isExpanded ? 'expanded' : 'collapsed')}>
      <div className={getClassNames(classes, 'logo-container', isExpanded ? 'expanded' : 'collapsed')}>
        <NavLink to="/" >
          <img
            src={logo}
            alt="logo"
            className={getClassNames(classes, 'logo', isExpanded ? 'expanded' : 'collapsed')}
          />
        </NavLink>
        <img
          onClick={() => setIsExpanded((cur) => !cur)}
          className={getClassNames(classes, 'close-button', isExpanded ? 'expanded' : 'collapsed')}
          src={close}
          alt="close"
        />
      </div>

      <div className={getClassNames(classes, "sidebar-item-container")}>
        <NavLink to="#" onClick={() => { setSelected("Dashboard") }} className={getClassNames(classes, "sidebar-item", selected === "Dashboard" && "active")}>
          <img src={chartIcon} alt="dashboard-icon" />
          <span>
            Dashboard
            <div className={getClassNames(classes, "floating-text")}>
              Dashboard
            </div>
          </span>
        </NavLink>
        {categories.map((category, index) => (
          <div key={index}>
            <div className={getClassNames(classes, "category-text")} >{category.label}</div>
            {category.children.map((child, index) => (
              <>
                <NavLink to="#" key={index} onClick={() => { setSelected(child.label) }} className={getClassNames(classes, "sidebar-item", selected === child.label && "active")}>
                  <img src={child.icon} alt={`${child.label}-icon`} />
                  <span>
                    {child.label}
                    <div className={getClassNames(classes, "floating-text")}>
                      {child.label}
                    </div>
                  </span>
                </NavLink>
              </>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
