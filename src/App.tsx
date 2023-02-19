import './styles.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Dashboard, Login } from './pages';
import { ProtectedRoute } from './core/components/ProtectedRoute';
import { PublicRoutesEnum, ProtectedRoutesEnum } from './config/routes/routes';
import { NewTeamPage, TeamPage } from './team/components';
import { RootNavLayout } from './core/components/ProtectedPageLayout';
import { ShiftsPage, NewShiftPage } from './shift/components';
import { useUrlObserver } from '../src/core/hooks/useUrlObserver';
import { TimeSheetsPage } from './timeSheet/TimeSheetsPage';

export const App = () => {
  useUrlObserver();

  return (
    <>
      <Routes>
        <Route path={PublicRoutesEnum.login} element={<Login />} />
        <Route
          path={ProtectedRoutesEnum.dashboard}
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
            path={ProtectedRoutesEnum.team}
            element={
              <ProtectedRoute>
                <TeamPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={ProtectedRoutesEnum.teamNew}
            element={
              <ProtectedRoute>
                <NewTeamPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={ProtectedRoutesEnum.shifts}
            element={
              <ProtectedRoute>
                <ShiftsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={ProtectedRoutesEnum.shiftNew}
            element={
              <ProtectedRoute>
                <NewShiftPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={ProtectedRoutesEnum.timeSheets}
            element={
              <ProtectedRoute>
                <TimeSheetsPage />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There&apos;s nothing here!</p>
              <Link to={ProtectedRoutesEnum.dashboard}>Dashboard</Link>
            </main>
          }
        />
      </Routes>
    </>
  );
};
