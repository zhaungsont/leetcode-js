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
			this.requestHistory.last !== null &&
			this.requestHistory.last.value < t - 3000
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
	next: ListNode | null;
	prev: ListNode | null;
	constructor(value: any) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

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
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}
		this.length++;

		return this.first;
	}

	dequeue() {
		if (!this.length) return null;

		if (this.length === 1) {
			this.first = null;
			this.last = null;
			this.length = 0;
			return null;
		}

		const poppedNode = this.last;
		this.last = this.last!.prev;
		this.last!.next = null;
		this.length--;

		return poppedNode;
	}

	traverse() {
		if (!this.length) return null;

		let thisNode = this.first;
		while (thisNode !== null) {
			console.log(thisNode);
			thisNode = thisNode.next;
		}
	}
}
