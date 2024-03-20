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

export function guessNumber(n: number): number {
	let floor = 1,
		ceiling = n;
	let middle = Math.ceil(n / 2);
	let result = guess(middle);
	console.log('loop 0 middle = ', middle);
	while (result !== 0) {
		console.log('===loop===');

		if (result < 0) {
			// Your guess is higher than the number I picked
			console.log('===guess is higher than the number===');
			ceiling = middle - 1;
		} else {
			console.log('===guess is lower than the number===');
			// Your guess is lower than the number I picked
			floor = middle + 1;
		}
		middle = Math.ceil((floor + ceiling) / 2);
		console.log('===calced new middle===', middle);
		result = guess(middle);
		console.log('===calced new result===', result);
		console.log('====end====');
	}
	return middle;
}

/**
1,2,3,4,5
    ^


 */
