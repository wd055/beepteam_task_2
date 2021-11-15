import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import EmailItem from './EmailItem';
import { emails } from '../../data.json';

describe('Chtck select email',  () => {
	it('checkbox event', async () => {
		const { container } = render(<EmailItem email={emails[0]} />);
		const checkbox = container.getElementsByClassName(
			'email-item__checkbox'
		)[0] as HTMLInputElement;
		const emailItem = container.getElementsByClassName('email-item')[0] as HTMLElement;
		expect(emailItem.classList).not.toContain('email-item_select');
		expect(checkbox.checked).toBeFalsy;
		fireEvent(checkbox, new MouseEvent('click'));
		expect(checkbox.checked).toBeTruthy;
		await waitFor(() => {
			expect(container.getElementsByClassName('email-item_select')[0]).toBeInTheDocument;
		});
	});
});
