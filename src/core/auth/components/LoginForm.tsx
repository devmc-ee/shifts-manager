import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { routes } from '../../routing/routes';
import { changeUserName, setLoggedIn } from '../redux/authSlice';

export const LoginForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChangeUserName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeUserName(target.value));
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const from = location.state?.from?.pathname || routes.protected.dashboard;

  const submitHandle = () => {
    dispatch(setLoggedIn());
    navigate(from, { replace: true });
  };

  return (
    <div className="login-form">
      <h1>Login 3</h1>
      <input type="text" name="username" onChange={handleChangeUserName} />
      <button onClick={submitHandle}>login</button>
    </div>
  );
};
