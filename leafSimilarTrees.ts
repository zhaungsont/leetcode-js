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

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
}

export default function leafSimilar(
	root1: TreeNode | null,
	root2: TreeNode | null
): boolean {
	const leaves1: any = [];
	const leaves2: any = [];

	function recursiveSearch(node: TreeNode | null, leaveArr: number[]) {
		if (!node) return;

		if (node.left) recursiveSearch(node.left, leaveArr);
		if (node.right) recursiveSearch(node.right, leaveArr);
		if (!node.left && !node.right) leaveArr.push(node.val);
	}

	recursiveSearch(root1, leaves1);
	recursiveSearch(root2, leaves2);

	console.log('leaves 1', leaves1);
	console.log('leaves 2', leaves2);

	for (let i = 0; i < Math.max(leaves1.length, leaves2.length); i++) {
		if (leaves1[i] !== leaves2[i]) return false;
	}
	return true;
}
