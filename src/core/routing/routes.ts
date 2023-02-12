export const routes = {
  login: '/login',
  protected: {
    root: '/',
    dashboard: '/',
    staff: 'staff',
    staffNew: '/staff/new',
    shifts: 'shifts',
    shiftNew: '/shifts/new',
  },
};

export enum ProtectedRoute {
  root = '/',
  dashboard = '/',
  staff = 'staff',
  staffNew = '/staff/new',
  shifts = 'shifts',
  shiftNew = '/shifts/new',
}
