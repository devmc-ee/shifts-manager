import LoadingButton from '@mui/lab/LoadingButton';

interface ButtonProps {
  loadingPosition?: 'start' | 'end';
  disabled?: boolean;
  loading?: boolean;
  label: string;
  onClick?: () => void;
}

export const LoginButton = ({ disabled = true, loading, ...props }: ButtonProps) => {
  return (
    <LoadingButton loadingPosition="end" loading={loading} variant="contained" disabled={disabled} fullWidth={true} endIcon={<></>} {...props}>
      {loading ? 'Loading...' : 'Login'}
    </LoadingButton>
  );
};
