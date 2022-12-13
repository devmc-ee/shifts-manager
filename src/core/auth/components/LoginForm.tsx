import { ChangeEvent } from 'react';

interface LoginFormProps {
    handleChangeUserName: ({ target }: ChangeEvent<HTMLInputElement>) => void;
    submitHandle: () => void;
    title: string;
}
//new comment
export const LoginForm = ({ handleChangeUserName, submitHandle, title }: LoginFormProps): JSX.Element => {
    return (
        <div className="login-form">
            <h1>{title}</h1>
            <input type="text" name="username" onChange={handleChangeUserName} />
            <button onClick={submitHandle}>login</button>
        </div>
    );
};
