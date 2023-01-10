import { ChangeEvent, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuProps from '@mui/material/Menu/Menu';
import PublicIcon from '@mui/icons-material/Public';
import { LANGUAGE } from '../../../config/i18n';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

interface LanguageSwitcherProps {
  language: string;
  onChange: (event: ChangeEvent<HTMLSelectElement> | SelectChangeEvent) => void;
}

export const LanguageSwitcher = ({ onChange, language }: LanguageSwitcherProps) => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(() => event.target.value);
    onChange(event);
  };

  const menuProps: Partial<typeof MenuProps> = {
    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
    transformOrigin: { vertical: 'top', horizontal: 'center' },
  };

  return (
    <FormControl className="language-switcher-container" variant="standard" sx={{ maxWidth: 100 }}>
      <Select
        MenuProps={menuProps}
        className="language-switcher-select-standard"
        value={selectedLanguage}
        label={selectedLanguage}
        onChange={handleLanguageChange}
        disableUnderline={true}
        IconComponent={PublicIcon}
      >
        {Object.keys(LANGUAGE).map((code: string) => (
          <MenuItem
            key={code.toLowerCase()}
            value={code.toLowerCase()}
            style={selectedLanguage === code.toString().toLowerCase() ? { display: 'none' } : {}}
            divider={true}
          >
            {t(`core.languages.${code.toLowerCase()}`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
