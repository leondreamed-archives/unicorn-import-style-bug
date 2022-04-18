module.exports = {
	plugins: ['unicorn'],
	extends: ['plugin:unicorn/recommended'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest'
	}
}