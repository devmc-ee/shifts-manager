import { SLIDE_IN_MENU_RIGHT } from '../../../../config/slideInContentPageConfig';
import { ProfileIconLarge } from '../../../../assets/icons';
import { MenuItemList } from '../MenuItemList';
import { SLIDE_FROM_SIDE } from '../../SlideInProvider/SlideInProvider';
import './ProfilePageContent.css';

export const ProfilePageContent = (): JSX.Element => {
  return (
    <div className="slide-in-profile-content">
      <div className="profile-user-pic">
        <ProfileIconLarge />
        <div className="blank-spot" />
      </div>
      <MenuItemList itemList={SLIDE_IN_MENU_RIGHT} direction={SLIDE_FROM_SIDE.RIGHT} />
    </div>
  );
};
