import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainMenuBlock } from './MainMenuBlock';

export default {
  title: 'MainMenuBlock',
  component: MainMenuBlock,
} as ComponentMeta<typeof MainMenuBlock>;

const Template: ComponentStory<typeof MainMenuBlock> = () => {
  return <MainMenuBlock />;
};

export const Primary = Template.bind({});
Primary.args = {};
