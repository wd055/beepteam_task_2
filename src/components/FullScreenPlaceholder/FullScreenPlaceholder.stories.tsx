import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FullScreenPlaceholder from './FullScreenPlaceholder';
import { Icon56MailOutline } from '@vkontakte/icons';

export default {
	title: 'Example/FullScreenPlaceholder',
	component: FullScreenPlaceholder,
	argTypes: {
		icon: {
			options: ['С иконкой', 'Без иконки'],
			mapping: {
				'С иконкой': <Icon56MailOutline />,
				'Без иконки': null
			},
			defaultValue: 'С иконкой'
		}
	}
} as ComponentMeta<typeof FullScreenPlaceholder>;

const Template: ComponentStory<typeof FullScreenPlaceholder> = (args) => (
	<FullScreenPlaceholder {...args} />
);

export const Default = Template.bind({});
Default.args = {
	children: 'текст под иконкой'
};
