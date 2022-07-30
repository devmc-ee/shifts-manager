import { Link } from "react-router-dom"
import { Page } from "../../core/components/Page"
import { routes } from "../../core/routing/routes"
import { StaffListContainer } from "./StaffListContainer"

export const StaffPage = (): JSX.Element => {
    return (
        <Page classes="new-staff-page">
            <Link to={routes.protected.staffNew} >New Staff</Link>
            <StaffListContainer />
        </Page>
        )
}