var expect = require('chai').expect;
var jsgraphs = require('../src/jsgraphs');

describe('Queue operations', function() {
    it('should enqueue and dequeue correctly', function() {
        var queue = new jsgraphs.Queue();  
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        var a = queue.toArray();
        expect(a.length).to.equal(3);
        for(var i=0; i < a.length; ++i) {
            expect(a[i]).to.equal((i+1) * 10);
        }
        expect(queue.size()).to.equal(3);
        expect(queue.isEmpty()).to.equal(false);
        expect(queue.dequeue()).to.equal(10);
        expect(queue.dequeue()).to.equal(20);
        expect(queue.dequeue()).to.equal(30);
        expect(queue.isEmpty()).to.equal(true);
    });
});