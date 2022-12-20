import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../config/redux/hooks';
import { setLoggedIn } from '../core/auth/redux/authSlice';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  const dispatch = useDispatch();
  const isLoggedIn = useAppSelector(({ auth }) => auth.isLoggedIn);

  useEffect(() => {
    dispatch(setLoggedIn());
  }, [dispatch]);

  return <Button disabled={isLoggedIn} {...args} />;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button MUI',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Button',
  disabled: false,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
