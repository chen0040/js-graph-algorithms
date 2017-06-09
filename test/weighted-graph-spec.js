var expect    = require("chai").expect;
var jsgraphs = require("../src/jsgraphs");

describe("Create various types of Weighted Graphs", function() {
  describe("Create weighted undirected graph", function() {
    var g = new jsgraphs.WeightedGraph(8);
    g.addEdge(new jsgraphs.Edge(0, 7, 0.16));
    g.addEdge(new jsgraphs.Edge(2, 3, 0.17));
    g.addEdge(new jsgraphs.Edge(1, 7, 0.19));
    g.addEdge(new jsgraphs.Edge(0, 2, 0.26));
    g.addEdge(new jsgraphs.Edge(5, 7, 0.28));
    g.addEdge(new jsgraphs.Edge(1, 3, 0.29));
    g.addEdge(new jsgraphs.Edge(1, 5, 0.32));
    g.addEdge(new jsgraphs.Edge(2, 7, 0.34));
    g.addEdge(new jsgraphs.Edge(4, 5, 0.35));
    g.addEdge(new jsgraphs.Edge(1, 2, 0.36));
    g.addEdge(new jsgraphs.Edge(4, 7, 0.37));
    g.addEdge(new jsgraphs.Edge(0, 4, 0.38));
    g.addEdge(new jsgraphs.Edge(6, 2, 0.4));
    g.addEdge(new jsgraphs.Edge(3, 6, 0.52));
    g.addEdge(new jsgraphs.Edge(6, 0, 0.58));
    g.addEdge(new jsgraphs.Edge(6, 4, 0.93));
      
    g.node(4).label = 'Hello';
    g.edge(4, 5).label = 'World';
      
    it("should has 8 vertices", function() {
    	expect(g.V).to.equal(8); 
    });
    it("should be undirected", function() {
        var adj_v = g.adj(0);
        for (var i = 0; i < adj_v.length; ++i) {
            var e = adj_v[i];
            var w = e.other(0);
            var adj_w = g.adj(w);
            
            var found = false;
            for (var j = 0; j < adj_w.length; ++j) {
                var e2 = adj_w[j];
                if(e2.other(w) == 0){
                    found = true;
                }
            }
            
            expect(found).to.equal(true);
        }
        
        var edgeCount = 0;
        for (var v = 0; v < g.V; ++v) {
            edgeCount+=g.adj(v).length;
        }
        expect(edgeCount).to.equal(32);
    });
  });



});