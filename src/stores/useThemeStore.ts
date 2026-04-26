import { create } from 'zustand';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'sacre-theme-mode';
let fallbackThemeMode: ThemeMode | null = null;

export interface ThemeState {
	mode: ThemeMode;
	setMode: (mode: ThemeMode) => void;
	toggleMode: () => void;
}

function readStoredTheme(): ThemeMode {
	if (
		typeof window === 'undefined' ||
		!window.localStorage ||
		typeof window.localStorage.getItem !== 'function'
	) {
		return fallbackThemeMode ?? 'dark';
	}

	const storedMode = window.localStorage.getItem(STORAGE_KEY);

	return storedMode === 'light' || storedMode === 'dark' ? storedMode : 'dark';
}

function persistTheme(mode: ThemeMode): void {
	fallbackThemeMode = mode;

	if (
		typeof window === 'undefined' ||
		!window.localStorage ||
		typeof window.localStorage.setItem !== 'function'
	) {
		return;
	}

	window.localStorage.setItem(STORAGE_KEY, mode);
}

export function applyThemeToDocument(mode: ThemeMode): void {
	document.documentElement.dataset.theme = mode;
}

export const useThemeStore = create<ThemeState>()(set => ({
	mode: readStoredTheme(),
	setMode: mode => {
		persistTheme(mode);
		set({ mode });
	},
	toggleMode: () =>
		set(state => {
			const nextMode = state.mode === 'dark' ? 'light' : 'dark';
			persistTheme(nextMode);

			return { mode: nextMode };
		}),
}));
