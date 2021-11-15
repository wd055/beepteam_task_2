import React, { FC, useState } from 'react';
import { IEmail } from '../../models/email';
import EmailItem from '../EmailItem/EmailItem';

interface EmailsProps {
	emails: IEmail[];
	selectedEmails?: number[];
	setSelectedEmails?: (emails: number[]) => void;
}

const Emails: FC<EmailsProps> = ({ emails, selectedEmails, setSelectedEmails }) => {
	const [prevEmail, setPrevEmail] = useState<number>(-1);

	const onSelect = (email: number, select: boolean, multiple?: boolean): void => {
		if (selectedEmails && setSelectedEmails) {
			if (!multiple || prevEmail === -1) {
				const index = selectedEmails.indexOf(email);
				if (select && index === -1) {
					setSelectedEmails([...selectedEmails, email]);
				} else if (!select && index !== -1) {
					setSelectedEmails([...selectedEmails.filter((item) => item !== email)]);
				}
			} else {
				const min = Math.min(prevEmail, email);
				const max = Math.max(prevEmail, email);
				emails.forEach((email) => {
					if (email.id >= min && email.id <= max && selectedEmails) {
						const index = selectedEmails.indexOf(email.id);
						if (select && index === -1) {
							selectedEmails = [...selectedEmails, email.id];
						} else if (!select && index !== -1) {
							selectedEmails = [
								...selectedEmails.filter((item) => item !== email.id)
							];
						}
					}
				});
				setSelectedEmails([...selectedEmails]);
			}
			setPrevEmail(email);
		}
	};

	return (
		<div>
			{emails.map((email) => (
				<EmailItem
					key={email.id}
					email={email}
					select={selectedEmails && selectedEmails?.indexOf(email.id) !== -1}
					onSelect={selectedEmails && setSelectedEmails && onSelect}
				/>
			))}
		</div>
	);
};

export default Emails;
