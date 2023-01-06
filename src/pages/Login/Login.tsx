import { useTranslation } from 'react-i18next';
import { Page } from '../../core/components/Page';
import { LoginForm } from '../../user/components/LoginForm';

export const Login = () => {
  const { t } = useTranslation();
  const title = t('loginPage.title');

  return (
    <Page classes="login">
      <div className="login-form__app-title">{title}</div>
      <div className="login-form__lang-settings-container">
        <div className="login-form__field-container--lang"></div>
      </div>
      <LoginForm />
    </Page>
  );
};
