import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IMenuItemListItem } from '../../../../assets/menu/slideInMenuData';
import { useAppDispatch } from '../../../../config/redux/hooks';
import { closeSlideInBar } from '../../../redux/coreSlice';

interface MenuItemListProps {
  itemList: IMenuItemListItem[];
  componentName: string;
}

//TODO Refactor MenuItemList title & translation;

export const MenuItemList = ({ itemList, componentName }: MenuItemListProps): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleCloseSlideInBar = () => {
    dispatch(closeSlideInBar());
  };

  return (
    <ul className="menu-item-list">
      {itemList.map((item: IMenuItemListItem) => (
        <Link to={item.url} key={item.id}>
          <div role="button" tabIndex={0} className="menu-list-item ripple" onClick={handleCloseSlideInBar} onKeyDown={handleCloseSlideInBar}>
            <span className="menu-list-item-title">{`${t(`core.slideInBar.${componentName}.${item.id}`)}`}</span>
          </div>
        </Link>
      ))}
    </ul>
  );
};
