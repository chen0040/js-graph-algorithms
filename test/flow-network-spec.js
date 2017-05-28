var expect = require('chai').expect;
var jsgraphs = require('../src/jsgraphs');

describe('Flow Network', function(){
   it('should confirms to flow edge spec', function(){
        var g = new jsgraphs.FlowNetwork(8);
        g.addEdge(new jsgraphs.FlowEdge(0, 1, 10));
        g.addEdge(new jsgraphs.FlowEdge(0, 2, 5));
        g.addEdge(new jsgraphs.FlowEdge(0, 3, 15));
        g.addEdge(new jsgraphs.FlowEdge(1, 4, 9));
        g.addEdge(new jsgraphs.FlowEdge(1, 5, 15));
        g.addEdge(new jsgraphs.FlowEdge(1, 2, 4));
        g.addEdge(new jsgraphs.FlowEdge(2, 5, 8));
        g.addEdge(new jsgraphs.FlowEdge(2, 3, 4));
        g.addEdge(new jsgraphs.FlowEdge(3, 6, 16));
        g.addEdge(new jsgraphs.FlowEdge(4, 5, 15));
        g.addEdge(new jsgraphs.FlowEdge(4, 7, 10));
        g.addEdge(new jsgraphs.FlowEdge(5, 7, 10));
        g.addEdge(new jsgraphs.FlowEdge(5, 6, 15));
        g.addEdge(new jsgraphs.FlowEdge(6, 2, 6));
        g.addEdge(new jsgraphs.FlowEdge(6, 7, 10)); 
       
       expect(g.V).to.equal(8);
       
       var edgeCount = 0;
       for(var v = 0; v < g.V; ++v) {
           var adj_v = g.adj(v);
           edgeCount += adj_v.length;
       }
       expect(edgeCount).to.equal(30);
   });
});