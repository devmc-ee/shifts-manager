import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../config/redux/hooks';
import { ProtectedRoutesEnum } from '../../config/routes/routes';
import { Team } from '../redux/TeamReducerState.d';
import { createTeam } from '../redux/teamSlice';

export const NewTeamContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [teamData, setTeamData] = useState<Team>({ uuid: '', name: '', email: '' });

  const newTeamCreateHandle = () => {
    dispatch(
      createTeam({
        ...teamData,
        uuid: 'string',
      })
    );
  };

  const changeTeamData = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = target;
    setTeamData((prev) => {
      return { ...prev, [id]: value };
    });
  };

  return (
    <div>
      <input onChange={changeTeamData} type="text" id="name" placeholder="name" />
      <input onChange={changeTeamData} type="email" id="email" placeholder="email" />
      <Link type="button" onClick={newTeamCreateHandle} to={`/${ProtectedRoutesEnum.team}`}>
        create
      </Link>
    </div>
  );
};
