import { LoginForm } from './LoginForm';
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { routes } from '../../routing/routes';
import { changeUserName, setLoggedIn } from '../redux/authSlice';

// eslint-disable-next-line react/display-name

export const LoginFormContainer = () => {
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

    const loginFormProps = { handleChangeUserName, submitHandle, title: '[ta-rung]' };

    return (
        <div className="login-form-container">
            <LoginForm {...loginFormProps} />
        </div>
    );
};
