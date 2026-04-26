import { MotionConfig } from 'framer-motion';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { applyThemeToDocument, useThemeStore } from './stores/useThemeStore';
import { router } from './router';

export function App() {
	const mode = useThemeStore(state => state.mode);

	useEffect(() => {
		applyThemeToDocument(mode);
	}, [mode]);

	return (
		<MotionConfig reducedMotion="user">
			<RouterProvider router={router} />
		</MotionConfig>
	);
}
