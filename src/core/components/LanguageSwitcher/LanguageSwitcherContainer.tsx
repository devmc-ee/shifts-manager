import { SelectChangeEvent } from '@mui/material/Select/Select';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

interface LanguageSwitcherContainerProps {
  isStandardSize: boolean;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const LanguageSwitcherContainer = ({ icon, isStandardSize }: LanguageSwitcherContainerProps) => {
  const { i18n } = useTranslation();

  const onChange = ({ target }: SelectChangeEvent<string>) => i18n.changeLanguage(target.value.toLocaleLowerCase());

  return <LanguageSwitcher icon={icon} isStandardSize={isStandardSize} language={i18next.resolvedLanguage} onChange={onChange} />;
};
