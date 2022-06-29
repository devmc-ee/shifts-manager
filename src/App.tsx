import './styles.css';
import LOGO from './assets/logo.png';
import user_icon from './assets/healthicons_ui-user-profile.svg';
import { ClickCounter } from './ClickCounter';

export const App = () => (
    <>
        <h1>My Shifts Manager - {process.env.NODE_ENV}</h1>
        <img src={LOGO} alt="Thai Food Thai Cook" />
        <img src={user_icon} alt="Thai Food Thai Cook" />
        <ClickCounter init={100} />
    </>
);
