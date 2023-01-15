import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { LoginForm } from './LoginForm';
import { changeLoginFormFieldValue } from '../../redux/loginSlice';
import { useAppDispatch, useAppSelector } from '../../../config/redux/hooks';

export default {
  title: 'LoginForm/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args, global) => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(({ login }) => login.userName);
  const password = useAppSelector(({ login }) => login.password);
  const [isLoading, setIsLoading] = useState(false);

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(!!args?.isSubmitDisabled);
  const [errorMessage, setErrorMessage] = useState(args?.errorMessage || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onUserNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeLoginFormFieldValue(target.value));
  };
  const onPasswordChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeLoginFormFieldValue(target.value));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setIsSubmitted(() => true);
    setTimeout(() => {
      setIsLoading(false);
      setErrorMessage(() => 'Something went wrong');
    }, 5000);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (isSubmitDisabled || errorMessage) return;
    if (event.key !== 'Enter' && event.key !== 'NumpadEnter') return;
    handleSubmit();
  };

  useEffect(() => {
    setIsSubmitDisabled(() => !userName || !password);

    if (isSubmitted) {
      setErrorMessage(() => '');
      setIsSubmitted(() => false);
    }
  }, [userName, password, isSubmitted]);

  useEffect(() => {
    setIsLoading(() => global.initialArgs.isLoading || false);
  }, [global.initialArgs.isLoading]);

  const loginFormProps = {
    ...args,
    errorMessage,
    handleSubmit,
    isLoading,
    isSubmitDisabled,
    handleChangeUserName: onUserNameChange,
    handleChangePassword: onPasswordChange,
    handleKeyDown,
  };

  return <LoginForm {...loginFormProps} />;
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
