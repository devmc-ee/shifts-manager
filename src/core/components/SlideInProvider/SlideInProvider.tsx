import { useRef, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../../config/redux/hooks';
import { closeSlideInBars } from '../../redux/coreSlice';
import { SlideInBar } from '../SlideInBar';
import { MenuPageContent } from '../slideInContentPages/MenuPageContent';
import { ProfilePageContent } from '../slideInContentPages/ProfilePageContent';

export const enum SLIDE_IN_CONTENT_COMPONENT_NAME {
  LEFT_MENU = 'leftMenu',
  RIGHT_MENU = 'rightMenu',
}

export const SLIDE_IN_CONTENT_COMPONENT_MAP = {
  [SLIDE_IN_CONTENT_COMPONENT_NAME.LEFT_MENU]: MenuPageContent,
  [SLIDE_IN_CONTENT_COMPONENT_NAME.RIGHT_MENU]: ProfilePageContent,
};

export const enum SLIDE_FROM_SIDE {
  LEFT = 'left',
  RIGHT = 'right',
}

export const SlideInProvider = () => {
  const slideInBarsConfigsArray = useAppSelector(({ core }) => core.slideInBarConfigs);
  const [Component, setComponent] = useState<JSX.Element | null>(null);
  const [slideFrom, setSlideFrom] = useState(SLIDE_FROM_SIDE.LEFT);
  const title = slideFrom === 'left' ? 'Menu' : 'Profile';
  const dispatch = useAppDispatch();

  const portalWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClose = () => {
    dispatch(closeSlideInBars());
    setTimeout(() => {
      if (portalWrapperRef.current && portalWrapperRef.current.parentNode === document.body) {
        document.body.removeChild(portalWrapperRef.current);
      }
    }, 225);
  };

  useLayoutEffect(() => {
    if (!slideInBarsConfigsArray.length) {
      handleClose();

      return;
    }

    for (const slideInBarConfig of slideInBarsConfigsArray) {
      const { componentName, from } = slideInBarConfig;
      if (componentName in SLIDE_IN_CONTENT_COMPONENT_MAP) {
        setComponent(SLIDE_IN_CONTENT_COMPONENT_MAP[componentName]);
        setSlideFrom(from);
      }
    }

    portalWrapperRef.current = document.createElement('div');
    document.body.appendChild(portalWrapperRef.current);
  }, [slideInBarsConfigsArray]);

  return portalWrapperRef.current
    ? createPortal(
        <SlideInBar handleClose={handleClose} title={title} open={!!slideInBarsConfigsArray.length} from={slideFrom}>
          {Component as JSX.Element}
        </SlideInBar>,
        portalWrapperRef.current
      )
    : null;
};
