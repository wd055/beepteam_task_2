import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Emails from './Emails';
import { emails } from '../../data.json';

describe('Email list', () => {
	afterAll(() => {
		jest.resetModules();
	});
	test.each([
		{
			emails: emails
		},
		{
			emails: [emails[0]]
		},
		{
			emails: []
		}
	])('Корректная работа с любым массивом писем', async ({ emails }) => {
		const { container } = render(<Emails emails={emails} />);
		await waitFor(() => {
			expect(container.getElementsByClassName('email-list').length).not.toEqual(0);
		});
	});
});
