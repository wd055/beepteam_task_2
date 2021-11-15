import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders App', () => {
	render(<App />);
	const linkElement = screen.getByText(/Удалить/i);
	expect(linkElement).toBeInTheDocument();
});

describe('Check select email', () => {
	test('default state', () => {
		render(<App />);
		expect(screen.getByText(/Удалить/i).parentElement).toBeDisabled();
	});
});
