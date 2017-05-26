var expect = require('chai').expect;
var jsgraphs = require('../src/jsgraphs');

describe('Strongly Connected Components for directed graphs', function(){
    var graph = new jsgraphs.DiGraph(13);
    graph.addEdge(4, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 2);
    graph.addEdge(6, 0);
    graph.addEdge(0, 1);
    graph.addEdge(2, 0);
    graph.addEdge(11, 12);
    graph.addEdge(12, 9);
    graph.addEdge(9, 10);
    graph.addEdge(9, 11);
    graph.addEdge(8, 9);
    graph.addEdge(10, 12);
    graph.addEdge(11, 4);
    graph.addEdge(4, 3);
    graph.addEdge(3, 5);
    graph.addEdge(7, 8);
    graph.addEdge(8, 7);
    graph.addEdge(5, 4);
    graph.addEdge(0, 5);
    graph.addEdge(6, 4);
    graph.addEdge(6, 9);
    graph.addEdge(7, 6);

    it('should have five components', function(){
        var scc = new jsgraphs.StronglyConnectedComponents(graph);
        expect(scc.componentCount()).to.equal(5);
        for (var v = 0; v < graph.V; ++v) {
            console.log('id[' + v + ']: ' + scc.componentId(v));
        }
    });
});