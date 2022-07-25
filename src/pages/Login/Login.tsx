import { memo } from "react"
import { Page } from "../../core/components/Page/Page"
import { LoginFormContainer } from "./LoginFormContainer"

export const Login = memo((): JSX.Element => {
    return (
    <Page classes="login">
        <LoginFormContainer />
    </Page>
    )
});