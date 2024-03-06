import RecentCounter from './numberOfRecentCalls';

const counter = new RecentCounter();
counter.ping(10000);
counter.ping(11000);
counter.ping(12000);
counter.ping(13100);
counter.ping(13200);
counter.ping(13300);
counter.ping(14300);
counter.ping(15300);
console.log('snapshot 13000:', counter.requestHistory);
console.log('traverse', counter.requestHistory.traverse());
