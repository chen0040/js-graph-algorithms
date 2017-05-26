var expect = require('chai').expect;
var jsgraphs = require('../src/jsgraphs');

describe('MinPQ', function(){
   it('should function as min priority queue', function(){
      var pq = new jsgraphs.MinPQ();
       
       pq.enqueue(10);
       pq.enqueue(9);
       pq.enqueue(7);
       pq.enqueue(8);
       pq.enqueue(3);
       pq.enqueue(4);
       pq.enqueue(5);
       pq.enqueue(2);
       pq.enqueue(1);
       pq.enqueue(6);
       
       expect(pq.isEmpty()).to.equal(false);
       for( var i = 1; i <= 10; ++i) {
           expect(pq.delMin()).to.equal(i);
           expect(pq.size()).to.equal(10 - i);
       }
       expect(pq.isEmpty()).to.equal(true);
   });
});