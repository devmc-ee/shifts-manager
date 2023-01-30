import './HeaderBarMenu.css';
import { IconButton } from '../IconButton';
import { BurgerMenuIcon } from '../../../assets/icons/BurgerMenuIcon';
import { ProfileIcon } from '../../../assets/icons/ProfileIcon';
import { useAppDispatch } from '../../../config/redux/hooks';
import { callHeaderBlockButtonClicked } from '../../redux/coreSlice';
import { useState } from 'react';

interface HeaderBarMenuProps {
  companyName: string;
}

export enum HEADER_BUTTON_ID {
  burgerMenuButton = 'burger-menu-button',
  profileMenuButton = 'profile-menu-button',
}

export const HeaderBarMenu = ({ companyName }: HeaderBarMenuProps) => {
  const dispatch = useAppDispatch();

  const [buttonID, setButtonID] = useState('');

  const handleButtonClick = (buttonID: HEADER_BUTTON_ID) => () => {
    dispatch(callHeaderBlockButtonClicked(buttonID));
    setButtonID(callHeaderBlockButtonClicked(buttonID).payload);
  };

  return (
    <div className="root-header-menu">
      <IconButton
        handleClick={handleButtonClick(HEADER_BUTTON_ID.burgerMenuButton)}
        variant={HEADER_BUTTON_ID.burgerMenuButton === buttonID ? 'secondary' : 'primary'}
        icon={<BurgerMenuIcon />}
      />
      <div className="header-company-name">{companyName}</div>
      <IconButton
        handleClick={handleButtonClick(HEADER_BUTTON_ID.profileMenuButton)}
        variant={HEADER_BUTTON_ID.profileMenuButton === buttonID ? 'secondary' : 'primary'}
        icon={<ProfileIcon />}
      />
    </div>
  );
};
