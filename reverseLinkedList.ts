/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode {
	val: number;
	next: ListNode | null;
}

function reverseList(head: ListNode | null): ListNode | null {
	if (!head?.next) return head;

	let prevNode: ListNode | null = null;
	let currNode: ListNode | null = head;
	let nextNode: ListNode | null = head?.next ?? null;
	while (currNode !== null) {
		currNode.next = prevNode;
		prevNode = currNode;
		currNode = nextNode;
		if (currNode) nextNode = currNode.next;
	}
	head = prevNode;
	return head;
}

export default reverseList;

/*
OTHER SOLUTIONS

// ES6 Destructuring

var reverseList = function(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}

*/
