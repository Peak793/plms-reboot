import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';

export const defaultCon = {
  "reserved_words": [],
  "functions": [],
  "methods": [],
  "variables": [],
  "imports": [],
  "classes": [],
}

export const suggestedConstraints = atom(defaultCon);

export const userDefinedConstraints = atom(defaultCon);

export const userAtom = atomWithStorage('user', null);

export const sidebarSelectedAtom = atom(0);