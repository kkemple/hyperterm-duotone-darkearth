'use strict'

const foregroundColor = '#eff0eb'
const backgroundColor = '#322d29'
const black = backgroundColor
const slate = '#6a5f58'
const lightSlate = '#88786c'
const brown = '#88786c'
const yellow = '#c0a155'
const lightYellow = '#fdc52c'
const gray = '#a8986f'
const brightBlack = '#a8986f'
const brightWhite = foregroundColor

const colors = {
	black: black,
	red: slate,
	green: slate,
	pink: lightSlate,
	yellow: brown,
	blue: yellow,
	magenta: lightYellow,
	cyan: gray,
	white: foregroundColor,
	lightBlack: brightBlack,
	lightRed: lightSlate,
	lightGreen: lightSlate,
	lightPink: lightYellow,
	lightYellow: brown,
	lightBlue: yellow,
	lightMagenta: lightYellow,
	lightCyan: gray,
	lightWhite: foregroundColor
}

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: '#c0a155',
		colors: colors,
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(168, 152, 111, 0.25)
			}
		`
	})
}

exports.middleware = () => (next) => (action) => {
	switch (action.type) {
		case 'CONFIG_LOAD':
		case 'CONFIG_RELOAD':
		action.config.foregroundColor = foregroundColor
		action.config.backgroundColor = backgroundColor
		action.config.cursorColor = yellow
		action.config.colors = colors
	}
	next(action)
}
