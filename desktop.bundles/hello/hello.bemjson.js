module.exports = {
	block: 'page',
	title: 'Hello page',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'hello.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'hello.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', breakpoint: 'default', font: 'ibm' }
	},
	content: [
		{
			block: 'text',
			mods: { size: 'xxl', view: 'primary' },
			content: 'Hi! Write your first block here.'
		}
	]
};
