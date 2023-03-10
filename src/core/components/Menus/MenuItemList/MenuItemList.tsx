import { Link } from 'react-router-dom';
import { t } from 'i18next';
import { MenuBlockType } from '../../../../config/slideInMenuConfig';

interface MenuItemListProps {
  itemList: MenuBlockType[];
  componentName: string;
}

export const MenuItemList = ({ itemList, componentName }: MenuItemListProps): JSX.Element => {
  return (
    <ul className="menu-item-list">
      {itemList.map((item: MenuBlockType) => (
        <Link to={item.url} key={item.id}>
          <div role="button" className="menu-list-item ripple">
            <span className="menu-list-item-title">{`${t(`core.slideInBar.${componentName}.${item.id}`)}`}</span>
          </div>
        </Link>
      ))}
    </ul>
  );
};
