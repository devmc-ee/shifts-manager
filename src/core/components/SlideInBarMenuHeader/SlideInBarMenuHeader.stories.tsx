import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SLIDE_FROM_SIDE, SLIDE_IN_MENU_BLOCK_COMPONENT_NAME } from '../../../assets/menu/slideInMenuData';
import { SlideInBarMenuHeader, SlideInBarMenuHeaderProps } from './SlideInBarMenuHeader';

export default {
  title: 'SlideInBarMenuHeader',
  component: SlideInBarMenuHeader,
} as ComponentMeta<typeof SlideInBarMenuHeader>;

const Template: ComponentStory<typeof SlideInBarMenuHeader> = ({ from }: SlideInBarMenuHeaderProps) => {
  const { t } = useTranslation();
  const [headerTitle, setHeaderTitle] = useState('');
  const [componentName, setComponentName] = useState(SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.RIGHT_MENU);

  useEffect(() => {
    if (from === SLIDE_FROM_SIDE.LEFT) {
      setComponentName(SLIDE_IN_MENU_BLOCK_COMPONENT_NAME.LEFT_MENU);
    }
  }, [from]);

  useEffect(() => {
    const newTitle = t(`core.slideInBar.${componentName}.title`);
    setHeaderTitle(newTitle);
  }, [componentName, t]);

  return <SlideInBarMenuHeader from={from} title={headerTitle} />;
};

export const MainMenuHeader = Template.bind({});
MainMenuHeader.args = { from: SLIDE_FROM_SIDE.LEFT };

export const ProfileMenuHeader = Template.bind({});
ProfileMenuHeader.args = { from: SLIDE_FROM_SIDE.RIGHT };
