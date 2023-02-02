import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BurgerMenuIcon } from '../../../assets/icons/BurgerMenuIcon';
import { ProfileIcon } from '../../../assets/icons/ProfileIcon';
import { IconButtonWithLabel } from './IconButton';

export default {
  title: 'IconButtonWithLabel',
  component: IconButtonWithLabel,
} as ComponentMeta<typeof IconButtonWithLabel>;

const Template: ComponentStory<typeof IconButtonWithLabel> = (IconButtonProp) => {
  return <IconButtonWithLabel {...IconButtonProp} />;
};

export const Profile = Template.bind({});
Profile.args = {
  icon: <ProfileIcon />,
};

export const Menu = Template.bind({});
Menu.args = {
  icon: <BurgerMenuIcon />,
};
