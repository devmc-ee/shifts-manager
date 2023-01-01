import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { LoginForm } from './LoginForm';
import { changeUserName, changePassword, setIsLoading } from '../../redux/loginSlice';
import { useAppDispatch, useAppSelector } from '../../../config/redux/hooks';

export default {
  title: 'LoginForm/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(({ login }) => login.userName);
  const password = useAppSelector(({ login }) => login.password);
  const isLoading = useAppSelector(({ login }) => login.isLoading);

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(!!args?.isSubmitDisabled);
  const [errorMessage, setErrorMessage] = useState(args?.errorMessage || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onUserNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeUserName(target.value));
  };
  const onPasswordChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(changePassword(target.value));
  };

  const handleSubmit = () => {
    dispatch(setIsLoading(true));
    setIsSubmitted(() => true);
    setTimeout(() => {
      dispatch(setIsLoading(false));
      setErrorMessage(() => 'Something went wrong');
    }, 5000);
  };

  useEffect(() => {
    setIsSubmitDisabled(() => !userName || !password);

    if (isSubmitted) {
      setErrorMessage(() => '');
      setIsSubmitted(() => false);
    }
  }, [userName, password]);

  const loginFormProps = {
    ...args,
    errorMessage,
    handleSubmit,
    isLoading,
    isSubmitDisabled,
    handleChangeUserName: onUserNameChange,
    handleChangePassword: onPasswordChange,
  };

  return (
    <>
      <LoginForm {...loginFormProps} />
    </>
  );
};

export const Default = Template.bind({});

export const LoginFormLoading = Template.bind({});
LoginFormLoading.args = {
  isSubmitDisabled: true,
  isLoading: true,
};

export const LoginFormError = Template.bind({});
LoginFormError.args = {
  isSubmitDisabled: false,
  errorMessage: 'Something went wrong',
};
