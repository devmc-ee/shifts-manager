import './HeaderBar.css';
import { IconButton } from '../IconButton';
import { BurgerMenuIcon } from '../../../assets/icons/BurgerMenuIcon';
import { ProfileIcon } from '../../../assets/icons/ProfileIcon';
import { useAppDispatch } from '../../../config/redux/hooks';
import { callHeaderBlockButtonClicked } from '../../redux/coreSlice';

interface HeaderBarProps {
  title: string;
}

export enum HEADER_BUTTON_ID {
  burgerMenuButton = 'burger-menu-button',
  profileMenuButton = 'profile-menu-button',
}

export const HeaderBar = ({ title }: HeaderBarProps) => {
  const dispatch = useAppDispatch();

  const handleButtonClick = (buttonID: HEADER_BUTTON_ID) => () => {
    dispatch(callHeaderBlockButtonClicked(buttonID));
  };

  return (
    <div className="root-header-menu">
      <IconButton handleClick={handleButtonClick(HEADER_BUTTON_ID.burgerMenuButton)} icon={<BurgerMenuIcon />} />
      <div className="header-title">{title}</div>
      <IconButton handleClick={handleButtonClick(HEADER_BUTTON_ID.profileMenuButton)} icon={<ProfileIcon />} />
    </div>
  );
};
