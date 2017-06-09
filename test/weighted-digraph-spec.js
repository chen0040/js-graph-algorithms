var expect = require('chai').expect;
var jsgraphs = require('../src/jsgraphs');

describe('Weigthed Directed Graph', function(){
   it('should be weighted and directed', function(){
        var g = new jsgraphs.WeightedDiGraph(8);
        g.addEdge(new jsgraphs.Edge(0, 1, 5.0));
        g.addEdge(new jsgraphs.Edge(0, 4, 9.0));
        g.addEdge(new jsgraphs.Edge(0, 7, 8.0));
        g.addEdge(new jsgraphs.Edge(1, 2, 12.0));
        g.addEdge(new jsgraphs.Edge(1, 3, 15.0));
        g.addEdge(new jsgraphs.Edge(1, 7, 4.0));
        g.addEdge(new jsgraphs.Edge(2, 3, 3.0));
        g.addEdge(new jsgraphs.Edge(2, 6, 11.0));
        g.addEdge(new jsgraphs.Edge(3, 6, 9.0));
        g.addEdge(new jsgraphs.Edge(4, 5, 5.0));
        g.addEdge(new jsgraphs.Edge(4, 6, 20.0));
        g.addEdge(new jsgraphs.Edge(4, 7, 5.0));
        g.addEdge(new jsgraphs.Edge(5, 2, 1.0));
        g.addEdge(new jsgraphs.Edge(5, 6, 13.0));
        g.addEdge(new jsgraphs.Edge(7, 5, 6.0));
        g.addEdge(new jsgraphs.Edge(7, 2, 7.0));  
       
        g.node(4).label = 'Hello';
        g.edge(4, 5).label = 'World';
       
        expect(g.V).to.equal(8);
        var edgeCount = 0;
        for(var v = 0; v < g.V; ++v){
            var adj_v = g.adj(v);
            edgeCount += adj_v.length;
        }
        expect(edgeCount).to.equal(16);
   });
});