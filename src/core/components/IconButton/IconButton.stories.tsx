import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { BurgerMenuIcon } from '../../../assets/icons/BurgerMenuIcon';
import { ProfileIcon } from '../../../assets/icons/ProfileIcon';
import { CustomIconButton, styleVariant } from './IconButton';

export default {
  title: 'CustomIconButton',
  component: CustomIconButton,
} as ComponentMeta<typeof CustomIconButton>;

const Template: ComponentStory<typeof CustomIconButton> = (args) => {
  const [style, setStyle] = useState<styleVariant.primary | styleVariant.secondary | undefined>(styleVariant.primary);

  const handleColorChange = () => {
    setStyle(styleVariant.secondary);
  };

  const CustomIconButtonProps = {
    ...args,
    variant: style,
    handleClick: handleColorChange,
  };

  return <CustomIconButton {...CustomIconButtonProps} />;
};

export const Profile = Template.bind({});
Profile.args = {
  icon: <ProfileIcon />,
};

export const Menu = Template.bind({});
Menu.args = {
  icon: <BurgerMenuIcon />,
};
