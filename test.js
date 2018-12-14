'use strict';

const asciiControlCharCodes = require('.');
const isAsciiControlCharCode = require('is-ascii-control-char-code');
const test = require('tape');

test('asciiControlCharCodes', t => {
	t.strictEqual(
		asciiControlCharCodes.length,
		33,
		'should include all codes of ASCII control characters.'
	);

	t.deepEqual(
		asciiControlCharCodes.filter(key => !isAsciiControlCharCode(key)),
		[],
		'should not include any codes of non ASCII control characters.'
	);

	t.deepEqual(
		asciiControlCharCodes,
		asciiControlCharCodes.slice(0).sort((current, next) => current - next),
		'should be sorted in ascending order.'
	);

	t.end();
});
