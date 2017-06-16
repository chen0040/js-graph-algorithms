# js-graph-algorithms
Package provides javascript implementation of algorithms for graph processing

[![Build Status](https://travis-ci.org/chen0040/js-graph-algorithms.svg?branch=master)](https://travis-ci.org/chen0040/js-graph-algorithms) [![Coverage Status](https://coveralls.io/repos/github/chen0040/js-graph-algorithms/badge.svg?branch=master)](https://coveralls.io/github/chen0040/js-graph-algorithms?branch=master) 

# Features

* Depth First Search (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-dfs.html))
* Breadth First Search
* Connected Components for undirected graph (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-connected-components.html))
* Topoloical Sort (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-topo-sort.html))
* Strongly Connected Components for directed graph (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-strongly-connected-components.html))
* Minimum Spanning Tree for weighted graph (Kruskal, Prim Lazy, Prim Eager) (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-kruskal.html))
* Shortest Paths (Dijkstra, Bellman-Ford, Topological Sort on DAG) (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-dijkstra.html))
* MaxFlow-MinCut (Ford-Fulkerson) (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-ford-fulkerson.html))

# Install

```bash
npm install js-graph-algorithms
```

# Usage

### Create an undirected unweighted graph

The sample code below shows how to create a undirected and unweighted graph (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-graph.html)):

```javascript
var jsgraphs = require('js-graph-algorithms');

var g = new jsgraphs.Graph(6); // 6 is the number vertices in the graph
g.addEdge(0, 5); // add undirected edge connecting vertex 0 to vertex 5
g.addEdge(2, 4);
g.addEdge(2, 3);
g.addEdge(1, 2);
g.addEdge(0, 1);
g.addEdge(3, 4);
g.addEdge(3, 5);
g.addEdge(0, 2);

g.node(2).label = 'Hello'; // assigned 'Hello' as label for node 2
g.edge(0, 2).label = 'World'; // edge between 0 and 2

console.log(g.V); // display 6, which is the number of vertices in g
console.log(g.adj(0)); // display [5, 1, 2], which is the adjacent list to vertex 0
```

### Create directed unweighted graph

The sample code below shows how to create a direted and unweighted graph (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-digraph.html)):

```javascript
var jsgraphs = require('js-graph-algorithms');

var g = new jsgraphs.DiGraph(13); // 13 is the number vertices in the graph
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

g.node(2).label = 'Hello'; // assign 'Hello' as label for node 2
g.edge(0, 5).label = 'World'; // edge from 0 to 5

console.log(g.V); // display 13, which is the number of vertices in g
console.log(g.adj(0)); // display the adjacency list which are vertices directed from vertex 0
```

### Create undirected weighted graph

The sample code below shows show to create undirected weighted graph (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-weighted-graph.html)):


```javascript
var jsgraphs = require('js-graph-algorithms');
var g = new jsgraphs.WeightedGraph(8); // 8 is the number vertices in the graph
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

g.node(2).label = 'Hello'; // assign 'Hello' as label for node 2
g.edge(4, 5).label = 'World'; // edge between node 4 and 5

console.log(g.V); // display 13, which is the number of vertices in g
console.log(g.adj(0)); // display the adjacency list which are undirected edges connected to vertex 0
```

### Create directed weighted graph

The sample code below shows show to create directed weighted graph (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-weighted-digraph.html)):

```javascript
var jsgraphs = require('js-graph-algorithms');
var g = new jsgraphs.WeightedDiGraph(8); // 8 is the number vertices in the graph
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

g.node(2).label = 'Hello';
g.edge(4, 5).label = 'World'; // edge from node 4 to node 5

console.log(g.V); // display 13, which is the number of vertices in g
console.log(g.adj(0)); // display the adjacency list which are directed edges from vertex 0
```

### Depth First Search

The sample code below show how to perform depth first search of an undirected graph (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-dfs.html)):

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

The sample code below show how to obtain the number of connected components in an undirected graph  (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-connected-components.html)):

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

The sample code below show how to obtain the reverse post order of a topological sort in a directed acyclic graph (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-topo-sort.html)):

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

The sample code below show how to obtain the strongly connected components from a directed graph (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-strongly-connected-components.html)):

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

The sample code below show how to obtain the minimum spanning tree from a weighted graph using Kruskal algorithm (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-kruskal.html)):

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

### Use Lazy Prim algorithm to find the minimum spanning tree of a weighted graph

The sample code below show how to obtain the minimum spanning tree from a weighted graph using Lazy Prim algorithm (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-lazy-prim.html)):

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

var prim = new jsgraphs.LazyPrimMST(g); 
var mst = prim.mst;
for(var i=0; i < mst.length; ++i) {
    var e = mst[i];
    var v = e.either();
    var w = e.other(v);
    console.log('(' + v + ', ' + w + '): ' + e.weight);
}
```

### Use Eager Prim algorithm to find the minimum spanning tree of a weighted graph

The sample code below show how to obtain the minimum spanning tree from a weighted graph using Eager Prim algorithm (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-eager-prim.html)):

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

var prim = new jsgraphs.EagerPrimMST(g); 
var mst = prim.mst;
for(var i=0; i < mst.length; ++i) {
    var e = mst[i];
    var v = e.either();
    var w = e.other(v);
    console.log('(' + v + ', ' + w + '): ' + e.weight);
}
```

### Find the shortest paths using Dijkstra

The sample code below show how to obtain the shortest paths from a starting point 0 on a weighted directed graph using Dijkstra (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-dijkstra.html)):

```javascript
var jsgraphs = require('js-graph-algorithms');
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


var dijkstra = new jsgraphs.Dijkstra(g, 0);

for(var v = 1; v < g.V; ++v){
    if(dijkstra.hasPathTo(v)){
        var path = dijkstra.pathTo(v);
        console.log('=====path from 0 to ' + v + ' start==========');
        for(var i = 0; i < path.length; ++i) {
            var e = path[i];
            console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
        }
        console.log('=====path from 0 to ' + v + ' end==========');
        console.log('=====distance: '  + dijkstra.distanceTo(v) + '=========');
    }
}
```

### Find the shortest paths using Bellman-Ford

The sample code below show how to obtain the shortest paths from a starting point 0 on a weighted directed graph using Bellman-Ford:

```javascript
var jsgraphs = require('js-graph-algorithms');
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


var bf = new jsgraphs.BellmanFord(g, 0);

for(var v = 1; v < g.V; ++v){
    if(bf.hasPathTo(v)){
        var path = bf.pathTo(v);
        console.log('=====path from 0 to ' + v + ' start==========');
        for(var i = 0; i < path.length; ++i) {
            var e = path[i];
            console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
        }
        console.log('=====path from 0 to ' + v + ' end==========');
        console.log('=====distance: '  + bf.distanceTo(v) + '=========');
    }
}
```

### Find the shortest paths using Topological Sort Shortest Paths

The sample code below show how to obtain the shortest paths from a starting point 0 on a weighted directed acylic graph using Topological Sort:

```javascript
var jsgraphs = require('js-graph-algorithms');
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


var bf = new jsgraphs.TopologicalSortShortestPaths(g, 0);

for(var v = 1; v < g.V; ++v){
    if(bf.hasPathTo(v)){
        var path = bf.pathTo(v);
        console.log('=====path from 0 to ' + v + ' start==========');
        for(var i = 0; i < path.length; ++i) {
            var e = path[i];
            console.log(e.from() + ' => ' + e.to() + ': ' + e.weight);
        }
        console.log('=====path from 0 to ' + v + ' end==========');
        console.log('=====distance: '  + bf.distanceTo(v) + '=========');
    }
}
```

### Find the MaxFlow-MinCut using Ford-Fulkerson algorithm

The sample code below show how to obtain the MaxFlow-MinCut of a directed weighted graph using ford-fulkerson algorithm (Link: [HTML DEMO](https://rawgit.com/chen0040/js-graph-algorithms/master/examples/example-ford-fulkerson.html)):

```javascript
var jsgraphs = require('js-graph-algorithms');
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

g.node(2).label = 'Hello';
g.edge(0, 1).label = 'World';

var source = 0;
var target = 7;
var ff = new jsgraphs.FordFulkerson(g, source, target);
console.log('max-flow: ' + ff.value);

var minCut = ff.minCut(g);

for(var i = 0; i < minCut.length; ++i) {
    var e = minCut[i];
    console.log('min-cut: (' + e.from() + ", " + e.to() + ')');
}
```