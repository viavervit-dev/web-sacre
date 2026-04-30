module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		// Maximum length of the first line (header)
		'header-max-length': [2, 'always', 100],

		// Allowed commit prefixes in lowercase
		'type-enum': [
			2,
			'always',
			['add', 'wip', 'perf', 'ci', 'docs', 'refactor', 'test', 'chore', 'build', 'revert'],
		],
		'type-case': [2, 'always', 'lower-case'],

		// The scope required and in lowercase
		'scope-empty': [2, 'always'],
		'scope-case': [2, 'always', 'lower-case'],

		// The description must not be empty, and in lowercase as well
		'subject-empty': [2, 'never'],
		'subject-case': [2, 'always', 'lower-case'],

		// Body line length
		'body-max-line-length': [2, 'always', 200],
	},
}
