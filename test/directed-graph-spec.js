var expect    = require("chai").expect;
var jsgraphs = require("../src/jsgraphs");

describe("Create various types of DiGraph", function() {
  describe("Create unweighted directed graph", function() {
    var g = new jsgraphs.DiGraph(13);
    g.addEdge(4,  2);
    g.addEdge(2,  3);
    g.addEdge(3,  2);
    g.addEdge(6,  0);
    g.addEdge(0,  1);
    g.addEdge(2,  0);
    g.addEdge(11, 12);
    g.addEdge(12,  9);
    g.addEdge(9, 10);
    g.addEdge(9, 11);
    g.addEdge(7,  9);
    g.addEdge(10, 12);
    g.addEdge(11,  4);
    g.addEdge(4,  3);
    g.addEdge(3,  5);
    g.addEdge(6,  8);
    g.addEdge(8,  6);
    g.addEdge(5,  4);
    g.addEdge(0,  5);
    g.addEdge(6,  4);
    g.addEdge(6,  9);
    g.addEdge(7,  6);
      
    g.edge(2, 0).label = 'World';
    it("should has 13 vertices", function() {
    	expect(g.V).to.equal(13); 
    });
    it("should be directed", function() {
        expect(g.adj(4)).to.contains(2);
        expect(g.adj(2)).not.to.contains(4);
    });
  });



});