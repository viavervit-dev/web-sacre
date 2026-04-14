import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

const noDefaultExportsRule = {
	selector: 'ExportDefaultDeclaration',
	message:
		'Usá named exports en src/. Los default exports están prohibidos por la convención del proyecto.',
};

const noLongRelativeImportsRule = {
	selector:
		'ImportDeclaration[source.value=/^(\\.\\.\\/){2,}|^\\.\\.\\/[^/]+\\/.+/]',
	message:
		'No uses imports relativos largos en src/. Si el módulo no es local al archivo o carpeta inmediata, usá el alias @/.',
};

const noLongRelativeReExportsRule = {
	selector:
		'ExportNamedDeclaration[source.value=/^(\\.\\.\\/){2,}|^\\.\\.\\/[^/]+\\/.+/], ExportAllDeclaration[source.value=/^(\\.\\.\\/){2,}|^\\.\\.\\/[^/]+\\/.+/]',
	message:
		'No re-exportes con paths relativos largos en src/. Si el módulo no es local, usá el alias @/.',
};

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
				noDefaultExportsRule,
				noLongRelativeImportsRule,
				noLongRelativeReExportsRule,
			],
		},
	},
	{
		files: ['src/pages/**/*.{ts,tsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['@/api/*'],
							message:
								'Las pages no hablan directo con la API. Orquestan componentes y stores.',
						},
					],
				},
			],
		},
	},
	{
		files: ['src/components/**/*.{ts,tsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['@/api/*'],
							message:
								'Los componentes no llaman a la API. Reciben datos por props o composición.',
						},
						{
							group: ['@/stores/*'],
							message:
								'Los componentes no acceden directo a stores. Esa orquestación vive en pages.',
						},
						{
							group: ['@/pages/*'],
							message:
								'Los componentes reutilizables no deben depender de pages.',
						},
					],
				},
			],
		},
	},
	{
		files: ['src/stores/**/*.{ts,tsx}'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['@/pages/*'],
							message:
								'Los stores no dependen de pages. El flujo correcto es page -> store -> api.',
						},
						{
							group: ['@/components/*'],
							message: 'Los stores no deben depender de componentes de UI.',
						},
					],
				},
			],
		},
	},
]);
