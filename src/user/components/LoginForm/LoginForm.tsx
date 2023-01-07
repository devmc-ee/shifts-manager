import { ChangeEvent, useState } from 'react';
import { LoginButton } from '../LoginButton/LoginButton';
import Alert from '@mui/material/Alert';
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
  handleChangeUserName: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  isSubmitDisabled: boolean;
  isLoading: boolean;
  errorMessage: string;
}

export const LoginForm = ({
  handleChangeUserName,
  handleChangePassword,
  handleSubmit,
  isSubmitDisabled,
  isLoading,
  errorMessage,
}: LoginFormProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form className="login-form">
      <div className="login-form-container login-form-input">
        <div className="login-form__field-container login-form__field-container-username">
          <TextField
            error={!!errorMessage}
            disabled={isLoading}
            fullWidth
            id="outlined-basic"
            label="Username"
            variant="outlined"
            type="text"
            name="username"
            onChange={handleChangeUserName}
          />
        </div>
        <div className="login-form__field-container login-form__field-container-password">
          <FormControl disabled={isLoading} error={!!errorMessage} fullWidth id="outlined-basic" variant="outlined" onChange={handleChangePassword}>
            <InputLabel disabled={isLoading} error={!!errorMessage} htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              error={!!errorMessage}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
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
        {errorMessage && (
          <div className="login-form__field-container login-form-alert-box">
            <Alert severity="error">{errorMessage}</Alert>
          </div>
        )}
      </div>
      <div className="login-form__field-container login-form__login-btn-container ">
        <LoginButton loading={isLoading} label="loading-button" onClick={handleSubmit} disabled={isSubmitDisabled || isLoading || !!errorMessage} />
      </div>
    </form>
  );
};
