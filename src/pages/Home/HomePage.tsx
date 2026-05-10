import { AboutSection } from '@/components/AboutSection/AboutSection';
import { CollectionsSection } from '@/components/CollectionsSection/CollectionsSection';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import './style.css';

export function HomePage() {
	return (
		<main className="home-page">
			<HeroSection />
			<CollectionsSection />
			<AboutSection />
		</main>
	);
}
