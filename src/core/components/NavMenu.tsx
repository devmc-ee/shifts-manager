import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../config/redux/hooks";
import { AppState } from "../../config/redux/store";
import { setLoggedOut } from "../auth/redux/authSlice";
import { routes } from "../routing/routes";

export const NavMenu = (): JSX.Element => {
    const dispatch = useAppDispatch();
    return (
        <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
            <ul>
                <li> <Link to={routes.protected.dashboard}>Dashboard</Link></li>
                <li><Link to={routes.protected.staff}>Staff</Link></li>
                <li> <Link onClick={() => dispatch(setLoggedOut())} to={routes.login}>Logout</Link></li>
            </ul>
        </nav>
    );
} 