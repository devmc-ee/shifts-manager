import { LanguageSwitcher } from '../LanguageSwitcher';
import ArrowDown from '../../../assets/icons/arrow-down.svg';

export interface SlideInBarMenuHeaderProps {
  title: string;
  hasLanguageSwitcher: boolean;
}

export const SlideInBarMenuHeader = ({ title, hasLanguageSwitcher }: SlideInBarMenuHeaderProps) => {
  return (
    <div className="slide-in-bar-menu__nav-header">
      <span className="slide-in-bar-menu__title">{title}</span>
      {hasLanguageSwitcher && <LanguageSwitcher icon={ArrowDown} isStandardSize={false} />}
    </div>
  );
};
