import { useTranslation } from 'react-i18next';
import ProfileIconLarge from '../../../assets/icons/profile-icon-large.svg';
import { PROFILE_MENU_BLOCK, SLIDE_IN_MENU_BLOCK_COMPONENT_NAME } from '../../../assets/menu/slideInMenuData';
import { useAppDispatch, useAppSelector } from '../../../config/redux/hooks';
import { AppState } from '../../../config/redux/store';
import { MenuItemList } from '../../../core/components/Menus/MenuItemList';
import { closeSlideInBar } from '../../../core/redux/coreSlice';
import { useLogoutMutation } from '../../api/auth/login';

export const ProfileMenuBlock = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [logout] = useLogoutMutation();

  const { userName, userEmail } = useAppSelector(({ user }: AppState) => ({
    userName: user.userFullName,
    userEmail: user.userName,
  }));

  const handleLogOut = () => {
    dispatch(closeSlideInBar());
    logout('api');
  };

  return (
    <div className="profile-menu-block">
      <div className="profile-user-data">
        <ProfileIconLarge />
        <div className="profile-personal-info">
          <span className="profile-personal-info__name">{userName}</span>
          <span className="profile-personal-info__email">{userEmail}</span>
          <span className="profile-personal-info__position">Cook</span>
        </div>
      </div>
      <MenuItemList itemList={PROFILE_MENU_BLOCK} componentName={SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.RIGHT_MENU} />
      <div role="button" tabIndex={-1} className="menu-list-item ripple" onClick={handleLogOut} onKeyDown={handleLogOut}>
        <span className="menu-list-item-title">{t(`core.slideInBar.profileMenu.logout`)}</span>
      </div>
    </div>
  );
};
