import { AppState } from '../../config/redux/store';
import { useAppDispatch, useAppSelector } from '../../config/redux/hooks';

export const Dashboard = (): JSX.Element => {
    const userName = useAppSelector(({ auth }: AppState) => auth.userName);
    return (
    <>
        <h1>Hi, {userName}!</h1>
    </>
    );
}