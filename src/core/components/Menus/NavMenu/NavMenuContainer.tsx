import { useAppSelector } from '../../../../config/redux/hooks';
import icons from '../../../../assets/icons/NavIconSet';

import { NavMenu } from './NavMenu';

export const NavMenuContainer = (): JSX.Element => {
  const activeRoute = useAppSelector(({ core }) => core.activeRoute);

  return <NavMenu activeRoute={activeRoute} icons={icons} />;
};
