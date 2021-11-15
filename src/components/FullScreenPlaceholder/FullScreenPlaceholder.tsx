import React, { FC, ReactNode } from 'react';
import './FullScreenPlaceholder.css';

interface FullScreenPlaceholderProps {
	icon: ReactNode;
	children?: ReactNode;
}

const FullScreenPlaceholder: FC<FullScreenPlaceholderProps> = ({ icon, children }) => {
	return (
		<div className="placeholder">
			<div className="placeholder__content">
				<div className="placeholder__children">{icon}</div>
				<div className="placeholder__children">{children}</div>
			</div>
		</div>
	);
};

export default FullScreenPlaceholder;
