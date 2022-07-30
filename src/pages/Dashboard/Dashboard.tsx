import { Link } from 'react-router-dom';
import { AppState } from '../../config/redux/store';
import { setLoggedOut } from '../../core/auth/redux/authSlice';
import { useAppDispatch, useAppSelector } from '../../config/redux/hooks';
import { routes } from '../../core/routing/routes';
import { NewStaffContainer } from '../../staff/components/NewStaffContainer';

export const Dashboard = (): JSX.Element => {
    const userName = useAppSelector(({ auth }: AppState) => auth.userName);
    const dispatch = useAppDispatch();
    return (
    <>
        <Link onClick={() => dispatch(setLoggedOut())} to={routes.login}>Logout</Link>
        <h1>Hi, {userName}!</h1>
        <NewStaffContainer />
    </>
    );
}