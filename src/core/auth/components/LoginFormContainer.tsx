import { memo } from 'react';
import { LoginForm } from './LoginForm';

// eslint-disable-next-line react/display-name
export const LoginFormContainer = memo(() => {
    return (
        <div className="login-form-container">
            <LoginForm />
        </div>
    );
});
