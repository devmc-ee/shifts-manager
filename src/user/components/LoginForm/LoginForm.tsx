import { ChangeEvent, useLayoutEffect, useState, useRef } from 'react';
import { LoginButton } from '../LoginButton/LoginButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput';
import IconButton from '@mui/material/IconButton/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './LoginForm.css';

export interface LoginFormProps {
  handleFieldValueChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  isSubmitDisabled: boolean;
  isLoading: boolean;
  errorMessage: string;
}

export const LoginForm = ({ handleFieldValueChange, handleSubmit, isSubmitDisabled, isLoading, errorMessage }: LoginFormProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    inputRef.current?.focus();
  }, []);

  useLayoutEffect(() => {
    inputRef.current?.focus();
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
            label="Username"
            variant="outlined"
            type="text"
            name="userName"
            onChange={handleFieldValueChange}
          />
        </div>
        <div className="login-form__field-container login-form__field-container-password">
          <FormControl disabled={isLoading} error={!!errorMessage} fullWidth id="outlined-basic" variant="outlined" onChange={handleFieldValueChange}>
            <InputLabel disabled={isLoading} error={!!errorMessage} htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              error={!!errorMessage}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
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
              label="Password"
            />
          </FormControl>
        </div>
      </div>
      <div className="login-form__field-container login-form__login-btn-container ">
        <LoginButton loading={isLoading} label="loading-button" onClick={handleSubmit} disabled={isSubmitDisabled || isLoading || !!errorMessage} />
      </div>
    </form>
  );
};
