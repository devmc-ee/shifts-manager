import { useAppSelector } from '../../config/redux/hooks';

export const TeamListContainer = (): JSX.Element => {
  const teamList = useAppSelector(({ team }) => team.team);

  return <ul>{teamList && Object.values(teamList).map((team) => <li key={team.uuid}>{`${team.name} ${team.email}`}</li>)}</ul>;
};
