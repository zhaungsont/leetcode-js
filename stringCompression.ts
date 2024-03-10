/*
Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
*/
// occur = 3
// [a,a,a, a..., a, b,b]
//  p 1 0        s
export default function compress(chars: string[]): number {
	// 1. create a var `ptr` ant init to 0

	let ptr = 0;

	// 2. while `ptr` < chars.length:

	while (ptr < chars.length) {
		let scout = ptr + 1;
		let occurrence = 1;

		console.log('debug: ptr', ptr);
		while (chars[scout] === chars[ptr]) {
			console.log('debug: while loop: chars[scout]', chars[scout]);
			console.log('debug: while loop: chars[ptr]', chars[ptr]);
			// 3. count the repeating chars going forward
			occurrence++;
			scout++;
		}
		if (occurrence > 1) {
			console.log('debug: occurrence > 1');
			// 4. add the number next to ptr
			// if the occurrence if 12, then `arrayfiedNumberStrings` is ['1', '2']
			const arrayfiedNumberStrings = occurrence.toString().split('');
			let replacePtr = ptr + 1;
			console.log('debug: arrayfiedNumberStrings', arrayfiedNumberStrings);

			// add occurrence count into the array one by one
			// from [a,a,a,a..., a,b,b] to [a,1,2,a..., a,b,b]
			arrayfiedNumberStrings.forEach((digit) => {
				chars.splice(replacePtr, 1, digit);
				replacePtr++;
			});
			console.log(
				'debug: add occurrence count into the array one by one. chars:',
				chars
			);
			// remove the remaining repeated chars
			// from [a,1,2,a..., a,b,b] to [a,1,2,b,b]

			console.log(
				'debug: remove the remaining repeated chars. start index:',
				replacePtr
			);
			console.log(
				'debug: remove the remaining repeated chars. remove item count:',
				occurrence - arrayfiedNumberStrings.length - 1
			);
			chars.splice(replacePtr, occurrence - arrayfiedNumberStrings.length - 1);
			console.log('debug: remove the remaining repeated chars. chars:', chars);

			// finally, jump to the next char (skip the digit elements)
			// [a,2,2,b]
			//  ^ --> ^
			ptr += arrayfiedNumberStrings.length + 1;
			console.log(
				'debug: finally, jump to the next char (skip the digit elements). ptr:',
				ptr
			);
			console.log('chars', chars);
		} else {
			console.log('debug: occurrence = 1');
			ptr++;
			console.log('ptr', ptr);
			console.log('chars', chars);
		}
	}

	return chars.length;
}
