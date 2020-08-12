/**
 * @module javascriptModuleTemplate
 * @description JavaScript Module Template
 */

import '../css/styles.scss';

/**
 * templateFunction description
 * @function
 * @param {string} [param1='valid'] - param1 description.
 * @throws {Error} Throws Error if param1 is 'invalid'
 * @returns {bool} return description
 */
export const templateFunction = (param1 = 'valid') => {
	if (param1 == 'invalid') throw Error('param1 is invalid');
	console.log('Hello, world!');
	return true;
};
