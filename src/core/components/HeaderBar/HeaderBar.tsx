import './HeaderBar.css';
import BurgerMenuIcon from '../../../assets/icons/burger-menu-icon.svg';
import ProfileIcon from '../../../assets/icons/profile-icon.svg';
import { useAppDispatch } from '../../../config/redux/hooks';
import { callHeaderBlockButtonClicked } from '../../redux/coreSlice';
import { COLOR_VARIANTS } from '../../types/ColorVariants';
import { IconButtonWithLabel } from '../buttons/IconButton';

interface HeaderBarProps {
  title: string;
}

export const enum HEADER_BUTTON_ID {
  burgerMenuButton = 'burger-menu-button',
  profileMenuButton = 'profile-menu-button',
}

export const HeaderBar = ({ title }: HeaderBarProps) => {
  const dispatch = useAppDispatch();

  const handleButtonClick = (buttonID: HEADER_BUTTON_ID) => () => {
    dispatch(callHeaderBlockButtonClicked(buttonID));
  };

  return (
    <div className="header-bar">
      <IconButtonWithLabel
        handleClick={handleButtonClick(HEADER_BUTTON_ID.burgerMenuButton)}
        variant={COLOR_VARIANTS.PRIMARY_CONTRAST}
        icon={<BurgerMenuIcon />}
      />
      <div className="header-title">{title}</div>
      <IconButtonWithLabel
        handleClick={handleButtonClick(HEADER_BUTTON_ID.profileMenuButton)}
        variant={COLOR_VARIANTS.PRIMARY_CONTRAST}
        icon={<ProfileIcon />}
      />
    </div>
  );
};
