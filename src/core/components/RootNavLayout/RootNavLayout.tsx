import { Outlet } from 'react-router-dom';
import { NavMenu } from '../NavMenu';
import './RootNavLayout.css';

export const RootNavLayout = (): JSX.Element => {
  return (
    <div className="root-layout-container">
      <div className="root-layout-header"></div>
      <div className="root-content-container">
        <Outlet />
      </div>
      <NavMenu />
    </div>
  );
};
