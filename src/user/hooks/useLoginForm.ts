import { ChangeEvent, useMemo } from 'react';
import { changeLoginFormFieldValue } from '../redux/loginSlice';
import { useAppDispatch, useAppSelector } from '../../config/redux/hooks';
import { LoginFormProps } from '../components/LoginForm/LoginForm';
import { useLoginMutation } from '../api/auth/login';

export const useLoginForm = () => {
  const dispatch = useAppDispatch();

  const userName = useAppSelector(({ login }) => login.userName);
  const password = useAppSelector(({ login }) => login.password);

  const [login, { isLoading, error, reset, status }] = useLoginMutation();

  const isSubmitDisabled = useMemo(() => userName === '' || password === '', [userName, password]);

  const handleFieldValueChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeLoginFormFieldValue({ fieldName: target.name, value: target.value }));

    if (status !== 'uninitialized') {
      reset();
    }
  };

  const handleSubmit = async () => {
    await login({ email: userName, password });
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (isSubmitDisabled || error) return;
    if (event.key !== 'Enter' && event.key !== 'NumpadEnter') return;
    handleSubmit();
  };

  const loginFormProps: LoginFormProps = {
    isSubmitDisabled,
    isLoading,
    handleKeyDown,
    handleSubmit,
    handleFieldValueChange,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    errorMessage: error?.data?.message || '',
  };

  return [loginFormProps];
};
