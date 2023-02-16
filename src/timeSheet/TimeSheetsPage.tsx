import { Link } from 'react-router-dom';
import { Page } from '../core/components/Page';
import { ProtectedRoutesEnum } from '../config/routes/routes';

export const TimeSheetsPage = (): JSX.Element => {
  return (
    <Page classes="time-sheets-page">
      <Link to={ProtectedRoutesEnum.timeSheets}>Time Sheets</Link>
    </Page>
  );
};
