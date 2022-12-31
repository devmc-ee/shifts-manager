import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import { Page } from '../../../components/Page/Page';
import LoginFormContainer from '../../components/LoginForm/';

export const Login = () => {
  const { t } = useTranslation();
  const title = '[Ta-Rung]';

  return (
    <Page classes="login">
      <div className="login-form__app-title">{title}</div>
      <LanguageSwitcher />
      {/* TODO: remove the next div after a proper swithcher is implemented */}
      <div>SELECTED LANGUAGE: {t('loginPage.submit')}</div>
      <LoginFormContainer />
    </Page>
  );
};
