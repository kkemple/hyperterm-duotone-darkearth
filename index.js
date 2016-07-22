'use strict';

const foregroundColor = '#eff0eb';
const backgroundColor = '#322d29';
const black = backgroundColor;
const slate = '#6a5f58';
const lightSlate = '#88786c';
const brown = '#88786c';
const yellow = '#c0a155';
const lightYellow = '#fdc52c';
const gray = '#a8986f';
const brightBlack = '#a8986f';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: '#c0a155',
		colors: [
			black,
			slate,
      lightSlate,
      brown,
			yellow,
			lightYellow,
			gray,

			// bright
			brightBlack,
			slate,
      lightSlate,
      brown,
			yellow,
			lightYellow,
			brightWhite
		],
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(168, 152, 111, 0.25);
			}
		`
	});
};
