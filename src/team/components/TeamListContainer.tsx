import { useAppSelector } from '../../config/redux/hooks';
import { AppState } from '../../config/redux/store';

export const TeamListContainer = (): JSX.Element => {
  const teamList = useAppSelector(({ team }: AppState) => team.team);

  return <ul>{teamList && Object.values(teamList).map((team) => <li key={team.uuid}>{`${team.name} ${team.email}`}</li>)}</ul>;
};
