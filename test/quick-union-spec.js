var expect = require('chai').expect;
var jsgraphs = require('../src/jsgraphs');

describe('Quick Union', function(){
   it('should work as union find', function(){
       var uf = new jsgraphs.QuickUnion(10);
       expect(uf.connected(0, 3)).to.equal(false);
       uf.union(0, 3);
       expect(uf.connected(0, 3)).to.equal(true);
       uf.union(0, 7);
       expect(uf.connected(0, 7)).to.equal(true);
       expect(uf.connected(3, 7)).to.equal(true);
   });
});