import IconButton from '@mui/material/IconButton';
import { MouseEvent } from 'react';
import './IconButton.css';

enum styleVariant {
  primary = 'primary',
  secondary = 'secondary',
}
interface CustomIconButtonProps {
  icon: JSX.Element;
  label?: string;
  variant?: styleVariant.primary | styleVariant.secondary;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const CustomIconButton = ({ icon, label, variant = styleVariant.primary, handleClick }: CustomIconButtonProps) => {
  return (
    <>
      <IconButton onClick={handleClick} className={(variant && `icon-button icon-button--${variant}`) || `icon-button`}>
        {icon}
      </IconButton>
      {label && <span className="icon-button-label">{label}</span>}
    </>
  );
};
