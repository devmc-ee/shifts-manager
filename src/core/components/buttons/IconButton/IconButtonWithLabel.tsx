import IconButton from '@mui/material/IconButton/IconButton';
import classnames from 'classnames';
import { MouseEvent } from 'react';
import { COLOR_VARIANTS } from '../../../types/ColorVariants';
import { getPostfixedClassNamesArray } from '../../../utils/addPostfixToClasses';

interface IconButtonProps {
  icon: JSX.Element;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  id?: string;
  label?: string;
  variant?: COLOR_VARIANTS;
  customClasses?: string;
}

export const IconButtonWithLabel = ({ icon, label, variant = COLOR_VARIANTS.PRIMARY, customClasses = '', handleClick }: IconButtonProps) => {
  const iconButtonClasses = classnames('icon-button', { [`icon-button--${variant}`]: !!variant }, ...getPostfixedClassNamesArray(customClasses, 'icon-button'));

  const labelClasses = classnames(
    'icon-button-label',
    { [`icon-button-label--${variant}`]: !!variant },
    ...getPostfixedClassNamesArray(customClasses, 'icon-button-label')
  );

  return (
    <>
      <IconButton onClick={handleClick} className={iconButtonClasses}>
        {icon}
        {label && <span className={labelClasses}>{label}</span>}
      </IconButton>
    </>
  );
};
