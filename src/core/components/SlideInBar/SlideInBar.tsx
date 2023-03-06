import classnames from 'classnames';
import { useState, useEffect } from 'react';
import { SLIDE_FROM_SIDE } from '../SlideInProvider/SlideInProvider';

interface SlideInBarProps {
  children: JSX.Element;
  from?: string;
  open: boolean;
  title: string;
  handleClose: () => void;
}

export const enum SLIDE_IN_BAR_TYPE {
  slideInBarBurger = 'burger',
  slideInBarProfile = 'profile',
}

export const SlideInBar = ({ children, open, title, handleClose, from = SLIDE_FROM_SIDE.LEFT }: SlideInBarProps) => {
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (!touched && open) {
      setTouched(true);
    }
  }, [open]);

  const slideInBarClasses = classnames(
    'slide-in-bar',
    { [`slide-in--open-${from}`]: open },
    { [`slide-in--close-${from}`]: touched && !open },
    { [`slide-in--hidden-${from}`]: !open }
  );
  const overlayClasses = classnames('slide-in-provider-overlay', { [`slide-in-provider-overlay--${'visible'}`]: open });

  return (
    <div className="root slide-in-provider">
      <div role="button" tabIndex={-1} onClick={handleClose} onKeyDown={handleClose} className={overlayClasses} />
      <div className="slide-in-provider">
        <div className={slideInBarClasses}>
          <div className="slide-in-nav-header">
            <span className="slide-in-title">{title}</span>
          </div>
          <div className="slide-in-content">{children}</div>
        </div>
      </div>
    </div>
  );
};
