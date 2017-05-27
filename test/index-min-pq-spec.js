var expect = require('chai').expect;
var jsgraphs = require('../src/jsgraphs');

describe('Index MinPQ', function(){
    it('should check if index exists in pq and determines where to insert', function(){
        var pq = new jsgraphs.IndexMinPQ(100);
        expect(pq.containsIndex(10)).to.equal(false);
        pq.insert(10, 12.0);
        expect(pq.containsIndex(10)).to.equal(true);
        pq.insert(9, 14.0);
        expect(pq.min()).to.equal(10);
        expect(pq.containsIndex(9)).to.equal(true);
        expect(pq.minKey()).to.equal(12.0);
        pq.decreaseKey(10, 13.0);
        expect(pq.minKey()).to.equal(12.0);
        pq.decreaseKey(10, 11.0);
        expect(pq.minKey()).to.equal(11.0);
        pq.decreaseKey(9, 10.0);
        expect(pq.minKey()).to.equal(10.0);
        expect(pq.min()).to.equal(9);
        expect(pq.size()).to.equal(2);
        expect(pq.isEmpty()).to.equal(false);
        expect(pq.delMin()).to.equal(9);
        expect(pq.delMin()).to.equal(10);
        expect(pq.isEmpty()).to.equal(true);
    });
});