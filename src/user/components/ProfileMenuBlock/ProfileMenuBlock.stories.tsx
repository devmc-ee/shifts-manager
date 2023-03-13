import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileMenuBlock } from './ProfileMenuBlock';

export default {
  title: 'ProfileMenuBlock',
  component: ProfileMenuBlock,
} as ComponentMeta<typeof ProfileMenuBlock>;

const Template: ComponentStory<typeof ProfileMenuBlock> = () => {
  return <ProfileMenuBlock />;
};

export const Primary = Template.bind({});
Primary.args = {};
