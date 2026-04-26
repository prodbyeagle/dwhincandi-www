import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next'),
	{ ignores: ['dist'] },
	{
		plugins: {
			'@stylistic': stylistic,
			'@typescript-eslint': tseslint.plugin,
			'unused-imports': unusedImports,
		},
		settings: {
			'import/resolver': {
				map: [
					['@lib', './src/lib'],
					['@utils', './src/utils'],
					['@hooks', './src/hooks'],
					['@components', './src/components'],
				],
			},
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: __dirname,
			},
		},
		rules: {
			'unused-imports/no-unused-imports': 'error',

			// note: Style Rules
			'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/eol-last': ['error', 'always'],
			'@stylistic/no-multi-spaces': 'error',
			'@stylistic/no-trailing-spaces': 'error',
			'@stylistic/no-whitespace-before-property': 'error',
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/semi-style': ['error', 'last'],
			'@stylistic/space-in-parens': ['error', 'never'],
			'@stylistic/block-spacing': ['error', 'always'],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/spaced-comment': [
				'error',
				'always',
				{ markers: ['!'] },
			],
			'@stylistic/no-extra-semi': 'error',
		},
	},
];

export default eslintConfig;
