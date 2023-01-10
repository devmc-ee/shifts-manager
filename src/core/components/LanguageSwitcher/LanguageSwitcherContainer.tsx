import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const LanguageSwitcherContainer = () => {
  const { i18n } = useTranslation();

  const onChange = ({ target }: ChangeEvent<HTMLSelectElement>) => i18n.changeLanguage(target.value.toLocaleLowerCase());

  return <LanguageSwitcher language={i18n.language} onChange={onChange} />;
};
