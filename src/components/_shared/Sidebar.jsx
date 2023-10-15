import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import close from "@/assets/images/close.png";
import chartIcon from "@/assets/images/charticon.png";
import peopleIcon from "@/assets/images/peopleicon.png";
import newspaperIcon from "@/assets/images/newspapericon.png";
import bookIcon from "@/assets/images/bookicon.png";
import dialogBubble from "@/assets/images/dialogbubble.png";
import slideShow from "@/assets/images/slideshowicon.png";
import classes from "@/assets/css/Sidebar.module.css";
import { getClassNames } from "@/utils";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/system";
import { Link } from "@mui/material";
import { useAtomValue } from "jotai";
import { userAtom, sidebarSelectedAtom } from "@/store/store";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const selected = useAtomValue(sidebarSelectedAtom);
  const user = useAtomValue(userAtom);

  const homepage = {
    'supervisor': '/ins',
    'ta': '/ta',
    'student': '/stu',
  }

  const categories = [
    {
      id: 1,
      label: "Group Management",
      shortLabel: "Group",
      icon: chartIcon,
      children: [
        { id: 1.1, label: "My Groups", icon: slideShow, href: homepage[user.role] },
        user.role === 'supervisor' && { id: 1.2, label: "Available Groups", icon: peopleIcon, href: '/ins/available-groups' },
      ],
    },
    {
      id: 2,
      label: "Instructions",
      icon: chartIcon,
      children: [
        { id: 2.1, label: "Instructions", icon: newspaperIcon, href: "/instruction" },
        { id: 2.2, label: "Examination", icon: bookIcon, href: "/examination" },
        { id: 2.3, label: "FAQ", icon: dialogBubble, href: "/faq" },
      ],
    }
  ]

  return (
    <nav className={getClassNames(classes, 'sidebar', isExpanded ? 'expanded' : 'collapsed')}>
      <Stack direction={'row'} className={getClassNames(classes, 'logo-container', isExpanded ? 'expanded' : 'collapsed')}>
        <Link component={NavLink} color={'inherit'} underline="none" to="/#" >
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
        {categories.map((category) => (
          <div key={category.id}>
            <div className={getClassNames(classes, "category-text")}>{category.label}</div>
            {category.children.map((child) => (
              <React.Fragment key={child.id}>
                <Link
                  color={'inherit'}
                  underline="none"
                  component={NavLink}
                  to={child.href}
                  className={getClassNames(classes, "sidebar-item", selected === child.id && "active")}
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
