type Cat = {
	purrs: boolean;
};

type Dog = {
	barks: boolean;
};

const a: Cat | Dog = {
	purrs: true,
	barks: true,
};

const enum Color {
	Red = '#c10000',
	White = 255,
}

let red = Color.Red; // 以鍵取值，可以使用 `.` 或 `[]`
// let white = Color['255']; // 以值取鍵，要使用 `[]`
// let danger = Color['wtf'];

console.log(red);
// console.log(danger);
