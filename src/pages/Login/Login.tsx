import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../config/redux/hooks';
import { AppState } from '../../config/redux/store';
import { PageContent } from '../../core/components/PageContent';
import { ProtectedRoutesEnum } from '../../config/routes/routes';
import { LoginForm } from '../../user/components/LoginForm';
import { LanguageSwitcher } from '../../core/components/LanguageSwitcher';
import './LoginPage.css';

export const Login = () => {
  const { t } = useTranslation();
  const title = t('loginPage.title');
  const navigate = useNavigate();

  const isLoggedIn = useAppSelector(({ user }: AppState) => user.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(ProtectedRoutesEnum.root);
    }
  }, [isLoggedIn]);

  return (
    <PageContent classes="login">
      <div className="login-page__app-title">{title}</div>
      <div className="login-page__form-container">
        <LanguageSwitcher />
        <LoginForm />
      </div>
    </PageContent>
  );
};
