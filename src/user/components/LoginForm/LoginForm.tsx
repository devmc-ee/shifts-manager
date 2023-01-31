import { ChangeEvent, useLayoutEffect, useState, useRef, KeyboardEvent } from 'react';
import { LoginButton } from '../LoginButton/LoginButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput';
import IconButton from '@mui/material/IconButton/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTranslation } from 'react-i18next';
import './LoginForm.css';

export interface LoginFormProps {
  handleFieldValueChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  isSubmitDisabled: boolean;
  isLoading: boolean;
  errorMessage: string;
}

export const LoginForm = ({ handleFieldValueChange, handleSubmit, isSubmitDisabled, isLoading, errorMessage, handleKeyDown }: LoginFormProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    inputRef.current?.focus();
  }, []);

  useLayoutEffect(() => {
    if (errorMessage) {
      inputRef.current?.focus();
    }
  }, [errorMessage]);

  return (
    <form className="login-form">
      <div className="login-form-container login-form-input">
        <div className="login-form__field-container login-form__field-container-username">
          <TextField
            inputRef={inputRef}
            error={!!errorMessage}
            disabled={isLoading}
            fullWidth
            id="outlined-basic"
            label={t('loginForm.username')}
            variant="outlined"
            type="email"
            name="userName"
            onChange={handleFieldValueChange}
          />
        </div>
        <div className="login-form__field-container login-form__field-container-password">
          <FormControl disabled={isLoading} error={!!errorMessage} fullWidth id="outlined-basic" variant="outlined" onChange={handleFieldValueChange}>
            <OutlinedInput
              error={!!errorMessage}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              onKeyDown={handleKeyDown}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    tabIndex={-1}
                    disabled={isLoading}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={t('loginForm.password')}
            />
            <InputLabel disabled={isLoading} error={!!errorMessage} htmlFor="outlined-adornment-password">
              {t('loginForm.password')}
            </InputLabel>
          </FormControl>
        </div>
      </div>
      <div className="login-form__field-container login-form__login-btn-container ">
        <LoginButton loading={isLoading} label="loading-button" onClick={handleSubmit} disabled={isSubmitDisabled || isLoading || !!errorMessage} />
      </div>
    </form>
  );
};
