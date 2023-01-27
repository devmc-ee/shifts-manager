import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../../config/redux/hooks';
import { clearUserData } from '../../../user/redux/userSlice';
import { routes } from '../../routing/routes';
import { CustomButton } from '../../components/buttons/Button/Button';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState, MouseEvent } from 'react';
import { PendingActions } from '@mui/icons-material';
import './NavMenu.css';

export const NavMenu = (): JSX.Element => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const getActiveRouteClass = (route: string) => {
    const activeRouteClassName = 'font-bold';

    if (route === pathname) return activeRouteClassName;

    if (route === '/') return '';

    const isActiveRoute = new RegExp(route, 'ui').test(pathname);

    return isActiveRoute ? activeRouteClassName : '';
  };

  const logout = () => dispatch(clearUserData());

  const [activeButton, setActiveButton] = useState('1');

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.nodeName !== 'BUTTON') return;

    setActiveButton(event.currentTarget.id);
  };

  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li className={getActiveRouteClass(routes.protected.dashboard)}>
          <Link to={routes.protected.dashboard}>
            <CustomButton id="1" handleClick={handleButtonClick} className="nav-button" icon={<HomeIcon />} label="Home" active={activeButton === '1'} />
          </Link>
        </li>
        <li className={getActiveRouteClass(routes.protected.staff)}>
          <Link to={routes.protected.staff}>
            <CustomButton
              id="2"
              handleClick={handleButtonClick}
              className="nav-button"
              icon={<CalendarMonthIcon />}
              label="Staff"
              active={activeButton === '2'}
            ></CustomButton>
          </Link>
        </li>
        <li className={getActiveRouteClass(routes.protected.shifts)}>
          <Link to={routes.protected.shifts}>
            <CustomButton
              id="3"
              handleClick={handleButtonClick}
              className="nav-button"
              icon={<PendingActions />}
              label="Timeshifts"
              active={activeButton === '3'}
            ></CustomButton>
          </Link>
        </li>
        <li>
          <Link onClick={logout} to={routes.login}>
            <CustomButton
              id="4"
              handleClick={handleButtonClick}
              className="nav-button"
              icon={<LogoutIcon />}
              label="Logout"
              active={activeButton === '4'}
            ></CustomButton>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
