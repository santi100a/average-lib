/* eslint-disable @typescript-eslint/no-var-requires */

describe('average_function', () => {

    const average = require('..');
    // Tests that the function returns the correct average for an array of positive integers
    it('test_positive_integers', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(average(arr)).toBe(3);
    });

    // Tests that the function returns the correct average for an array of negative integers
    it('test_negative_integers', () => {
        const arr = [-1, -2, -3, -4, -5];
        expect(average(arr)).toBe(-3);
    });

    // Tests that the function returns the correct average for an array of mixed positive and negative integers
    it('test_mixed_integers', () => {
        const arr = [-1, 2, -3, 4, -5];
        expect(average(arr)).toBe(-0.6);
    });

    // Tests that the function returns the correct average for an array of decimal numbers
    it('test_decimal_numbers', () => {
        const arr = [1.5, 2.5, 3.5];
        expect(average(arr)).toBe(2.5);
    });

    // Tests that the function returns NaN for an empty array
    it('test_empty_array', () => {
        const arr = [];
        expect(isNaN(average(arr))).toBeTruthy();
    });

    // Tests that the function returns NaN for an array of NaN values
    it('test_NaN_values', () => {
        const arr = Array(3).fill(NaN);
        expect(isNaN(average(arr))).toBeTruthy();
    });
});
