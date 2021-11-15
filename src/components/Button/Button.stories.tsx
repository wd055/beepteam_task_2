import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { Icon24DeleteOutline } from '@vkontakte/icons';

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		icon: {
			options: ['С иконкой', 'Без иконки'],
			mapping: {
				'С иконкой': <Icon24DeleteOutline />,
				'Без иконки': null
			}
		}
	}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Button'
};
