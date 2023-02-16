import { Link } from 'react-router-dom';
import { Page } from '../../core/components/Page';
import { ProtectedRoutesEnum } from '../../config/routes/routes';
import { ShiftListContainer } from './ShiftListContainer';

export const ShiftsPage = (): JSX.Element => {
  return (
    <Page classes="shifts-page">
      <Link to={ProtectedRoutesEnum.shiftNew}>New Shift</Link>
      <ShiftListContainer />
    </Page>
  );
};
