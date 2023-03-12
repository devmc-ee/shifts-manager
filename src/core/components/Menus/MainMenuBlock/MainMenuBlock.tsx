import { MAIN_MENU_BLOCK, SLIDE_IN_MENU_BLOCK_COMPONENT_NAME } from '../../../../assets/menu/slideInMenuData';
import { MenuItemList } from '../MenuItemList';

export const MainMenuBlock = (): JSX.Element => {
  return (
    <div className="main-menu-block">
      <MenuItemList itemList={MAIN_MENU_BLOCK} componentName={SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.LEFT_MENU} />
    </div>
  );
};
