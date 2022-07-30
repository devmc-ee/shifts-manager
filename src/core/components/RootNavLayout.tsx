import { Outlet } from "react-router-dom";
import { Dashboard } from "../../pages/Dashboard";
import { NavMenu } from "./NavMenu";

export const RootNavLayout = (): JSX.Element => {
    return (
        <>
            <NavMenu />
            <Outlet/>
        </>
    );
}