import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderBar } from './HeaderBar';

export default {
  title: 'HeaderBar',
  component: HeaderBar,
} as ComponentMeta<typeof HeaderBar>;

const Template: ComponentStory<typeof HeaderBar> = (args) => {
  const HeaderBarProps = {
    ...args,
    title: 'Thai Food - Thai Cook',
  };

  return <HeaderBar {...HeaderBarProps} />;
};

export const Primary = Template.bind({});
