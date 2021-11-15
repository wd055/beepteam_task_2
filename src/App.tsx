import React, { FC, useState } from 'react';
import './App.css';
import { IEmail } from './models/email';
import importEmails from './data.json';
import Emails from './components/Emails/Emails';
import { usePlatfowmClasses } from './utils/adative';
import classNames from 'classnames';
import Button from './components/Button/Button';
import { Icon24DeleteOutline, Icon56MailOutline } from '@vkontakte/icons';
import FullScreenPlaceholder from './components/FullScreenPlaceholder/FullScreenPlaceholder';

const App: FC = () => {
	const [emails, setEmails] = useState<IEmail[]>(importEmails.emails);
	const adaptiveClasses = usePlatfowmClasses();
	const [selectedEmails, setSelectedEmails] = useState<number[]>([]);

	const deleteEmails = () => {
		setEmails([...emails.filter((email) => selectedEmails.indexOf(email.id) === -1)]);
		setSelectedEmails([]);
	};

	return (
		<div className={classNames('App', adaptiveClasses)}>
			<Button
				onClick={deleteEmails}
				icon={<Icon24DeleteOutline />}
				disabled={selectedEmails.length === 0}
			>
				Удалить
			</Button>
			<Emails
				emails={emails}
				selectedEmails={selectedEmails}
				setSelectedEmails={setSelectedEmails}
			/>
			{emails.length === 0 && (
				<FullScreenPlaceholder icon={<Icon56MailOutline />}>
					Нет писем
				</FullScreenPlaceholder>
			)}
		</div>
	);
};

export default App;
