import RecentCounter from './numberOfRecentCalls';

const counter = new RecentCounter();
counter.ping(10000);
counter.ping(11000);
counter.ping(12000);
counter.ping(13000);
console.log('snapshot 13000:', counter.requestHistory);
