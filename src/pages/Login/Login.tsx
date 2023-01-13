import { useTranslation } from 'react-i18next';
import { Page } from '../../core/components/Page';
import { LoginForm } from '../../user/components/LoginForm';
import { LanguageSwitcher } from '../../core/components/LanguageSwitcher';
import './LoginPage.css';

export const Login = () => {
  const { t } = useTranslation();
  const title = t('loginPage.title');

  return (
    <Page classes="login">
      <div className="login-page__app-title">{title}</div>
      <div className="login-page__form-container">
        <LanguageSwitcher />
        <LoginForm />
      </div>
    </Page>
  );
};
