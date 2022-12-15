import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../config/redux/hooks';
import { routes } from '../../core/routing/routes';
import { Staff } from '../redux/StaffReducerState.d';
import { createStaff } from '../redux/staffSlice';

export const NewStaffContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [staffData, setStaffData] = useState<Staff>({ uuid: '', name: '', email: '' });

  const newStaffCreateHandle = () => {
    dispatch(
      createStaff({
        ...staffData,
        uuid: 'string',
      })
    );
  };

  const changeStaffData = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = target;
    setStaffData((prev) => {
      return { ...prev, [id]: value };
    });
  };

  return (
    <div>
      <input onChange={changeStaffData} type="text" id="name" placeholder="name" />
      <input onChange={changeStaffData} type="email" id="email" placeholder="email" />
      <Link type="button" onClick={newStaffCreateHandle} to={`/${routes.protected.staff}`}>
        create
      </Link>
    </div>
  );
};
