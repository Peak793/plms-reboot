import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';

export const keywordConstraintsList = atom({
  "builtin_functions": [],
  "reserved_words": [],
  "other": [],
  "user_defined": []
});

export const userAtom = atomWithStorage('user', null);