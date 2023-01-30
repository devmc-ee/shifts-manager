import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderBarMenu } from './HeaderBarMenu';

export default {
  title: 'HeaderBarMenu',
  component: HeaderBarMenu,
} as ComponentMeta<typeof HeaderBarMenu>;

const Template: ComponentStory<typeof HeaderBarMenu> = (args) => {
  const HeaderProps = {
    ...args,
    companyName: 'Thai Food - Thai Cook',
  };

  return <HeaderBarMenu {...HeaderProps} />;
};

export const Primary = Template.bind({});
