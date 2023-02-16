import { Outlet } from 'react-router-dom';
import { HeaderBar } from '../HeaderBar';
import { NavMenu } from '../NavMenu';
import './RootNavLayout.css';

export const RootNavLayout = (): JSX.Element => {
  return (
    <div className="root-layout-container">
      <div className="root-layout-header">
        <HeaderBar title="Thai Food - Thai Cook" />
      </div>
      <div className="root-content-container">
        <Outlet />
      </div>
      <div className="root-layout-footer">
        <NavMenu />
      </div>
    </div>
  );
};
