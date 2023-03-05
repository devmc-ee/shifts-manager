import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SlideInBar } from './SlideInBar';
import { SLIDE_FROM_SIDE } from '../SlideInProvider/SlideInProvider';
import { useState } from 'react';

export default {
  title: 'SlideInBar',
  component: SlideInBar,
} as ComponentMeta<typeof SlideInBar>;

const Template: ComponentStory<typeof SlideInBar> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const slideInProps = {
    ...args,
    open: isOpen,
    handleClose: handleClick,
  };

  return (
    <>
      <button onClick={handleClick}>Open</button>
      <SlideInBar {...slideInProps}>
        <span>CONTENT</span>
      </SlideInBar>
    </>
  );
};

export const Left = Template.bind({});
Left.args = { from: SLIDE_FROM_SIDE.LEFT };

export const Right = Template.bind({});
Right.args = { from: SLIDE_FROM_SIDE.RIGHT };
