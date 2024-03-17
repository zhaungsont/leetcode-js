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

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
	if (!root) return null;

	if (root.val < val)
		// search right
		return searchBST(root.right, val);

	if (root.val > val)
		// search left
		return searchBST(root.left, val);

	return root;
}

// const one = { val: 1, left: null, right: null };
// const three = { val: 3, left: null, right: null };
// const two = { val: 2, left: one, right: three };
// const seven = { val: 7, left: null, right: null };
// const four = { val: 4, left: two, right: seven };

// console.log('search three', searchBST(four, 3));
