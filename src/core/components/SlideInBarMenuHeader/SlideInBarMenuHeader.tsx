import { LanguageSwitcher } from '../LanguageSwitcher';
import ArrowDown from '../../../assets/icons/arrow-down.svg';
import { SLIDE_IN_MENU_BLOCK_COMPONENT_NAME } from '../../../assets/menu/slideInMenuData';

export interface SlideInBarMenuHeaderProps {
  title: string;
  componentName: string | undefined;
}

export const SlideInBarMenuHeader = ({ title, componentName }: SlideInBarMenuHeaderProps) => {
  return (
    <div className="slide-in-bar-menu__nav-header">
      <span className="slide-in-bar-menu__title">{title}</span>
      {SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.RIGHT_MENU === componentName && <LanguageSwitcher icon={ArrowDown} isStandardSize={false} />}
    </div>
  );
};
