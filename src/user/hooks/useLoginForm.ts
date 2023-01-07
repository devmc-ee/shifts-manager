import { ChangeEvent, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../config/redux/hooks';
import { LoginFormProps } from '../components/LoginForm/LoginForm';
import { changeUserName, changePassword, setIsLoading } from '../redux/loginSlice';

export const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(({ login }) => login.userName);
  const isLoading = useAppSelector(({ login }) => login.isLoading);
  const errorMessage = useAppSelector(({ login }) => login.errorMessage);
  const password = useAppSelector(({ login }) => login.password);

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

  const loginFormProps: LoginFormProps = {
    handleChangeUserName,
    isSubmitDisabled,
    isLoading,
    handleChangePassword,
    handleSubmit,
    errorMessage,
  };

  return [loginFormProps];
};
