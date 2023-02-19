import { Link } from 'react-router-dom';
import { PageContent } from '../core/components/PageContent';
import { ProtectedRoutesEnum } from '../config/routes/routes';

export const TimeSheetsPage = (): JSX.Element => {
  return (
    <PageContent classes="time-sheets-page">
      <Link to={ProtectedRoutesEnum.timeSheets}>Time Sheets</Link>
    </PageContent>
  );
};
