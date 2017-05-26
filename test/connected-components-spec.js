var expect = require('chai').expect;
var jsgraphs = require('../src/jsgraphs');

describe('Connected Components for undirected graph', function(){
    var g = new jsgraphs.Graph(13);
    g.addEdge(0, 5);
    g.addEdge(4, 3);
    g.addEdge(0, 1);
    g.addEdge(9, 12);
    g.addEdge(6, 4);
    g.addEdge(5, 4);
    g.addEdge(0, 2);
    g.addEdge(11, 12);
    g.addEdge(9,10);
    g.addEdge(0, 6);
    g.addEdge(7, 8);
    g.addEdge(9, 11);
    g.addEdge(5, 3); 
    
    it('should have three components', function(){
        var cc = new jsgraphs.ConnectedComponents(g);
        expect(cc.componentCount()).to.equal(3);
        for (var v = 0; v < g.V; ++v) {
            console.log('id[' + v + ']: ' + cc.componentId(v));
        }
    });
});