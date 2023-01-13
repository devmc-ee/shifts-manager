import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export default {
  title: 'LanguageSwitcher',
  component: LanguageSwitcher,
} as ComponentMeta<typeof LanguageSwitcher>;

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => {
  const { i18n } = useTranslation();
  const [value, setValue] = useState('en');
  const handleLanguageChange = ({ target }: SelectChangeEvent<string>) => {
    i18n.changeLanguage(target.value.toLocaleLowerCase());
    setValue(() => i18n.language);
  };

  const languageSwitcherProps = {
    ...args,
    language: value,
    onChange: handleLanguageChange,
  };

  return <LanguageSwitcher {...languageSwitcherProps} />;
};

export const Default = Template.bind({});
Default.args = {};
