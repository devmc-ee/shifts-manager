import LoadingButton from '@mui/material/Button';

interface ButtonProps {
    loadingPosition?: 'start' | 'end';
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    label: string;
    onClick?: () => void;
}

export const LoginButton = ({ disabled = true, ...props }: ButtonProps) => {
    return (
        <LoadingButton variant="contained" disabled={disabled} fullWidth {...props}>
            Login
        </LoadingButton>
    );
};
