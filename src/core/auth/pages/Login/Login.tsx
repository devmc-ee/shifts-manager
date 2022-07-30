import { memo } from "react";
import { Page } from "../../../components/Page/Page";
import { LoginFormContainer } from "../../components/LoginFormContainer";

export const Login = memo((): JSX.Element => {
    return (
    <Page classes="login">
        <LoginFormContainer />
    </Page>
    )
}); 