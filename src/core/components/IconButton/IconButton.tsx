import IconButton from '@mui/material/IconButton';
import { MouseEvent } from 'react';
import './IconButton.css';

interface CustomIconButtonProps {
  icon: JSX.Element;
  label?: string;
  variant?: 'primary' | 'secondary';
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const CustomIconButton = ({ icon, label, variant = 'primary', handleClick }: CustomIconButtonProps) => {
  const validVariants = ['primary', 'secondary'];
  const defaultVariant = 'primary';

  variant = validVariants.includes(variant) ? variant : defaultVariant;

  return (
    <>
      <IconButton onClick={handleClick} className={`icon-button icon-button--${variant}`}>
        {icon}
      </IconButton>
      {label && <span className="icon-button-label">{label}</span>}
    </>
  );
};
