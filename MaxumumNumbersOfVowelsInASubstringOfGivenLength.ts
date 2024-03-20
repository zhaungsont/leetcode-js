const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

export function maxVowels(s: string, k: number): number {
	if (s.length <= k) {
		let vowelCount = 0;
		for (let i = 0; i < s.length; i++) {
			if (vowels.has(s[i])) vowelCount++;
		}
		return vowelCount;
	}
	let left = 0;
	let right = k - 1;
	let maxVowelCount = 0;
	for (let i = 0; i < k; i++) {
		if (vowels.has(s[i])) maxVowelCount++;
	}
	let currentVowelCount = maxVowelCount;
	do {
		right++;

		if (vowels.has(s[right])) currentVowelCount++;

		if (vowels.has(s[left])) currentVowelCount--;
		left++;
		maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
	} while (right < s.length);

	return maxVowelCount;
}
