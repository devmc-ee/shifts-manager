import './button.css';
import Button from '@mui/material/Button';
import { ReactNode, MouseEvent } from 'react';
import { theme } from '../../../../config/theme';

interface ButtonProps {
  color?: 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  id: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
  active: boolean;
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const CustomButton = ({ label, icon, handleClick, active, ...props }: ButtonProps) => {
  return (
    <Button onClick={handleClick} sx={{ color: active ? theme.palette.secondary.light : theme.palette.primary.contrastText }} startIcon={icon} {...props}>
      {label}
    </Button>
  );
};
