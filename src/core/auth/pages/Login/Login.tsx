import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import { Page } from '../../../components/Page/Page';
import { LoginFormContainer } from '../../components/LoginForm/LoginFormContainer';

export const Login = () => {
  const { t } = useTranslation();
  const title = '[Ta-Rung]';

  return (
    <Page classes="login">
      <h1>{title}</h1>
      <LanguageSwitcher />
      {/* TODO: remove the next div after a proper swithcher is implemented */}
      <div>SELECTED LANGUAGE: {t('loginPage.submit')}</div>
      <LoginFormContainer />
    </Page>
  );
};
