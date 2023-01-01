import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../core/components/LanguageSwitcher';
import { Page } from '../../core/components/Page';
import { LoginFormContainer } from '../../user/components/LoginForm';

export const Login = () => {
  const { t } = useTranslation();
  const title = '[Ta-Rung]';

  return (
    <Page classes="login">
      <h1 className="login-form__app-title">{title}</h1>
      <div className="login-form__app-title">{title}</div>
      <LanguageSwitcher />
      {/* TODO: remove the next div after a proper swithcher is implemented */}
      <div>SELECTED LANGUAGE: {t('loginPage.submit')}</div>
      <LoginFormContainer />
    </Page>
  );
};
