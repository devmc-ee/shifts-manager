import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubMenuPageContainer } from './SubMenuPageContainer';
import { Contacts } from '../../../pages/Contacts';

export default {
  title: 'SubMenuPageContainer',
  component: SubMenuPageContainer,
} as ComponentMeta<typeof SubMenuPageContainer>;

const Template: ComponentStory<typeof SubMenuPageContainer> = (args) => {
  const { title, children } = args;

  return <SubMenuPageContainer title={title}>{children}</SubMenuPageContainer>;
};

export const ContactsPage = Template.bind({});
ContactsPage.args = {
  title: 'Contacts',
  children: Contacts(),
};
