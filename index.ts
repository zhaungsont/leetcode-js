// import RecentCounter from './numberOfRecentCalls';
import reverseList from './reverseLinkedList';
import leafSimilar from './leafSimilarTrees';
import compress from './stringCompression';
import { searchBST } from './searchInABinaryTree';
import { guessNumber } from './guessNumberHigherOrLower';
// const a = { val: 3, next: null };
// const b = { val: 2, next: a };
// const c = { val: 1, next: b };

// console.log(reverseList(c));
// const counter = new RecentCounter();
// counter.ping(10000);
// counter.ping(11000);
// counter.ping(12000);
// counter.ping(13100);
// counter.ping(13200);
// counter.ping(13300);
// counter.ping(14300);
// counter.ping(15300);
// console.log('snapshot 13000:', counter.requestHistory);
// console.log('traverse', counter.requestHistory.traverse());

const test: any = {
	val: 3,
	left: {
		val: 5,
		left: {
			val: 6,
			left: null,
			right: null,
		},
		right: {
			val: 2,
			left: {
				val: 7,
				left: null,
				right: null,
			},
			right: {
				val: 4,
				left: null,
				right: null,
			},
		},
	},
	right: {
		val: 1,
		left: {
			val: 9,
			left: null,
			right: null,
		},
		right: {
			val: 8,
			left: null,
			right: null,
		},
	},
};

const b = {
	val: 3,
	left: {
		val: 5,
		left: {
			val: 6,
			left: null,
			right: null,
		},
		right: {
			val: 7,
			left: null,
			right: null,
		},
	},
	right: {
		val: 1,
		left: {
			val: 4,
			left: null,
			right: null,
		},
		right: {
			val: 2,
			left: {
				val: 9,
				left: null,
				right: null,
			},
			right: {
				val: 11,
				left: {
					val: 8,
					left: null,
					right: null,
				},
				right: {
					val: 10,
					left: null,
					right: null,
				},
			},
		},
	},
};

// console.log(leafSimilar(test, b));

const debugCompressStr = [
	'a',
	'a',
	'a',
	'a',
	'a',
	'a',
	'a',
	'a',
	'a',
	'a',
	'a',
	'a',
	'b',
	'b',
];
// console.log(compress(debugCompressStr));

const one = { val: 1, left: null, right: null };
const three = { val: 3, left: null, right: null };
const two = { val: 2, left: one, right: three };
const seven = { val: 7, left: null, right: null };
const four = { val: 4, left: two, right: seven };

// console.log('search three', searchBST(four, 4));

console.log(guessNumber(7));
