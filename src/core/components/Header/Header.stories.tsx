import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Header } from './Header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  const [selected, setSelected] = useState(false);

  const handleColorChange = () => {
    setSelected(() => true);
  };

  const HeaderProps = {
    ...args,
    companyName: 'Thai Food - Thai Cook',
    isSelected: selected,
    handleClick: handleColorChange,
  };

  return <Header {...HeaderProps} />;
};

export const Primary = Template.bind({});
