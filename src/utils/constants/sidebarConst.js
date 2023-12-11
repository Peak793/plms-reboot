import { USER_ROLES } from "@/utils/constants/common";
import { ABS_INS_URL, ABS_STU_URL, COMMON_URL } from "@/utils/constants/routeConst";
import peopleIcon from "@/assets/images/peopleicon.png";
import newspaperIcon from "@/assets/images/newspapericon.png";
import bookIcon from "@/assets/images/bookicon.png";
import dialogBubble from "@/assets/images/dialogbubble.png";
import slideShow from "@/assets/images/slideshowicon.png";
import homeIcon from "@/assets/images/homeicon.png";
import codingIcon from "@/assets/images/codingicon.png";

const base_items = [
  {
    id: "instructions",
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
      id: "group_management",
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
      id: "general_management",
      label: "General Management",
      children: [
        { id: "home", label: "Home", icon: homeIcon, href: ABS_STU_URL.STATIC.HOME },
        { id: "exercise", label: "Exercise", icon: codingIcon, href: ABS_STU_URL.STATIC.EXERCISE_LIST },
      ],
    },
    ...base_items
  ]
}

export const getSidebarItemsByRole = (role) => items[role]