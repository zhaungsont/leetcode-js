const tribMap = new Map();
tribMap.set(0, 0);
tribMap.set(1, 1);
tribMap.set(2, 1);

function tribonacci(n: number): number {
	const val = tribMap.get(n);
	if (val !== undefined) return val;

	const newVal = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
	tribMap.set(n, newVal);
	return newVal;
}

console.log('=====start=====');
console.log(tribonacci(500));
console.log('=====end=====');
