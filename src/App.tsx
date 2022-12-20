import './styles.css';
// import CssBaseline from '@mui/material/CssBaseline';
import { Link, Route, Routes } from 'react-router-dom';
import { Dashboard, Login } from './pages';
import { ProtectedRoute } from './core/auth/components/ProtectedRoute';
import { routes } from './core/routing/routes';
import { NewStaffPage, StaffPage } from './staff/components';
import { RootNavLayout } from './core/components/RootNavLayout';
import { ShiftsPage, NewShiftPage } from './shift/components';

export const App = () => {
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
