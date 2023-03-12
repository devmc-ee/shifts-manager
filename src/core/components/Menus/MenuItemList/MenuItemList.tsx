import { Link } from 'react-router-dom';
import { t } from 'i18next';
import { IMenuItemListItem } from '../../../../assets/menu/slideInMenuData';

interface MenuItemListProps {
  itemList: IMenuItemListItem[];
  componentName: string;
}

//TODO Refactor MenuItemList title & translation;

export const MenuItemList = ({ itemList, componentName }: MenuItemListProps): JSX.Element => {
  return (
    <ul className="menu-item-list">
      {itemList.map((item: IMenuItemListItem) => (
        <Link to={item.url} key={item.id}>
          <div role="button" className="menu-list-item ripple">
            <span className="menu-list-item-title">{`${t(`core.slideInBar.${componentName}.${item.id}`)}`}</span>
          </div>
        </Link>
      ))}
    </ul>
  );
};
