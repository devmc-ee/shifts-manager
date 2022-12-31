import { LoginForm } from './LoginForm';
import { ChangeEvent, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectUserName, selectIsLoading, changeUserName, selectErrorMessage, changePassword, selectPassword, setIsLoading } from '../../redux/authSlice';

export const LoginFormContainer = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName, shallowEqual);
  const isLoading = useSelector(selectIsLoading, shallowEqual);
  const errorMessage = useSelector(selectErrorMessage, shallowEqual);
  const password = useSelector(selectPassword, shallowEqual);

  const isSubmitDisabled = useMemo(() => userName === '' || password === '', [userName, password]);

  const handleChangeUserName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeUserName(target.value));
  };

  const handleChangePassword = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(changePassword(target.value));
  };

  const handleSubmit = () => {
    dispatch(setIsLoading(true));
  };

  const loginFormProps = { handleChangeUserName, isSubmitDisabled, isLoading, handleChangePassword, handleSubmit, errorMessage };

  return (
    <div className="login-form-container">
      <LoginForm {...loginFormProps} />
    </div>
  );
};
