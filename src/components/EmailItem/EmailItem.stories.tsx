import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EmailItem from './EmailItem';
import { emails } from '../../data.json';

export default {
	title: 'Example/EmailItem',
	component: EmailItem
} as ComponentMeta<typeof EmailItem>;

const Template: ComponentStory<typeof EmailItem> = (args) => <EmailItem {...args} />;

export const Default = Template.bind({});
Default.args = {
	email: emails[0]
};
