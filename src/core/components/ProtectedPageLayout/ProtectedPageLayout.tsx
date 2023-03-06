import { Outlet } from 'react-router-dom';
import { HeaderBar } from '../HeaderBar';
import { NavMenu } from '../NavMenu';

export const ProtectedPageLayout = (): JSX.Element => {
  return (
    <div className="protected-page-layout">
      <div className="protected-page-layout__header">
        <HeaderBar title="Thai Food - Thai Cook" />
      </div>
      <div className="protected-page-layout__content-container">
        <Outlet />
      </div>
      <div className="protected-page-layout__footer">
        <NavMenu />
      </div>
    </div>
  );
};
