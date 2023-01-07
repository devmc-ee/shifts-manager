import { LoginForm } from './LoginForm';

import { useLoginForm } from '../../hooks/useLoginForm';

export const LoginFormContainer = () => {
  const [loginFormProps] = useLoginForm();

  return (
    <div className="login-form-container">
      <LoginForm {...loginFormProps} />
    </div>
  );
};
