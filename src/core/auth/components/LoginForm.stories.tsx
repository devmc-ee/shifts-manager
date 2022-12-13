import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from './LoginForm';

export default {
    title: 'LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: '[ta-rung]',
};
