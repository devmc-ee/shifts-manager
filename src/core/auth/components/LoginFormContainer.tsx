import { memo } from 'react';
import { LoginForm } from './LoginForm';

export const LoginFormContainer = memo(() => {

    return (
        <div className="login-form-container">
            <LoginForm />
        </div>
    );
})