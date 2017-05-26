var expect = require('chai').expect;
var jsgraphs = require('../src/jsgraphs');

describe('Topological Sort', function(){
    var dag = new jsgraphs.DiGraph(7); // must be directed acyclic graph

    dag.addEdge(0, 5);
    dag.addEdge(0, 2);
    dag.addEdge(0, 1);
    dag.addEdge(3, 6);
    dag.addEdge(3, 5);
    dag.addEdge(3, 4);
    dag.addEdge(5, 4);
    dag.addEdge(6, 4);
    dag.addEdge(6, 0);
    dag.addEdge(3, 2);
    dag.addEdge(1, 4);
    
    var ts = new jsgraphs.TopologicalSort(dag);
    
    it('should sort topoloically', function(){
        var order = ts.order();
        console.log(order);
    });
});