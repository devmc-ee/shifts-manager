import ProfileIconLarge from '../../../assets/icons/profile-icon-large.svg';
import { PROFILE_MENU_BLOCK, SLIDE_IN_MENU_BLOCK_COMPONENT_NAME } from '../../../assets/menu/slideInMenuData';
import { MenuItemList } from '../../../core/components/Menus/MenuItemList';

export const ProfileMenuBlock = (): JSX.Element => {
  return (
    <div className="profile-menu-block">
      <div className="profile-user-pic">
        <ProfileIconLarge />
        <div className="profile-blank-spot" />
      </div>
      <MenuItemList itemList={PROFILE_MENU_BLOCK} componentName={SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.RIGHT_MENU} />
    </div>
  );
};
