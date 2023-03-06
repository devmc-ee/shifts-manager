import { Link } from 'react-router-dom';
import { NAV_MENU, NavMenuItemType } from '../../../config/menuConfig';
import { useTranslation } from 'react-i18next';
import HomeIcon from '../../../assets/icons/NavIconSet';
import { IconButtonWithLabel } from '../buttons/IconButton';
import { COLOR_VARIANTS } from '../../types/ColorVariants';

interface NavMenuProps {
  activeRoute: string;
  icons: { [name: string]: () => JSX.Element };
  onClick?: (url: string) => void;
}

export const NavMenu = ({ activeRoute, icons, onClick }: NavMenuProps): JSX.Element => {
  const { t } = useTranslation();

  const getIcon = (iconName: string): JSX.Element => {
    const Icon = icons[iconName];

    return !!Icon ? <Icon /> : (HomeIcon as unknown as JSX.Element);
  };

  const handleClick = (url: string) => () => {
    onClick && onClick(url);
  };

  return (
    <nav className="nav-menu">
      <div className="nav-menu-buttons-container">
        {NAV_MENU.map((item: NavMenuItemType) => (
          <div className="nav-menu-button" key={item.id}>
            <Link to={item.url}>
              <IconButtonWithLabel
                handleClick={handleClick(item.url)}
                id={item.id}
                customClasses={COLOR_VARIANTS.PRIMARY_CONTRAST}
                icon={getIcon(item.icon)}
                label={`${t(`core.navMenu.${item.id}`)}`}
                variant={activeRoute === item.url ? COLOR_VARIANTS.SECONDARY : COLOR_VARIANTS.PRIMARY_CONTRAST}
              />
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};
