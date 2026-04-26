import { applyThemeToDocument, useThemeStore } from '../useThemeStore';

describe('useThemeStore', () => {
	afterEach(() => {
		useThemeStore.setState({ mode: 'dark' });
		if (typeof localStorage.clear === 'function') {
			localStorage.clear();
		}
		delete document.documentElement.dataset.theme;
	});

	it('alterna entre modo dark y light', () => {
		useThemeStore.getState().toggleMode();

		expect(useThemeStore.getState().mode).toBe('light');

		useThemeStore.getState().toggleMode();

		expect(useThemeStore.getState().mode).toBe('dark');
	});

	it('permite setear el modo explicito', () => {
		useThemeStore.getState().setMode('light');

		expect(useThemeStore.getState().mode).toBe('light');
	});

	it('aplica el modo al elemento raiz del documento', () => {
		applyThemeToDocument('light');

		expect(document.documentElement.dataset.theme).toBe('light');
	});
});
