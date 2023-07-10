import sum = require('@santi100/summation-lib');

/**
 * Finds the average of an array of numbers.
 * 
 * @param array The array whose average is to be calculated.
 */
export = function average(array: number[]): number {
	const s = sum(array);
	const len = array.length;

	return s / len;
}