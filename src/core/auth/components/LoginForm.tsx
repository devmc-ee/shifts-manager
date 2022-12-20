import { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import { LoginButton } from '../../components/buttons/LoginButton/LoginButton';
import './loginform.css';
interface LoginFormProps {
  handleChangeUserName: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  submitHandle: () => void;
  title: string;
  isDisabled: boolean;
}

export const LoginForm = ({ handleChangeUserName, handleChangePassword, submitHandle, title, isDisabled }: LoginFormProps): JSX.Element => {
  return (
    <div className="login-form">
      <h1>{title}</h1>
      <div className="input-fields">
        <TextField margin="normal" fullWidth id="outlined-basic" label="Username" variant="outlined" type="text" name="username" onChange={handleChangeUserName} />
        <TextField margin="normal" fullWidth id="outlined-basic" label="Password" variant="outlined" type="password" name="password" onChange={handleChangePassword} />
      </div>
      <LoginButton loadingPosition="start" loading={true} label="loading-button" onClick={submitHandle} disabled={isDisabled} />
    </div>
  );
};
