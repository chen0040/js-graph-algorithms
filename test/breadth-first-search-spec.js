var expect = require('chai').expect;
var jsgraphs = require('../src/jsgraphs');

describe('Depth first search', function(){
   it('should traverse correctly', function(){
        var g = new jsgraphs.Graph(6);
        g.addEdge(0, 5);
        g.addEdge(2, 4);
        g.addEdge(2, 3);
        g.addEdge(1, 2);
        g.addEdge(0, 1);
        g.addEdge(3, 4);
        g.addEdge(3, 5);
        g.addEdge(0, 2);
        var s = 0;
        var bfs = new jsgraphs.BreadthFirstSearch(g, s);
        

        for(var v=0; v < g.V; ++v) {
         if(bfs.hasPathTo(v)) {
            console.log(s + " is connected to " + v);
            console.log("path: " + bfs.pathTo(v));
         } else {
             console.log('No path from ' + s + ' to ' + v);
         }
        } 
   });
});