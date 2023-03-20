import { SlideInBarMenuHeader } from '../SlideInBarMenuHeader/SlideInBarMenuHeader';
import classnames from 'classnames';
import { useState, useEffect } from 'react';

interface SlideInBarProps {
  children: JSX.Element;
  from?: string;
  open: boolean;
  title: string;
  handleClose: () => void;
}

export const SlideInBar = ({ children, open, title, handleClose, from }: SlideInBarProps) => {
  const [touched, setTouched] = useState(false);
  const [direction, setDirection] = useState(from);

  useEffect(() => {
    if (!touched && open) {
      setTouched(true);
    }
  }, [open, touched]);

  useEffect(() => {
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
          <SlideInBarMenuHeader title={title} from={from} />
          <div className="slide-in-menu__item-list-block">{children}</div>
        </div>
      </div>
    </div>
  );
};
