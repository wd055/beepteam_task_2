import classNames from 'classnames';
import React, { FC, ReactElement, MouseEvent } from 'react';
import './Button.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
	icon?: ReactElement;
	disabled?: boolean;
	onClick?: (e: MouseEvent) => void;
}

const Button: FC<ButtonProps> = ({ icon, children, disabled, onClick }) => {
	return (
		<button
			className={classNames('button', {
				button_disabled: disabled
			})}
			disabled={disabled}
			onClick={onClick}
		>
			{icon && <div className="button__icon">{icon}</div>}
			<div className="button__children">{children}</div>
		</button>
	);
};

export default Button;
