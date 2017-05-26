# js-graph-algorithms
Package provides javascript implementation of algorithms for graph processing

[![Build Status](https://travis-ci.org/chen0040/js-graph-algorithms.svg?branch=master)](https://travis-ci.org/chen0040/js-graph-algorithms) [![Coverage Status](https://coveralls.io/repos/github/chen0040/js-graph-algorithms/badge.svg?branch=master)](https://coveralls.io/github/chen0040/js-graph-algorithms?branch=master) 

# Features

* Depth First Search
* Breadth First Search
* Connected Components for undirected graph
* Topoloical Sort
* Strongly Connected Components for directed graph
* Minimum Spanning Tree for weighted graph (Kruskal, Prim Lazy, Prim Eager)
* Shortest Paths (Dijkstra, Bellman-Ford, Topological Sort on DAG)
* MaxFlow-MinCut (Ford-Fulkerson)

# Usage

### Create an undirected unweighted graph

The sample code below shows how to create a undirected and unweighted graph:

```javascript
var jsgraphs = require('js-graph-algorithms');

var g = new jsgraphs.Graph(6);
g.addEdge(0, 5); // add undirected edge connecting vertex 0 to vertex 5
g.addEdge(2, 4);
g.addEdge(2, 3);
g.addEdge(1, 2);
g.addEdge(0, 1);
g.addEdge(3, 4);
g.addEdge(3, 5);
g.addEdge(0, 2);

console.log(g.V); // display 6, which is the number of vertices in g
console.log(g.adj(0)); // display [5, 1, 2], which is the adjacent list to vertex 0
```

### Create directed unweighted graph

The sample code below shows how to create a direted and unweighted graph:

```javascript
var jsgraphs = require('js-graph-algorithms');

var g = new jsgraphs.DiGraph(13);
g.addEdge(4,  2); // add directed edge from 4 to 2
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

console.log(g.V); // display 13, which is the number of vertices in g
console.log(g.adj(0)); // display the adjacency list which are vertices directed from vertex 0
```

### Depth First Search

The sample code below show how to perform depth first search of an undirected graph

```javascript
var jsgraphs = require('js-graph-algorithms');

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
var dfs = new jsgraphs.DepthFirstSearch(g, s);


for(var v=0; v < g.V; ++v) {
 if(dfs.hasPathTo(v)) {
    console.log(s + " is connected to " + v);
    console.log("path: " + dfs.pathTo(v));
 } else {
     console.log('No path from ' + s + ' to ' + v);
 }
} 
```

### Connected Components

The sample code below show how to obtain the number of connected components in an undirected graph:

```javascript
var jsgraphs = require('js-graph-algorithms');

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

var cc = new jsgraphs.ConnectedComponents(g);
console.log(cc.componentCount()); // display 3
for (var v = 0; v < g.V; ++v) {
    console.log('id[' + v + ']: ' + cc.componentId(v));
}
```

### Topological Sort

The sample code below show how to obtain the reverse post order of a topological sort in a directed acyclic graph:

```javascript
var jsgraphs = require('js-graph-algorithms');

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

var order = ts.order();
console.log(order); // display array which is the topological sort order

```

### Strongly Connected Components for Directed Graph

The sample code below show how to obtain the strongly connected components from a directed graph:

```javascript
var jsgraphs = require('js-graph-algorithms');

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
var scc = new jsgraphs.StronglyConnectedComponents(graph);
console.log(scc.componentCount()); // display 5
for (var v = 0; v < graph.V; ++v) {
    console.log('id[' + v + ']: ' + scc.componentId(v));
}
```

### Use Kruskal algorithm to find the minimum spanning tree of a weighted graph

The sample code below show how to obtain the minimum spanning tree from a weighted graph using Kruskal algorithm:

```javascript
var jsgraphs = require('js-graph-algorithms');
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
```