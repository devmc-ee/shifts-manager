import BurgerMenuIcon from '../../../assets/icons/burger-menu-icon.svg';
import ProfileIcon from '../../../assets/icons/profile-icon.svg';
import { useAppDispatch } from '../../../config/redux/hooks';
import { COLOR_VARIANTS } from '../../types/ColorVariants';
import { IconButtonWithLabel } from '../buttons/IconButton';
import { openSlideInBar } from '../../redux/coreSlice';
import { SLIDE_FROM_SIDE, SLIDE_IN_MENU_BLOCK_COMPONENT_NAME } from '../../../config/slideInMenuConfig';

interface HeaderBarProps {
  title: string;
}

export const HeaderBar = ({ title }: HeaderBarProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="header-bar">
      <IconButtonWithLabel
        handleClick={() => dispatch(openSlideInBar({ from: SLIDE_FROM_SIDE.LEFT, componentName: SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.LEFT_MENU }))}
        variant={COLOR_VARIANTS.PRIMARY_CONTRAST}
        icon={<BurgerMenuIcon />}
      />
      <div className="header-title">{title}</div>
      <IconButtonWithLabel
        handleClick={() => dispatch(openSlideInBar({ from: SLIDE_FROM_SIDE.RIGHT, componentName: SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.RIGHT_MENU }))}
        variant={COLOR_VARIANTS.PRIMARY_CONTRAST}
        icon={<ProfileIcon />}
      />
    </div>
  );
};
