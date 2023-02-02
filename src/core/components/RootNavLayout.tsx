import { Outlet } from 'react-router-dom';
import { HeaderBar } from './HeaderBar';
import { NavMenu } from './NavMenu';

export const RootNavLayout = (): JSX.Element => {
  return (
    <div className="root-layout-container">
      <div className="root-layout-header">
        <HeaderBar title="Thai Food - Thai Cook" />
      </div>
      <Outlet />
      <NavMenu />
    </div>
  );
};
