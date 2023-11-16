import { USER_ROLES } from "@/utils/constants/common"

// Prefix for URLs based on user roles
export const PREFIX = {
  [USER_ROLES.SUPERVISOR]: "/ins",
  [USER_ROLES.STUDENT]: "/stu",
}

// URLs for Supervisor (INS) role
export const ABS_INS_URL = {
  "STATIC": {
    "MY_GROUPS": `${PREFIX[USER_ROLES.SUPERVISOR]}`,
    "AVAILABLE_GROUPS": `${PREFIX[USER_ROLES.SUPERVISOR]}/available-groups`,
  },
  "DYNAMIC": {
    "GROUP": (groupId = ":groupId") =>
      `${PREFIX[USER_ROLES.SUPERVISOR]}/group/${groupId}`,
    "CHAPTER": (groupId = ":groupId", chapterId = ":chapterId") =>
      `${PREFIX[USER_ROLES.SUPERVISOR]}/group/${groupId}/chapter/${chapterId}`,
    "ADD_EXERCISE": (groupId = ":groupId", chapterId = ":chapterId", level = ":level") =>
      `${PREFIX[USER_ROLES.SUPERVISOR]}/group/${groupId}/chapter/${chapterId}/add-exercise/level/${level}/add-exercise`,
    "EDIT_EXERCISE": (groupId = ":groupId", chapterId = ":chapterId", level = ":level", exerciseId = ":exerciseId") =>
      `${PREFIX[USER_ROLES.SUPERVISOR]}/group/${groupId}/chapter/${chapterId}/level/${level}/edit_exercise/exercise/${exerciseId}`,
    "STUDENT_LIST": (groupId = ":groupId") =>
      `${PREFIX[USER_ROLES.SUPERVISOR]}/group/${groupId}/stu-list`,
    "ADD_STUDENT": (groupId = ":groupId") =>
      `${PREFIX[USER_ROLES.SUPERVISOR]}/group/${groupId}/add-stu`,
    "STUDENT_INDIVIDUAL": (groupId = ":groupId", studentId = ":studentId") =>
      `${PREFIX[USER_ROLES.SUPERVISOR]}/group/${groupId}/score/stu/${studentId}`,
    "STUDENT_SUBMIT_HISTORY": (groupId = ":groupId", studentId = ":studentId", chapterId = ":chapterId", exerciseId = ":exerciseId") =>
      `${PREFIX[USER_ROLES.SUPERVISOR]}/group/${groupId}/sub-his/stu/${studentId}/chapter/${chapterId}/exercise/${exerciseId}`,
  }
}

// URLs for Supervisor (INS) role
export const REL_INS_URL = {
  "STATIC": {
    "MY_GROUPS": ``,
    "AVAILABLE_GROUPS": `available-groups`,
  },
  "DYNAMIC": {
    "GROUP": (groupId = ":groupId") =>
      `group/${groupId}`,
    "CHAPTER": (groupId = ":groupId", chapterId = ":chapterId") =>
      `group/${groupId}/chapter/${chapterId}`,
    "ADD_EXERCISE": (groupId = ":groupId", chapterId = ":chapterId", level = ":level") =>
      `group/${groupId}/chapter/${chapterId}/add-exercise/level/${level}/add-exercise`,
    "EDIT_EXERCISE": (groupId = ":groupId", chapterId = ":chapterId", level = ":level", exerciseId = ":exerciseId") =>
      `group/${groupId}/chapter/${chapterId}/level/${level}/edit_exercise/exercise/${exerciseId}`,
    "STUDENT_LIST": (groupId = ":groupId") =>
      `group/${groupId}/stu-list`,
    "ADD_STUDENT": (groupId = ":groupId") =>
      `group/${groupId}/add-stu`,
    "STUDENT_INDIVIDUAL": (groupId = ":groupId", studentId = ":studentId") =>
      `group/${groupId}/score/stu/${studentId}`,
    "STUDENT_SUBMIT_HISTORY": (groupId = ":groupId", studentId = ":studentId", chapterId = ":chapterId", exerciseId = ":exerciseId") =>
      `group/${groupId}/sub-his/stu/${studentId}/chapter/${chapterId}/exercise/${exerciseId}`,
  }
}

// URLs for Student (STU) role
export const STU_URL = {
  "STATIC": {
    "HOME": `${PREFIX[USER_ROLES.STUDENT]}`,
  },
  "DYNAMIC": {
    "EXERCISE": () =>
      `${PREFIX[USER_ROLES.STUDENT]}/exercise`,
  }
}

export const REL_STU_URL = {
  "STATIC": {
    "HOME": ``,
  },
  "DYNAMIC": {
    "EXERCISE": () =>
      `exercise`,
  }
}

// Common URLs
export const COMMON_URL = {
  STATIC: {
    "SIGNIN": "/signin",
    "INSTRUCTION": "/instruction",
    "EXAMINATION": "/examination",
    "FAQ": "/faq",
  },
  DYNAMIC: {
    "EDIT_PROFILE": (userId = ":userId") =>
      `/edit-profile/${userId}`,
  }
}