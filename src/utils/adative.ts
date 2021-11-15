import { useState, useEffect } from 'react';

interface IWindowDimensions {
	width: number;
	height: number;
}

const getWindowDimensions = (): IWindowDimensions => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height
	};
};

export const useWindowDimensions = (): IWindowDimensions => {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions(getWindowDimensions());
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
};

const checkTouch = (): boolean => {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};
const checkMouse = (): boolean => {
	try {
		return matchMedia('(pointer:fine)').matches;
	} catch (error) {
		return true;
	}
};

export const usePlatfowmClasses = (): string => {
	const { width } = useWindowDimensions();
	const [classes, setClasses] = useState<string[]>([]);

	useEffect(() => {
		const classes = [];
		if (width < 700) {
			classes.push('mobile');
		} else if (width < 1200) {
			classes.push('tablet');
		} else {
			classes.push('desktop');
		}

		if (checkTouch()) {
			classes.push('touch');
		}
		if (checkMouse()) {
			classes.push('mouse');
		}

		setClasses(classes);
	}, [width]);

	return classes.join(' ');
};
