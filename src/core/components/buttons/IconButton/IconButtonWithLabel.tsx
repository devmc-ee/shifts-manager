import IconButton from '@mui/material/IconButton/IconButton';
import classnames from 'classnames';
import { MouseEvent } from 'react';
import { theme } from '../../../../config/theme';
import { COLOR_VARIANTS } from '../../../types/ColorVariants';
import { getPostfixedClassNamesArray } from '../../../utils/addPostfixToClasses';
import './IconButtonWithLabel.css';

interface IconButtonProps {
  icon: JSX.Element;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  label?: string;
  variant?: COLOR_VARIANTS;
  customClasses?: string;
}

export const IconButtonWithLabel = ({ icon, label, variant, customClasses = '', handleClick }: IconButtonProps) => {
  const iconButtonClasses = classnames('icon-button', { [`icon-button--${variant}`]: !!variant }, ...getPostfixedClassNamesArray(customClasses, 'icon-button'));

  const labelClasses = classnames(
    'icon-button-label',
    { [`icon-button-label--${variant}`]: !!variant },
    ...getPostfixedClassNamesArray(customClasses, 'icon-button-label')
  );

  return (
    <>
      <IconButton
        onClick={handleClick}
        className={iconButtonClasses}
        sx={{ color: variant === 'secondary' ? `${theme.palette.secondary.light}` : `${theme.palette.primary.contrastText}` }}
      >
        {icon}
        {label && <span className={labelClasses}>{label}</span>}
      </IconButton>
    </>
  );
};
