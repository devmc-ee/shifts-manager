import { LoginForm } from './LoginForm';
import { ChangeEvent, useState, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectUserName, changeUserName, setLoggedIn } from '../redux/authSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { routes } from '../../routing/routes';

// eslint-disable-next-line react/display-name

export const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userName = useSelector(selectUserName, shallowEqual);

  const [password, setPassword] = useState('');

  const isDisabled = useMemo(() => userName === '' && password === '', [userName, password]);

  const handleChangeUserName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeUserName(target.value));
  };

  const handleChangePassword = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPassword(() => target.value);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const from = location.state?.from?.pathname || routes.protected.dashboard;

  const submitHandle = () => {
    dispatch(setLoggedIn());
    navigate(from, { replace: true });
  };

  const loginFormProps = { handleChangeUserName, isDisabled, handleChangePassword, submitHandle, title: '[ta-rung]' };

  return (
    <div className="login-form-container">
      <LoginForm {...loginFormProps} />
    </div>
  );
};
