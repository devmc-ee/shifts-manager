import './Header.css';
import { IconButton } from '../IconButton';
import { BurgerMenuIcon } from '../../../assets/icons/BurgerMenuIcon';
import { ProfileIcon } from '../../../assets/icons/ProfileIcon';
import { useState, MouseEvent } from 'react';

interface HeaderProps {
  companyName: string;
}
export const Header = ({ companyName }: HeaderProps) => {
  const [selected, setSelected] = useState('');

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    setSelected(event.currentTarget.id);
  };

  return (
    <div className="header-bar">
      <IconButton id="one" isSelected={selected === 'one'} handleClick={handleButtonClick} icon={<BurgerMenuIcon />} label="" />
      <div className="header-company-name">{companyName}</div>
      <IconButton id="two" isSelected={selected === 'two'} handleClick={handleButtonClick} icon={<ProfileIcon />} label="" />
    </div>
  );
};
