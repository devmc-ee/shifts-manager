import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SLIDE_IN_MENU_BLOCK_COMPONENT_NAME } from '../../../assets/menu/slideInMenuData';
import { SlideInBarMenuHeader, SlideInBarMenuHeaderProps } from './SlideInBarMenuHeader';

export default {
  title: 'SlideInBarMenuHeader',
  component: SlideInBarMenuHeader,
} as ComponentMeta<typeof SlideInBarMenuHeader>;

const Template: ComponentStory<typeof SlideInBarMenuHeader> = ({ componentName }: SlideInBarMenuHeaderProps) => {
  const { t } = useTranslation();
  const [headerTitle, setHeaderTitle] = useState('');

  useEffect(() => {
    const newTitle = t(`core.slideInBar.${componentName}.title`);
    setHeaderTitle(newTitle);
  }, [componentName, t]);

  return <SlideInBarMenuHeader componentName={componentName} title={headerTitle} />;
};

export const MainMenuHeader = Template.bind({});
MainMenuHeader.args = { componentName: SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.LEFT_MENU };

export const ProfileMenuHeader = Template.bind({});
ProfileMenuHeader.args = { componentName: SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.RIGHT_MENU };
