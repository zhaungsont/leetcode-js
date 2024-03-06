export default class RecentCounter {
	requestHistory: LinkedList;
	constructor() {
		this.requestHistory = new LinkedList();
	}

	ping(t: number): number {
		// add new ping to list
		this.requestHistory.enqueue(t);
		// remove any node that's older than 3000 milliseconds ago
		while (
			this.requestHistory.first !== null &&
			this.requestHistory.first.value < t - 3000
		) {
			// as long as the last call is over 3000 milliseconds older than the current ping, remove it from the list.
			this.requestHistory.dequeue();
		}

		// return the length of the list
		return this.requestHistory.length;
	}
}

class ListNode {
	value: any;
	left: ListNode | null;
	right: ListNode | null;
	constructor(value: any) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

/*

enqueue ->-> last -> -> -> -> first ->-> dequeue

*/
class LinkedList {
	first: ListNode | null;
	last: ListNode | null;
	length: number;
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	enqueue(value: any) {
		const newNode = new ListNode(value);
		if (!this.last) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.right = this.last;
			this.last.left = newNode;
			this.last = newNode;
		}
		this.length++;

		return this.first;
	}

	dequeue() {
		if (!this.first) return null;

		if (this.length === 1) {
			this.first = null;
			this.last = null;
			this.length = 0;
			return null;
		}

		const poppedNode = this.first;
		this.first = this.first.left;
		this.first!.right = null;
		this.length--;

		return poppedNode;
	}

	traverse() {
		if (!this.length) return null;

		let thisNode = this.last;
		while (thisNode !== null) {
			console.log(thisNode);
			thisNode = thisNode.right;
		}
	}
}
