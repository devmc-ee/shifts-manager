import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoginForm } from './LoginForm';

export default {
    title: 'LoginForm',
    component: LoginForm,
    argTypes: {
        handleChangeUserName: {
            action: 'user name',
        },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => {
    // const [name,setName]
    // const loginFormProps = {
    //     ...args,
    //     handleChangeUserName: ({ target }: ChangeEvent<HTMLInputElement>) => void;
    //     handleChangePassword: ({ target }: ChangeEvent<HTMLInputElement>) => void;
    //     submitHandle: () => void;
    // }
    return <LoginForm {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    title: '[ta-rung]',
};
