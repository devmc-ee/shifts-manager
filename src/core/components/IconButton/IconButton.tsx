import IconButton from '@mui/material/IconButton/IconButton';
import classnames from 'classnames';
import { MouseEvent } from 'react';
import { COLOR_VARIANTS } from '../../types/ColorVariants';
import './IconButton.css';

interface IconButtonProps {
  icon: JSX.Element;
  label?: string;
  variant?: COLOR_VARIANTS.primary | COLOR_VARIANTS.secondary | undefined;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  classNames?: string | string[] | undefined;
}

export const IconButtonWithLabel = ({ icon, label, variant, handleClick }: IconButtonProps) => {
  return (
    <>
      <IconButton onClick={handleClick} className={classnames('icon-button', { [`icon-button--${variant}`]: !!variant })}>
        {icon}
      </IconButton>
      {label && <span className="icon-button-label">{label}</span>}
    </>
  );
};
