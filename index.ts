// import RecentCounter from './numberOfRecentCalls';
import reverseList from './reverseLinkedList';

const a = { val: 3, next: null };
const b = { val: 2, next: a };
const c = { val: 1, next: b };

console.log(reverseList(c));
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
