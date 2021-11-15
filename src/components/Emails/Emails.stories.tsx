import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Emails from './Emails';
import { emails } from '../../data.json';

export default {
	title: 'Example/Emails',
	component: Emails
} as ComponentMeta<typeof Emails>;

const Template: ComponentStory<typeof Emails> = (args) => <Emails {...args} />;

export const Default = Template.bind({});
Default.args = {
	emails: emails
};
