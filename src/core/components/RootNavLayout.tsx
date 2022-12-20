import { Outlet } from 'react-router-dom';
import { NavMenu } from './NavMenu';

export const RootNavLayout = (): JSX.Element => {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
};
