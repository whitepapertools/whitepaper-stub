module.exports = {
	block: 'page',
	title: 'Test page',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'test.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'test.min.js' }],
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-inverse', space: 'default', size: 'default', font: 'default', shadow: 'default', corner: 'default', gap: 'medium' }
	},
	content: [
		{
			block: 'tpl-layout',
			mix: { block: 'decorator', mods: {'indent-t': '6xl'} },
			content: {
				elem: 'content',
				content: {
					elem: 'container',
					elemMods: {distribute: 'center', size: 'm' },
					content: [
						{
							block: 'head',
							mix: { block: 'decorator', mods: {'indent-b': '2xl'} },
							content: [
								{
									block: 'text',
									mods: { size: '4xl', view: 'brand', weight: 'bold' },
									content: 'Store'
								},
								{
									block: 'button',
									mods: { size: 'l', view: 'action' },
									content: 'BUY CURRENCY'
								}
							]
						},
						{
							block: 'tpl-grid',
							mix: { block: 'theme', mods: {color: 'whitepaper-inverse'}},
							mods: { 's-ratio': '1-1-1', 'm-ratio': '1-1-1-1', 'col-gap': 'half', 'row-gap': 'half' },
							content: [
								{
									block: 'card',
									content: [
										{
											elem: 'img',
											content: [
												{
													block: 'image',
													url: '/assets/rocket.png',
												}
											]
										},
										{
											elem: 'description',
											content: [
												{
													block: 'text',
													mods: { view: 'primary', size: 's', weight: 'bold' },
													content: 'Empire Booster Mega'
												},
												{
													block: 'text',
													mods: { view: 'secondary', size: 's' },
													content: 'Take it, take it all! All of the Empires riches in one Mega Booster'
												}
											]
										},
										{
											elem: 'footer',
											content: [
												{
													block: 'pt-icon-plus',
													content: [
														{
															elem: 'block',
															content: {
																block: 'icon2',
																mods: { name: '', view: 'primary', size: 's'}
															}
														},
														{
															elem: 'text',
															content: {
																block: 'text',
																mods: { view: 'primary', size: 's' },
																content: '1000'
															}
														}
													]
												},
												{
													block: 'button',
													mods: { view: 'default', size: 's' },
													content: 'BUY NOW'
												}
											]
										}		
									]
								},
								{
									block: 'card',
									content: [
										{
											elem: 'img',
											content: [
												{
													block: 'image',
													url: '/assets/rocket.png',
												}
											]
										},
										{
											elem: 'description',
											content: [
												{
													block: 'text',
													mods: { view: 'primary', size: 's', weight: 'bold' },
													content: 'Xsolla Booster Mega'
												},
												{
													block: 'text',
													mods: { view: 'secondary', size: 's' },
													content: "Take it, take it all! All of Xsolla's riches in one Mega Booster"
												}
											]
										},
										{
											elem: 'footer',
											content: [
												{
													block: 'pt-icon-plus',
													content: [
														{
															elem: 'block',
															content: {
																block: 'icon2',
																mods: { name: '', view: 'primary', size: 's'}
															}
														},
														{
															elem: 'text',
															content: {
																block: 'text',
																mods: { view: 'primary', size: 's' },
																content: '1000'
															}
														}
													]
												},
												{
													block: 'button',
													mods: { view: 'default', size: 's' },
													content: 'BUY NOW'
												}
											]
										}		
									]
								},
								{
									block: 'card',
									content: [
										{
											elem: 'img',
											content: [
												{
													block: 'image',
													url: '/assets/rocket.png',
												}
											]
										},
										{
											elem: 'description',
											content: [
												{
													block: 'text',
													mods: { view: 'primary', size: 's', weight: 'bold' },
													content: 'Empire Booster Mega'
												},
												{
													block: 'text',
													mods: { view: 'secondary', size: 's' },
													content: 'Take it, take it all! All of the Empires riches in one Mega Booster'
												}
											]
										},
										{
											elem: 'footer',
											content: [
												{
													block: 'pt-icon-plus',
													content: [
														{
															elem: 'block',
															content: {
																block: 'icon2',
																mods: { name: '', view: 'primary', size: 's'}
															}
														},
														{
															elem: 'text',
															content: {
																block: 'text',
																mods: { view: 'primary', size: 's' },
																content: '1000'
															}
														}
													]
												},
												{
													block: 'button',
													mods: { view: 'default', size: 's' },
													content: 'BUY NOW'
												}
											]
										}		
									]
								},
								{
									block: 'card',
									content: [
										{
											elem: 'img',
											content: [
												{
													block: 'image',
													url: '/assets/rocket.png',
												}
											]
										},
										{
											elem: 'description',
											content: [
												{
													block: 'text',
													mods: { view: 'primary', size: 's', weight: 'bold' },
													content: 'Empire Booster Mega'
												},
												{
													block: 'text',
													mods: { view: 'secondary', size: 's' },
													content: 'Take it, take it all! All of the Empires riches in one Mega Booster'
												}
											]
										},
										{
											elem: 'footer',
											content: [
												{
													block: 'pt-icon-plus',
													content: [
														{
															elem: 'block',
															content: {
																block: 'icon2',
																mods: { name: '', view: 'primary', size: 's'}
															}
														},
														{
															elem: 'text',
															content: {
																block: 'text',
																mods: { view: 'primary', size: 's' },
																content: '1000'
															}
														}
													]
												},
												{
													block: 'button',
													mods: { view: 'default', size: 's' },
													content: 'BUY NOW'
												}
											]
										}		
									]
								}
							]
						}
					]
				}
			}
		}

	]
};
