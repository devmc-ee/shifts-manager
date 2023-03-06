import BurgerMenuIcon from '../../../assets/icons/burger-menu-icon.svg';
import ProfileIcon from '../../../assets/icons/profile-icon.svg';
import { useAppDispatch } from '../../../config/redux/hooks';
import { COLOR_VARIANTS } from '../../types/ColorVariants';
import { IconButtonWithLabel } from '../buttons/IconButton';
import { SLIDE_FROM_SIDE, SLIDE_IN_CONTENT_COMPONENT_NAME } from '../SlideInProvider/SlideInProvider';
import { openSlideInBar } from '../../redux/coreSlice';

interface HeaderBarProps {
  title: string;
}

export const HeaderBar = ({ title }: HeaderBarProps) => {
  const dispatch = useAppDispatch();

  const handleButtonClick = (direction: string, componentName: string) => () => {
    dispatch(openSlideInBar({ from: direction, componentName }));
  };

  return (
    <div className="header-bar">
      <IconButtonWithLabel
        handleClick={handleButtonClick(SLIDE_FROM_SIDE.LEFT, SLIDE_IN_CONTENT_COMPONENT_NAME.LEFT_MENU)}
        variant={COLOR_VARIANTS.PRIMARY_CONTRAST}
        icon={<BurgerMenuIcon />}
      />
      <div className="header-title">{title}</div>
      <IconButtonWithLabel
        handleClick={handleButtonClick(SLIDE_FROM_SIDE.RIGHT, SLIDE_IN_CONTENT_COMPONENT_NAME.RIGHT_MENU)}
        variant={COLOR_VARIANTS.PRIMARY_CONTRAST}
        icon={<ProfileIcon />}
      />
    </div>
  );
};
