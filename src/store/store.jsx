import { atom } from 'jotai';

export const keywordConstraintsList = atom(
  {
    "builtin_functions": [],
    "reserved_words": [],
    "other": [],
    "user_defined": []
  }
)

export const userAtom = atom(JSON.parse(localStorage.getItem('user')));