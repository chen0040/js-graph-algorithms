var expect = require('chai').expect;
var jsgraphs = require('../src/jsgraphs');

describe('Kruskal Minimum Spanning Tree', function(){
   it('should generate the minimum spanning tree', function(){
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
       
        var kruskal = new jsgraphs.KruskalMST(g); 
        var mst = kruskal.mst;
        for(var i=0; i < mst.length; ++i) {
            var e = mst[i];
            var v = e.either();
            var w = e.other(v);
            console.log('(' + v + ', ' + w + '): ' + e.weight);
        }
   });
});