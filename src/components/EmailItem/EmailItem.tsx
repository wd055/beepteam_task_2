import classNames from 'classnames';
import React, { FC, MouseEvent } from 'react';
import { IEmail } from '../../models/email';
import './EmailItem.css';

interface EmailItemProps {
	email: IEmail;
	select?: boolean;
	onSelect?: (email: number, select: boolean, multiple?: boolean) => void;
}

const EmailItem: FC<EmailItemProps> = ({ email, select, onSelect }) => {
	const toggleChecked = (e: MouseEvent): void => {
		if (onSelect) {
			onSelect(email.id, !select, e.shiftKey);
		}
	};

	const onChange = (): void => {
		if (onSelect) {
			onSelect(email.id, !select);
		}
	};


	return (
		<div
			className={classNames('email-item', {
				'email-item_select': select
			})}
			onClick={toggleChecked}
		>
			<div className="email-item__avatar">
				<input
					className="email-item__checkbox"
					type="checkbox"
					checked={select}
					onChange={onChange}
				/>
				<img className="email-item__img" src={email.avatar} alt="аватар" />
			</div>
			<div className="email-item__content ellipsis">
				<div className="email-item__sender nowrap align-center">{email.sender}</div>
				<div className="email-item__theme nowrap align-center">{email.theme}</div>
				<div className="email-item__snippet ellipsis align-center">{email.snippet}</div>
			</div>
		</div>
	);
};

export default EmailItem;
