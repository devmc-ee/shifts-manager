import { ProtectedRoutesEnum } from './routes/routes';

export type NavMenuItemType = {
  id: string;
  icon: string;
  url: string;
};

export const NAV_MENU: NavMenuItemType[] = [
  {
    id: 'home',
    icon: 'HomeIcon',
    url: ProtectedRoutesEnum.dashboard,
  },
  {
    id: 'shifts',
    icon: 'ShiftsIcon',
    url: ProtectedRoutesEnum.shifts,
  },
  {
    id: 'timesheets',
    icon: 'TimeSheetsIcon',
    url: ProtectedRoutesEnum.timeSheets,
  },
  {
    id: 'team',
    icon: 'TeamIcon',
    url: ProtectedRoutesEnum.team,
  },
];
