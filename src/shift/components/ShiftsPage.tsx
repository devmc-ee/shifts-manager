import { Link } from 'react-router-dom';
import { PageContent } from '../../core/components/PageContent';
import { ProtectedRoutesEnum } from '../../config/routes/routes';
import { ShiftListContainer } from './ShiftListContainer';

export const ShiftsPage = (): JSX.Element => {
  return (
    <PageContent classes="shifts-page">
      <Link to={ProtectedRoutesEnum.shiftNew}>New Shift</Link>
      <ShiftListContainer />
    </PageContent>
  );
};
