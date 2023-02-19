import { Link } from 'react-router-dom';
import { PageContent } from '../../core/components/PageContent';
import { ProtectedRoutesEnum } from '../../config/routes/routes';
import { TeamListContainer } from './TeamListContainer';

export const TeamPage = (): JSX.Element => {
  return (
    <PageContent classes="new-team-page">
      <Link to={ProtectedRoutesEnum.teamNew}>New Team</Link>
      <TeamListContainer />
    </PageContent>
  );
};
