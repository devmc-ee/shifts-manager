import { memo } from 'react';
import { Page } from '../../../components/Page/Page';
import { LoginFormContainer } from '../../components/LoginFormContainer';

// eslint-disable-next-line react/display-name
export const Login = memo((): JSX.Element => {
  const title = '[Ta-Rung]';

  return (
    <Page classes="login">
      <h1>{title}</h1>
      <LoginFormContainer />
    </Page>
  );
});
