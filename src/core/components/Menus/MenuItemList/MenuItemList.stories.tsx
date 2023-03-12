import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItemList } from './MenuItemList';
import { MAIN_MENU_BLOCK, PROFILE_MENU_BLOCK, SLIDE_IN_MENU_BLOCK_COMPONENT_NAME } from '../../../../assets/menu/slideInMenuData';

export default {
  title: 'MenuItemList',
  component: MenuItemList,
} as ComponentMeta<typeof MenuItemList>;

const Template: ComponentStory<typeof MenuItemList> = (args) => {
  return <MenuItemList {...args} />;
};

export const LeftMenu = Template.bind({});
LeftMenu.args = { componentName: SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.LEFT_MENU, itemList: MAIN_MENU_BLOCK };

export const RightMenu = Template.bind({});
RightMenu.args = { componentName: SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.RIGHT_MENU, itemList: PROFILE_MENU_BLOCK };
