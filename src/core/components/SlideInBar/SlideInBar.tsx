import { SlideInBarMenuHeader } from '../SlideInBarMenuHeader/SlideInBarMenuHeader';
import classnames from 'classnames';
import { useState, useEffect, useLayoutEffect } from 'react';
import { SLIDE_IN_MENU_BLOCK_COMPONENT_NAME } from '../../../assets/menu/slideInMenuData';

interface SlideInBarProps {
  children: JSX.Element;
  from?: string;
  open: boolean;
  title: string;
  componentName: string;
  handleClose: () => void;
}

export const SlideInBar = ({ children, open, title, handleClose, from, componentName }: SlideInBarProps) => {
  const [touched, setTouched] = useState(false);
  const [direction, setDirection] = useState('');

  useEffect(() => {
    if (!touched && open) {
      setTouched(true);
    }
  }, [open, touched]);

  useLayoutEffect(() => {
    if (from) {
      setDirection(from);
    }
  }, [from]);

  const slideInBarClasses = classnames(
    'slide-in-bar',
    { [`slide-in--open-${direction}`]: open },
    { [`slide-in--close-${direction}`]: touched && !open },
    { [`slide-in--hidden-${direction}`]: !open }
  );

  const overlayClasses = classnames('slide-in-menu__overlay', { [`slide-in-menu__overlay--${'visible'}`]: open });

  return (
    <div className="root slide-in-menu">
      <div role="button" tabIndex={-1} onClick={handleClose} onKeyDown={handleClose} className={overlayClasses} />
      <div className="slide-in-menu">
        <div className={slideInBarClasses}>
          <SlideInBarMenuHeader title={title} hasLanguageSwitcher={SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.RIGHT_MENU === componentName} />
          <div className="slide-in-menu__item-list-block">{children}</div>
        </div>
      </div>
    </div>
  );
};
