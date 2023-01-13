import { SelectChangeEvent } from '@mui/material/Select/Select';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const LanguageSwitcherContainer = () => {
  const { i18n } = useTranslation();

  const onChange = ({ target }: SelectChangeEvent<string>) => i18n.changeLanguage(target.value.toLocaleLowerCase());

  return <LanguageSwitcher language={i18n.language} onChange={onChange} />;
};
