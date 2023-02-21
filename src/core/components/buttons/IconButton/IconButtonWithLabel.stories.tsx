import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BurgerMenuIcon } from '../../../../assets/icons';
import { COLOR_VARIANTS } from '../../../types/ColorVariants';
import { IconButtonWithLabel } from './IconButtonWithLabel';
import ProfileIcon from '../../../../assets/icons/profile-icon.svg';

console.log(ProfileIcon);

export default {
  title: 'Buttons/IconButtonWithLabel',
  component: IconButtonWithLabel,
} as ComponentMeta<typeof IconButtonWithLabel>;

const Template: ComponentStory<typeof IconButtonWithLabel> = (args) => {
  const iconButtonArgs = {
    ...args,
  };

  return (
    <div style={{ padding: '10px', display: 'inline-block', backgroundColor: args.variant === COLOR_VARIANTS.PRIMARY_CONTRAST ? 'black' : 'white' }}>
      <IconButtonWithLabel {...iconButtonArgs} />
    </div>
  );
};

export const Profile = Template.bind({});
Profile.args = {
  icon: <ProfileIcon />,
  variant: COLOR_VARIANTS.PRIMARY,
};

export const ProfilePrimaryContrast = Template.bind({});
ProfilePrimaryContrast.args = {
  icon: <ProfileIcon />,
  variant: COLOR_VARIANTS.PRIMARY_CONTRAST,
  label: 'white',
};

export const ProfileSecondaryVariant = Template.bind({});
ProfileSecondaryVariant.args = {
  icon: <ProfileIcon />,
  variant: COLOR_VARIANTS.SECONDARY,
};

export const Menu = Template.bind({});
Menu.args = {
  icon: <BurgerMenuIcon />,
};

export const MenuWithCustomClasses = Template.bind({});
MenuWithCustomClasses.args = {
  icon: <BurgerMenuIcon />,
  customClasses: 'test-class extra-test-class',
  label: 'label',
};
