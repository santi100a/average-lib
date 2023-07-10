import sum = require('@santi100/summation-lib');

export = function average(array: number[]): number {
	const s = sum(array);
	const len = array.length;

	return s / len;
}