import { atom } from 'recoil';

export const showBottomTabBarAtom = atom<boolean>({
  key: 'showBottomTabAtom',
  default: true,
});
