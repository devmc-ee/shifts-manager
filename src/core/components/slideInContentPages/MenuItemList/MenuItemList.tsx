import { Link } from 'react-router-dom';
import { t } from 'i18next';
import { SlideInBarMenuItemsType } from '../../../../config/slideInContentPageConfig';

interface MenuItemListProps {
  itemList: SlideInBarMenuItemsType[];
  direction: string;
}

export const MenuItemList = ({ itemList, direction }: MenuItemListProps): JSX.Element => {
  return (
    <ul className="menu-page-content-ul">
      {itemList.map((item: SlideInBarMenuItemsType) => (
        <Link to={item.url} key={item.id}>
          <div role="button" className="slide-in-menu-item ripple">
            <span className="slide-in-menu-item-title">{`${t(`core.${direction}SlideInMenu.${item.id}`)}`}</span>
          </div>
        </Link>
      ))}
    </ul>
  );
};
