import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';

export const suggestedConstraints = atom({
  "reserved_words": [],
  "functions": [],
  "methods": [],
  "variables": [],
  "imports": [],
  "classes": [],
});

export const userDefinedConstraints = atom({
  "reserved_words": [],
  "functions": [],
  "methods": [],
  "variables": [],
  "imports": [],
  "classes": [],
});

export const userAtom = atomWithStorage('user', null);

export const sidebarSelectedAtom = atom(0);