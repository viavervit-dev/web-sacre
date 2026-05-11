import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader/SiteHeader';
import { useThemeStore } from '@/stores/useThemeStore';
import './style.css';

function scrollToTop() {
	try {
		window.scrollTo({ left: 0, top: 0 });
	} catch {
		// jsdom no implementa scrollTo; en runtime real el navegador lo resuelve.
	}
}

function scrollToHash(hash: string) {
	const targetId = decodeURIComponent(hash.slice(1));
	const target = document.getElementById(targetId);

	if (!target || typeof target.scrollIntoView !== 'function') {
		return;
	}

	target.scrollIntoView({ block: 'start' });
}

export function RootPage() {
	const location = useLocation();
	const themeMode = useThemeStore(state => state.mode);
	const toggleThemeMode = useThemeStore(state => state.toggleMode);

	useEffect(() => {
		const frame = window.requestAnimationFrame(() => {
			if (location.hash) {
				scrollToHash(location.hash);
				return;
			}

			scrollToTop();
		});

		return () => window.cancelAnimationFrame(frame);
	}, [location.hash, location.pathname]);

	return (
		<div className="root-page">
			<SiteHeader themeMode={themeMode} onToggleTheme={toggleThemeMode} />
			<Outlet />
			<SiteFooter />
		</div>
	);
}
