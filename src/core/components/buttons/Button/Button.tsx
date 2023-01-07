import './button.css';
import MUButton from '@mui/material/Button';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'secondary';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }: ButtonProps) => {
  return <MUButton {...props}>{label}</MUButton>;
};
