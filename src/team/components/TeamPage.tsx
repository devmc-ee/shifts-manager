import { Link } from 'react-router-dom';
import { Page } from '../../core/components/Page';
import { ProtectedRoutesEnum } from '../../config/routes/routes';
import { TeamListContainer } from './TeamListContainer';

export const TeamPage = (): JSX.Element => {
  return (
    <Page classes="new-team-page">
      <Link to={ProtectedRoutesEnum.teamNew}>New Team</Link>
      <TeamListContainer />
    </Page>
  );
};
