import './styles.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import { Login, Dashboard } from './pages';

export const App = () => (
    <>
        <CssBaseline />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </>
);
