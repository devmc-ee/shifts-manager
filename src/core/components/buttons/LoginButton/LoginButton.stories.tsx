import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginButton } from './LoginButton';

export default {
    title: 'LoginButton',
    component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = (args) => <LoginButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Login Button',
};

export const Enabled = Template.bind({});
Enabled.args = {
    disabled: false,
    label: 'Login Button',
};

export const Loading = Template.bind({});
Loading.args = {
    label: 'Login Button',
    loading: true,
    loadingPosition: 'end',
};

export const Error = Template.bind({});
Error.args = {
    label: 'Login Button',
    fullWidth: false,
};

export const Success = Template.bind({});
Success.args = {
    label: 'Login Button',
};
