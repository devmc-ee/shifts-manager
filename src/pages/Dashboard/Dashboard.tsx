import { Link, useParams } from 'react-router-dom';
export const Dashboard = (): JSX.Element => {
    const params = useParams(); 
    return (
        <Link to="/login">Login {JSON.stringify(params)}</Link>
    );
}