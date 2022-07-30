import './styles.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import { Login, Dashboard } from './pages';
import { ProtectedRoute } from './core/auth/components/ProtectedRoute';
import { routes } from './core/routing/routes';

export const App = () => {
    return (
    <>
        <CssBaseline />
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path={routes.protected.dashboard} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
    </>
)};