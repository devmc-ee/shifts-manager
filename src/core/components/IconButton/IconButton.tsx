import IconButton from '@mui/material/IconButton';
import { MouseEvent } from 'react';
import './IconButton.css';

interface IconButtonProps {
  icon: JSX.Element;
  label: string;
  isSelected: boolean;
  id: string;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const CustomIconButton = ({ icon, label, isSelected, id, handleClick }: IconButtonProps) => {
  return (
    <>
      <IconButton id={id} onClick={handleClick} className={`icon-button--${isSelected ? 'selected' : 'unselected'}`}>
        {icon}
      </IconButton>
      <span className="icon-button-label">{label}</span>
    </>
  );
};
