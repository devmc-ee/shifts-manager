import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuProps from '@mui/material/Menu/Menu';
import { languages } from '../../../config/i18n';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';

interface LanguageSwitcherProps {
  language: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  isStandardSize: boolean;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const LanguageSwitcher = ({ onChange, language, icon, isStandardSize = true }: LanguageSwitcherProps) => {
  const { t } = useTranslation();

  const menuProps: Partial<typeof MenuProps> = {
    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
    transformOrigin: { vertical: 'top', horizontal: 'center' },
  };
  const value = !language ? languages[0] : language;

  const languageSwitcherClasses = classnames(
    'language-switcher-select',
    { ['language-switcher-select--standard']: isStandardSize },
    { ['language-switcher-select--small']: !isStandardSize }
  );

  return (
    <FormControl className="language-switcher-container" variant="standard" sx={{ maxWidth: 100 }}>
      <Select
        MenuProps={menuProps}
        className={languageSwitcherClasses}
        value={value}
        label={value}
        onChange={onChange}
        disableUnderline={true}
        IconComponent={icon}
      >
        {languages.map((code: string) => (
          <MenuItem key={code} value={code} style={value === code ? { display: 'none' } : {}} divider={true}>
            {isStandardSize ? t(`core.languages.${code}`) : code.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
