import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { BurgerMenuIcon } from '../../../assets/icons/BurgerMenuIcon';
import { ProfileIcon } from '../../../assets/icons/ProfileIcon';
import { CustomIconButton } from './IconButton';

export default {
  title: 'CustomIconButton',
  component: CustomIconButton,
} as ComponentMeta<typeof CustomIconButton>;

const Template: ComponentStory<typeof CustomIconButton> = (args) => {
  const [styleVariant, setStyleVariant] = useState<'primary' | 'secondary' | undefined>(args.variant);

  const validVariants = ['primary', 'secondary'];
  const defaultVariant = 'primary';

  args.variant = validVariants.includes(`${styleVariant}`) ? styleVariant : defaultVariant;

  const handleColorChange = () => {
    setStyleVariant('secondary');
  };

  const CustomIconButtonProps = {
    ...args,
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
