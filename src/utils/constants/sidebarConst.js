import { USER_ROLES } from "@/utils/constants/common";
import { ABS_INS_URL, STU_URL, COMMON_URL } from "@/utils/constants/routeConst";
import chartIcon from "@/assets/images/charticon.png";
import peopleIcon from "@/assets/images/peopleicon.png";
import newspaperIcon from "@/assets/images/newspapericon.png";
import bookIcon from "@/assets/images/bookicon.png";
import dialogBubble from "@/assets/images/dialogbubble.png";
import slideShow from "@/assets/images/slideshowicon.png";


const base_items = [
  {
    label: "Instructions",
    children: [
      { id: "instruction", label: "Instructions", icon: newspaperIcon, href: COMMON_URL.STATIC.INSTRUCTION },
      { id: "examination", label: "Examination", icon: bookIcon, href: COMMON_URL.STATIC.EXAMINATION },
      { id: "faq", label: "FAQ", icon: dialogBubble, href: COMMON_URL.STATIC.FAQ },
    ],
  },
]

export const items = {
  [USER_ROLES.SUPERVISOR]: [
    {
      label: "Group Management",
      children: [
        { id: "my_groups", label: "My Groups", icon: slideShow, href: ABS_INS_URL.STATIC.MY_GROUPS },
        { id: "available_groups", label: "Available Groups", icon: peopleIcon, href: ABS_INS_URL.STATIC.AVAILABLE_GROUPS },
      ],
    },
    ...base_items,
  ],
  [USER_ROLES.STUDENT]: [
    {
      label: "General Management",
      children: [
        { id: "home", label: "Home", icon: slideShow, href: STU_URL.STATIC.HOME },
        { id: "exercise", label: "Exercise", icon: peopleIcon, href: STU_URL.DYNAMIC.EXERCISE() },
      ],
    },
    ...base_items
  ]
}

export const getSidebarItemsByRole = (role) => items[role]