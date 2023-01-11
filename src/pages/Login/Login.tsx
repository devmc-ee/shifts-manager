import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../config/redux/hooks';
import { AppState } from '../../config/redux/store';
import { Page } from '../../core/components/Page';
import { routes } from '../../core/routing/routes';
import { LoginForm } from '../../user/components/LoginForm';
import './LoginPage.css';

export const Login = () => {
  const { t } = useTranslation();
  const title = t('loginPage.title');
  const navigate = useNavigate();

  const isLoggedIn = useAppSelector(({ user }: AppState) => user.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(routes.protected.root);
    }
  }, [isLoggedIn]);

  return (
    <Page classes="login">
      <div className="login-page__app-title">{title}</div>
      <div className="login-page__form-container">
        <LoginForm />
      </div>
    </Page>
  );
};
