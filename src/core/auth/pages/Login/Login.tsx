import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import { Page } from '../../../components/Page/Page';
import { LoginFormContainer } from '../../components/LoginFormContainer';

export const Login = () => {
  const { t } = useTranslation();

  return (
    <Page classes="login">
      <LanguageSwitcher />
      {/* TODO: remove the next div after a proper swithcher is implemented */}
      <div>SELECTED LANGUAGE: {t('loginPage.submit')}</div>
      <LoginFormContainer />
    </Page>
  );
};
