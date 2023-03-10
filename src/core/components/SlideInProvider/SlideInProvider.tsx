import { useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../config/redux/hooks';
import { closeSlideInBars } from '../../redux/coreSlice';
import { SlideInBar } from '../SlideInBar';
import { t } from 'i18next';
import { SLIDE_IN_MENU_BLOCKS_COMPONENT_MAP, SLIDE_IN_MENU_BLOCK_COMPONENT_NAME } from '../../../config/slideInMenuConfig';

const portalDivElement = document.createElement('div');
portalDivElement.id = 'portal-root';

export const SlideInProvider = () => {
  const slideInBarArgs = useAppSelector(({ core }) => core.slideInBar);
  const dispatch = useAppDispatch();
  const [Component, setComponent] = useState(<></>);
  const [menuTitle, setMenuTitle] = useState('');

  const handleClose = () => {
    dispatch(closeSlideInBars());
    setTimeout(() => {
      setComponent(<></>);
      if (document.querySelector('div#portal-root')) {
        document.body.removeChild(portalDivElement);
      }
    }, 225);
  };

  useLayoutEffect(() => {
    if (slideInBarArgs) document.body.appendChild(portalDivElement);
  }, [slideInBarArgs]);

  useEffect(() => {
    if (slideInBarArgs) {
      setComponent(SLIDE_IN_MENU_BLOCKS_COMPONENT_MAP[slideInBarArgs.componentName as SLIDE_IN_MENU_BLOCK_COMPONENT_NAME]);

      const translation = t(`core.slideInBar.${slideInBarArgs?.componentName}.title`);
      setMenuTitle(translation);
    }
  }, [slideInBarArgs]);

  return createPortal(
    <SlideInBar handleClose={handleClose} title={menuTitle} open={!!slideInBarArgs} from={slideInBarArgs?.from}>
      {Component}
    </SlideInBar>,
    portalDivElement
  );
};
