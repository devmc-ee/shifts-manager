import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavMenu } from './NavMenu';
import icons from '../../../assets/icons/NavIconSet';
import { useAppDispatch, useAppSelector } from '../../../config/redux/hooks';
import { changeActiveRoute } from '../../redux/coreSlice';

export default {
  title: 'NavMenu',
  component: NavMenu,
  args: {
    icons,
  },
} as ComponentMeta<typeof NavMenu>;

const Template: ComponentStory<typeof NavMenu> = (args) => {
  const dispatch = useAppDispatch();
  const activeRoute = useAppSelector(({ core }) => core.activeRoute);

  const handleActiveRoute = (url: string) => {
    dispatch(changeActiveRoute(url));
  };

  const navMenuArgs = {
    ...args,
    activeRoute,
    onClick: handleActiveRoute,
  };

  return <NavMenu {...navMenuArgs} />;
};

export const Primary = Template.bind({});
Primary.args = {};
