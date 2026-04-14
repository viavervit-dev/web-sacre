import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		plugins: {
			prettier,
		},
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		rules: {
			...eslintConfigPrettier.rules,
			'prettier/prettier': 'error',

			// Posibles errores
			'no-console': 'warn',
			'no-debugger': 'warn',

			// Mejores prácticas
			'prefer-const': 'error',
			'no-var': 'error',
			eqeqeq: ['error', 'always'],
			'no-else-return': 'warn',

			// Estilo
			'arrow-body-style': ['warn', 'as-needed'],
			'prefer-template': 'warn',
			'object-shorthand': ['warn', 'always'],
		},
	},
	{
		files: ['src/**/*.{ts,tsx}'],
		rules: {
			'no-restricted-syntax': [
				'error',
				{
					selector: 'ExportDefaultDeclaration',
					message:
						'Usá named exports en src/. Los default exports están prohibidos por la convención del proyecto.',
				},
			],
		},
	},
]);
