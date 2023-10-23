import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';

export const suggestedConstraints = atom({
  "imports": [],
  "reserved_words": [],
  "functions": [],
  "methods": [],
  "classes": [],
  "variables": [],
});

export const userDefinedConstraints = atom({
  "imports": [],
  "reserved_words": [],
  "functions": [],
  "methods": [],
  "classes": [],
  "variables": [],
});

export const userAtom = atomWithStorage('user', null);

export const sidebarSelectedAtom = atom(0);