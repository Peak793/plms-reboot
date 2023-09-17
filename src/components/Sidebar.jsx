import React, { useState } from "react";
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
import { Stack } from "@mui/system";
import { Link } from "@mui/material";

const categories = [
  {
    id: 1,
    label: "Group Management",
    shortLabel: "Group",
    icon: chartIcon,
    children: [
      { id: 1.1, label: "My Groups", icon: slideShow },
      { id: 1.2, label: "Available Groups", icon: peopleIcon }
    ],
  },
  {
    id: 2,
    label: "Instructions",
    icon: chartIcon,
    children: [
      { id: 2.1, label: "Instructions", icon: newspaperIcon, },
      { id: 2.2, label: "Examination", icon: bookIcon, },
      { id: 2.3, label: "FAQ", icon: dialogBubble, },
    ],
  }
]

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState("My Groups");

  return (
    <nav className={getClassNames(classes, 'sidebar', isExpanded ? 'expanded' : 'collapsed')}>
      <Stack direction={'row'} className={getClassNames(classes, 'logo-container', isExpanded ? 'expanded' : 'collapsed')}>
        <Link component={NavLink} color={'inherit'} underline="none" to="/" >
          <img
            src={logo}
            alt="logo"
            className={getClassNames(classes, 'logo', isExpanded ? 'expanded' : 'collapsed')}
          />
        </Link>
        <img
          onClick={() => setIsExpanded((cur) => !cur)}
          className={getClassNames(classes, 'close-button', isExpanded ? 'expanded' : 'collapsed')}
          src={close}
          alt="close"
        />
      </Stack>

      <Stack spacing={1} className={getClassNames(classes, "sidebar-item-container")}>
        {/* <Link color={'inherit'} underline="none" component={NavLink} to="#" onClick={() => { setSelected("Dashboard") }} className={getClassNames(classes, "sidebar-item", selected === "Dashboard" && "active")}>
          <img src={chartIcon} alt="dashboard-icon" />
          <span>
            Dashboard
            <div className={getClassNames(classes, "floating-text")}>
              Dashboard
            </div>
          </span>
        </Link> */}
        {categories.map((category) => (
          <div key={category.id}>  {/* Here, added 'key' attribute */}
            <div className={getClassNames(classes, "category-text")}>{category.label}</div>
            {category.children.map((child) => (
              <React.Fragment key={child.id}>  {/* Here, added 'key' attribute to the fragment */}
                <Link
                  color={'inherit'}
                  underline="none"
                  component={NavLink}
                  to="#"
                  onClick={() => { setSelected(child.label) }}
                  className={getClassNames(classes, "sidebar-item", selected === child.label && "active")}
                >
                  <img src={child.icon} alt={`${child.label}-icon`} />
                  <span>
                    {child.label}
                    <div className={getClassNames(classes, "floating-text")}>
                      {child.label}
                    </div>
                  </span>
                </Link>
              </React.Fragment>
            ))}
          </div>
        ))}
      </Stack>
    </nav>
  );
};

export default Sidebar;
