import { useAppSelector } from '../../../../config/redux/hooks';
import icons from '../../../../assets/icons/NavIconSet';
import { NavMenu } from './NavMenu';
import { AppState } from '../../../../config/redux/store';

export const NavMenuContainer = (): JSX.Element => {
  const activeRoute = useAppSelector(({ core }: AppState) => core.activeRoute);

  return <NavMenu activeRoute={activeRoute} icons={icons} />;
};
