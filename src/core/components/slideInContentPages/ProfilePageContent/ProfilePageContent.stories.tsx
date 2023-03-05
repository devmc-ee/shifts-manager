import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfilePageContent } from './ProfilePageContent';

export default {
  title: 'ProfilePageContent',
  component: ProfilePageContent,
} as ComponentMeta<typeof ProfilePageContent>;

const Template: ComponentStory<typeof ProfilePageContent> = () => {
  return <ProfilePageContent />;
};

export const Primary = Template.bind({});
Primary.args = {};
