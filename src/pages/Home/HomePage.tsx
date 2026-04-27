import { AboutSection } from '@/components/AboutSection/AboutSection';
import { CollectionsSection } from '@/components/CollectionsSection/CollectionsSection';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { SiteFooter } from '@/components/SiteFooter/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader/SiteHeader';
import { useThemeStore } from '@/stores/useThemeStore';
import './style.css';

export function HomePage() {
	const themeMode = useThemeStore(state => state.mode);
	const toggleThemeMode = useThemeStore(state => state.toggleMode);

	return (
		<div className="home-page">
			<SiteHeader themeMode={themeMode} onToggleTheme={toggleThemeMode} />
			<main className="home-page__main">
				<HeroSection />
				<CollectionsSection />
				<AboutSection />
			</main>
			<SiteFooter />
		</div>
	);
}
