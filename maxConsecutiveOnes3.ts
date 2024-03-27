// 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1;
// k = 2
// 0, 1, 0, 1;
/*
          l                             r
[1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1];
k = 0
maxConsecutiveOnes = 8
*/
function longestOnes(nums: number[], k: number) {
	let left = 0,
		right = 0;
	let maxConsecutiveOnes = 0;

	while (right < nums.length) {
		// If the current element is 0, decrement k
		if (nums[right] === 0) {
			k--;
		}

		// If k is negative, it means we have more than k zeroes in the window
		// Move the left pointer to the right and adjust k accordingly
		while (k < 0) {
			if (nums[left] === 0) {
				k++;
			}
			left++;
		}

		// Update the maximum length of the subarray
		maxConsecutiveOnes = Math.max(maxConsecutiveOnes, right - left + 1);

		// Expand the window by moving the right pointer
		right++;
	}

	return maxConsecutiveOnes;
}

// Example usage
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // Output: 6
console.log(
	longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
); // Output: 10
