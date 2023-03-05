import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItemList } from './MenuItemList';
import { SLIDE_FROM_SIDE } from '../../SlideInProvider/SlideInProvider';
import { SLIDE_IN_MENU_LEFT, SLIDE_IN_MENU_RIGHT } from '../../../../config/slideInContentPageConfig';

export default {
  title: 'MenuItemList',
  component: MenuItemList,
} as ComponentMeta<typeof MenuItemList>;

const Template: ComponentStory<typeof MenuItemList> = (args) => {
  return <MenuItemList {...args} />;
};

export const LeftMenu = Template.bind({});
LeftMenu.args = { direction: SLIDE_FROM_SIDE.LEFT, itemList: SLIDE_IN_MENU_LEFT };

export const RightMenu = Template.bind({});
RightMenu.args = { direction: SLIDE_FROM_SIDE.RIGHT, itemList: SLIDE_IN_MENU_RIGHT };
