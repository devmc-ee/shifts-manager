import './styles.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { Dashboard, Login } from './pages';
import { ProtectedRoute } from './core/components/ProtectedRoute';
import { routes } from './core/routing/routes';
import { NewStaffPage, StaffPage } from './staff/components';
import { RootNavLayout } from './core/components/RootNavLayout';
import { ShiftsPage, NewShiftPage } from './shift/components';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './config/redux/hooks';
import { changeActiveRoute } from './core/redux/coreSlice';

export const App = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const activeRoute = useAppSelector(({ core }) => core.activeRoute);

  useEffect(() => {
    if (activeRoute !== pathname) {
      dispatch(changeActiveRoute(pathname));
    }
  }, [pathname, activeRoute, dispatch]);

  return (
    <>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route
          path={routes.protected.root}
          element={
            <ProtectedRoute>
              <RootNavLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index={true}
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.protected.staff}
            element={
              <ProtectedRoute>
                <StaffPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.protected.staffNew}
            element={
              <ProtectedRoute>
                <NewStaffPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.protected.shifts}
            element={
              <ProtectedRoute>
                <ShiftsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={routes.protected.shiftNew}
            element={
              <ProtectedRoute>
                <NewShiftPage />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There&apos;s nothing here!</p>
              <Link to={routes.protected.dashboard}>Dashboard</Link>
            </main>
          }
        />
      </Routes>
    </>
  );
};
