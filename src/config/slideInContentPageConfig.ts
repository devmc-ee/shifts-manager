import { ProtectedRoutesEnum } from './routes/routes';

export type SlideInBarMenuItemsType = {
  id: string;
  url: string;
};

export const SLIDE_IN_MENU_LEFT: SlideInBarMenuItemsType[] = [
  {
    id: 'business',
    url: ProtectedRoutesEnum.business,
  },
  {
    id: 'settings',
    url: ProtectedRoutesEnum.settings,
  },
];

export const SLIDE_IN_MENU_RIGHT: SlideInBarMenuItemsType[] = [
  {
    id: 'position',
    url: ProtectedRoutesEnum.position,
  },
  {
    id: 'contacts',
    url: ProtectedRoutesEnum.contacts,
  },
];
