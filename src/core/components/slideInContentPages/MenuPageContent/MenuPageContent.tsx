import { SLIDE_IN_MENU_LEFT } from '../../../../config/slideInContentPageConfig';
import { MenuItemList } from '../MenuItemList';
import { SLIDE_FROM_SIDE } from '../../SlideInProvider/SlideInProvider';

export const MenuPageContent = (): JSX.Element => {
  return (
    <div className="slide-in-menu-content">
      <MenuItemList itemList={SLIDE_IN_MENU_LEFT} direction={SLIDE_FROM_SIDE.LEFT} />
    </div>
  );
};
