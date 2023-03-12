import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuProps from '@mui/material/Menu/Menu';
import PublicIcon from '@mui/icons-material/Public';
import { languages } from '../../../config/i18n';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  language: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

export const LanguageSwitcher = ({ onChange, language }: LanguageSwitcherProps) => {
  const { t } = useTranslation();

  const menuProps: Partial<typeof MenuProps> = {
    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
    transformOrigin: { vertical: 'top', horizontal: 'center' },
  };
  const value = !language ? languages[0] : language;

  return (
    <FormControl className="language-switcher-container" variant="standard" sx={{ maxWidth: 100 }}>
      <Select
        MenuProps={menuProps}
        className="language-switcher-select-standard"
        value={value}
        label={value}
        onChange={onChange}
        disableUnderline={true}
        IconComponent={PublicIcon}
      >
        {languages.map((code: string) => (
          <MenuItem key={code} value={code} style={value === code ? { display: 'none' } : {}} divider={true}>
            {t(`core.languages.${code}`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
