import { Link } from 'react-router-dom';
import { Page } from '../../core/components/Page';
import { routes } from '../../core/routing/routes';
import { ShiftListContainer } from './ShiftListContainer';

export const ShiftsPage = (): JSX.Element => {
    return (
        <Page classes="shifts-page">
            <Link to={routes.protected.shiftNew}>New Shift</Link>
            <ShiftListContainer />
        </Page>
    );
};
