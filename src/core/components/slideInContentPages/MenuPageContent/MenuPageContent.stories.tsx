import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuPageContent } from './MenuPageContent';

export default {
  title: 'MenuPageContent',
  component: MenuPageContent,
} as ComponentMeta<typeof MenuPageContent>;

const Template: ComponentStory<typeof MenuPageContent> = () => {
  return <MenuPageContent />;
};

export const Primary = Template.bind({});
Primary.args = {};
