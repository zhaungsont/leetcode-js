/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const answer = 3;

function guess(number: number): number {
	if (number > answer) return -1;
	if (number < answer) return 1;
	return 0;
}

export function guessNumber(right: number, left: number = 1): number {
	const middle = Math.ceil((left + right) / 2);
	switch (guess(middle)) {
		case 0:
			return middle;

		case 1:
			return guessNumber(right, middle + 1);

		case -1:
			return guessNumber(middle - 1, left);

		default:
			return 666;
	}
}
