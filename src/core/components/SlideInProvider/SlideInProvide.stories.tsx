import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useAppDispatch } from '../../../config/redux/hooks';
import { openSlideInBar } from '../../redux/coreSlice';
import { SlideInProvider, SLIDE_FROM_SIDE, SLIDE_IN_CONTENT_COMPONENT_NAME } from './SlideInProvider';

export default {
  title: 'SlideInProvider',
  component: SlideInProvider,
} as ComponentMeta<typeof SlideInProvider>;

const Template: ComponentStory<typeof SlideInProvider> = () => {
  const dispatch = useAppDispatch();

  const handleOpenSlideInProvider = (from: string, componentName: string): void => {
    dispatch(openSlideInBar({ from, componentName }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={() => handleOpenSlideInProvider(SLIDE_FROM_SIDE.LEFT, SLIDE_IN_CONTENT_COMPONENT_NAME.LEFT_MENU)}>Click to add Left Menu</button>
      <button onClick={() => handleOpenSlideInProvider(SLIDE_FROM_SIDE.RIGHT, SLIDE_IN_CONTENT_COMPONENT_NAME.RIGHT_MENU)}>Click to add Right Menu</button>
      <SlideInProvider />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
