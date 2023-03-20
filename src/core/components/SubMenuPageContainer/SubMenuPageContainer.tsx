import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBack from '../../../assets/icons/arrow-back.svg';
import { useAppSelector } from '../../../config/redux/hooks';
import { AppState } from '../../../config/redux/store';
import { COLOR_VARIANTS } from '../../types/ColorVariants';
import { IconButtonWithLabel } from '../buttons/IconButton';

export interface SubMenuPageContainerProps {
  title: string;
  children: JSX.Element;
}

export const SubMenuPageContainer = ({ title, children }: SubMenuPageContainerProps): JSX.Element => {
  const slideInBarArgs = useAppSelector(({ core }: AppState) => core.slideInBar);

  useLayoutEffect(() => {
    if (!slideInBarArgs) {
      navigate(-1);
    }
  }, []);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="sub-menu-page-container">
      <div className="sub-menu-page-container__header">
        <div className="sub-menu-page-container__arrow-icon">
          <IconButtonWithLabel icon={<ArrowBack />} variant={COLOR_VARIANTS.PRIMARY_CONTRAST} handleClick={handleGoBack} />
        </div>
        <span className="sub-menu-page-container__header-title">{title}</span>
      </div>
      <div className="sub-menu-page-container__main-block">{children}</div>
    </div>
  );
};
