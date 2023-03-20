import { ProtectedRoutesEnum } from '../../config/routes/routes';
import { MainMenuBlock } from '../../core/components/Menus/MainMenuBlock';
import { ProfileMenuBlock } from '../../user/components/ProfileMenuBlock';

export interface IMenuItemListItem {
  id: string;
  url: string;
}

export const MAIN_MENU_BLOCK: IMenuItemListItem[] = [
  {
    id: 'business',
    url: ProtectedRoutesEnum.business,
  },
  {
    id: 'settings',
    url: ProtectedRoutesEnum.settings,
  },
];

export const PROFILE_MENU_BLOCK: IMenuItemListItem[] = [
  {
    id: 'contacts',
    url: ProtectedRoutesEnum.contacts,
  },
];

type SlideInMenuBlocksComponentMap = {
  [key in SLIDE_IN_MENU_BLOCK_COMPONENT_NAME]: () => JSX.Element;
};

export const enum SLIDE_IN_MENU_BLOCK_COMPONENT_NAME {
  LEFT_MENU = 'mainMenu',
  RIGHT_MENU = 'profileMenu',
}

export const SLIDE_IN_MENU_BLOCKS_COMPONENT_MAP: SlideInMenuBlocksComponentMap = {
  [SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.LEFT_MENU]: MainMenuBlock,
  [SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.RIGHT_MENU]: ProfileMenuBlock,
};

export const enum SLIDE_FROM_SIDE {
  LEFT = 'left',
  RIGHT = 'right',
}
