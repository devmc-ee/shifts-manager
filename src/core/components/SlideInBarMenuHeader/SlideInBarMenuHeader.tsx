import { LanguageSwitcher } from '../LanguageSwitcher';
import ArrowDown from '../../../assets/icons/arrow-down.svg';
import { SLIDE_FROM_SIDE } from '../../../assets/menu/slideInMenuData';

export interface SlideInBarMenuHeaderProps {
  title: string;
  from: string | undefined;
}

export const SlideInBarMenuHeader = ({ title, from }: SlideInBarMenuHeaderProps) => {
  return (
    <div className="slide-in-bar-menu__nav-header">
      <span className="slide-in-bar-menu__title">{title}</span>
      {SLIDE_FROM_SIDE.RIGHT === from && <LanguageSwitcher icon={ArrowDown} isStandardSize={false} />}
    </div>
  );
};
