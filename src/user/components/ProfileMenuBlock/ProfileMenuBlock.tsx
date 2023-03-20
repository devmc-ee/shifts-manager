import { useNavigate } from 'react-router-dom';
import ProfileIconLarge from '../../../assets/icons/profile-icon-large.svg';
import { PROFILE_MENU_BLOCK, SLIDE_IN_MENU_BLOCK_COMPONENT_NAME } from '../../../assets/menu/slideInMenuData';
import { useAppDispatch, useAppSelector } from '../../../config/redux/hooks';
import { AppState } from '../../../config/redux/store';
import { PublicRoutesEnum } from '../../../config/routes/routes';
import { MenuItemList } from '../../../core/components/Menus/MenuItemList';
import { clearUserData } from '../../redux/userSlice';

export const ProfileMenuBlock = (): JSX.Element => {
  const { userName, userEmail } = useAppSelector(({ user }: AppState) => ({
    userName: user.userFullName,
    userEmail: user.userName,
  }));

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogOut = (): void => {
    localStorage.clear();
    dispatch(clearUserData);
    navigate(PublicRoutesEnum.login);
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
      <div role="button" tabIndex={0} className="menu-list-item ripple" onClick={handleLogOut} onKeyDown={handleLogOut}>
        <span className="menu-list-item-title">Log out</span>
      </div>
    </div>
  );
};
