var expect    = require("chai").expect;
var jsgraphs = require("../src/jsgraphs");

describe("Create various types of Graphs", function() {
  describe("Create unweighted undirected graph", function() {
    var g = new jsgraphs.Graph(6);
    g.addEdge(0, 5);
    g.addEdge(2, 4);
    g.addEdge(2, 3);
    g.addEdge(1, 2);
    g.addEdge(0, 1);
    g.addEdge(3, 4);
    g.addEdge(3, 5);
    g.addEdge(0, 2);
    g.node(2).label = 'Hello';
    g.edge(0, 2).label = 'World';
    it("should has 6 vertices", function() {
    	expect(g.V).to.equal(6); 
    });
    it("should be undirected", function() {
        expect(g.adj(0)).to.contains(5);
        expect(g.adj(5)).to.contains(0);
    });
  });



});