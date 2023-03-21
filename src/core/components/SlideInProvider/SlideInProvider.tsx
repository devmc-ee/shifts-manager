import { useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../config/redux/hooks';
import { closeSlideInBar } from '../../redux/coreSlice';
import { SlideInBar } from '../SlideInBar';
import { useTranslation } from 'react-i18next';
import { SLIDE_IN_MENU_BLOCKS_COMPONENT_MAP, SLIDE_IN_MENU_BLOCK_COMPONENT_NAME } from '../../../assets/menu/slideInMenuData';
import { AppState } from '../../../config/redux/store';

const portalDivElement = document.createElement('div');
portalDivElement.id = 'portal-root';

export const SlideInProvider = (): JSX.Element => {
  const slideInBarArgs = useAppSelector(({ core }: AppState) => core.slideInBar);

  const dispatch = useAppDispatch();
  const [Component, setComponent] = useState(<></>);
  const [menuTitle, setMenuTitle] = useState('');
  const { t } = useTranslation();

  const handleClose = () => {
    dispatch(closeSlideInBar());
    setTimeout(() => {
      setComponent(<></>);
      if (document.querySelector('div#portal-root')) {
        document.body.removeChild(portalDivElement);
      }
    }, 225);
  };

  useLayoutEffect(() => {
    if (slideInBarArgs) document.body.appendChild(portalDivElement);
    if (!slideInBarArgs) handleClose();
  }, [slideInBarArgs]);

  useEffect(() => {
    if (slideInBarArgs) {
      const Component = SLIDE_IN_MENU_BLOCKS_COMPONENT_MAP[slideInBarArgs.componentName as SLIDE_IN_MENU_BLOCK_COMPONENT_NAME];
      setComponent(<Component />);
    }
  }, [slideInBarArgs]);

  useEffect(() => {
    if (slideInBarArgs) {
      const translation = t(`core.slideInBar.${slideInBarArgs.componentName}.title`);
      setMenuTitle(translation);
    }
  }, [slideInBarArgs, t]);

  return createPortal(
    <SlideInBar handleClose={handleClose} title={menuTitle} open={!!slideInBarArgs} from={slideInBarArgs?.from} componentName={slideInBarArgs?.componentName}>
      {Component}
    </SlideInBar>,
    portalDivElement
  );
};
