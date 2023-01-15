import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'react-i18next';

interface ButtonProps {
  loadingPosition?: 'start' | 'end';
  disabled?: boolean;
  loading?: boolean;
  label: string;
  onClick?: () => void;
}

export const LoginButton = ({ disabled = true, loading, ...props }: ButtonProps) => {
  const { t } = useTranslation();

  return (
    <LoadingButton loadingPosition="end" loading={loading} variant="contained" disabled={disabled} fullWidth={true} endIcon={<></>} {...props}>
      {t(`loginForm.${loading ? 'loading' : 'login'}`)}
    </LoadingButton>
  );
};
