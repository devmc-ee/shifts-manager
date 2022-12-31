import { ChangeEvent } from 'react';

interface LanguageSwitcherProps {
  language: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const LanguageSwitcher = ({ onChange, language }: LanguageSwitcherProps) => {
  return (
    <select value={language} onChange={onChange} id="language-switcher">
      <option value="en">EN</option>
      <option value="et">ET</option>
      <option value="th">TH</option>
    </select>
  );
};
