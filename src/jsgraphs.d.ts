declare namespace JsGraphs {
    interface Node {
        label?: string;
    }
    class StackNode<T> {
        value: T;
        next: StackNode<T> | null;
        constructor(value: T);
    }
    class Stack<T> {
        private N;
        private first;
        constructor();
        push(a: T): void;
        _push(x: StackNode<T> | null, a: T): StackNode<T>;
        pop(): T | undefined;
        size(): number;
        isEmpty(): boolean;
        peep(): T | undefined;
        toArray(): T[];
    }
    class QueueNode<T> {
        value: T;
        next: QueueNode<T> | null;
        constructor(a: T);
    }
    class Queue<T> {
        private first;
        private last;
        private N;
        constructor();
        enqueue(item: T): void;
        dequeue(): T | undefined;
        size(): number;
        isEmpty(): boolean;
        toArray(): T[];
    }
    class MinPQ<T> {
        private s;
        private N;
        private compare;
        constructor(compare?: (a1: any, a2: any) => number);
        enqueue(item: T): void;
        swim(k: number): void;
        delMin(): T | undefined;
        sink(k: number): void;
        size(): number;
        isEmpty(): boolean;
    }
    class QuickUnion {
        private id;
        constructor(V: number);
        union(v: number, w: number): void;
        root(q: number): number;
        connected(v: number, w: number): boolean;
    }
    class IndexMinPQ<T> {
        private keys;
        private pq;
        private qp;
        private N;
        private compare;
        constructor(N: number, compare?: (a1: any, a2: any) => number);
        insert(index: number, key: T): void;
        decreaseKey(index: number, key: T): void;
        minKey(): T | null;
        min(): number;
        delMin(): number;
        swim(k: number): void;
        sink(k: number): void;
        containsIndex(index: number): boolean;
        isEmpty(): boolean;
        size(): number;
    }
    class Graph {
        V: number;
        private adjList;
        private nodeInfo;
        private edges;
        constructor(V: number);
        addEdge(v: number, w: number): void;
        adj(v: number): number[];
        node(v: number): Node;
        edge(v: number, w: number): Edge | null;
    }
    class DiGraph {
        V: number;
        private adjList;
        private nodeInfo;
        private edges;
        constructor(V: number);
        addEdge(v: number, w: number): void;
        edge(v: number, w: number): Edge | null;
        adj(v: number): number[];
        node(v: number): Node;
        reverse(): DiGraph;
    }
    class Edge {
        private v;
        private w;
        weight: number;
        label?: string;
        constructor(v: number, w: number, weight: number);
        either(): number;
        other(x: number): number;
        from(): number;
        to(): number;
    }
    class WeightedGraph {
        V: number;
        protected adjList: Edge[][];
        private nodeInfo;
        constructor(V: number);
        adj(v: number): Edge[];
        edge(v: number, w: number): Edge | null;
        node(v: number): Node;
        addEdge(e: Edge): void;
    }
    class WeightedDiGraph extends WeightedGraph {
        addEdge(e: Edge): void;
        edge(v: number, w: number): Edge | null;
        toDiGraph(): DiGraph;
    }
    class FlowEdge {
        private v;
        private w;
        private capacity;
        private flow;
        label?: string;
        constructor(v: number, w: number, capacity: number);
        residualCapacityTo(x: number): number;
        addResidualFlowTo(x: number, deltaFlow: number): void;
        from(): number;
        to(): number;
        other(x: number): number;
    }
    class FlowNetwork {
        V: number;
        private adjList;
        private nodeInfo;
        constructor(V: number);
        node(v: number): Node;
        edge(v: number, w: number): FlowEdge | null;
        addEdge(e: FlowEdge): void;
        adj(v: number): FlowEdge[];
    }
    class DepthFirstSearch<T> {
        private s;
        private marked;
        private edgeTo;
        constructor(G: Graph, s: number);
        dfs(G: Graph, v: number): void;
        hasPathTo(v: number): boolean;
        pathTo(v: number): number[];
    }
    class BreadthFirstSearch {
        private V;
        private s;
        private marked;
        private edgeTo;
        constructor(G: Graph, s: number);
        hasPathTo(v: number): boolean;
        pathTo(v: number): number[];
    }
    class ConnectedComponents {
        private count;
        private marked;
        private id;
        constructor(G: Graph);
        dfs(G: Graph, v: number): void;
        componentId(v: number): number;
        componentCount(): number;
    }
    class TopologicalSort {
        private postOrder;
        private marked;
        constructor(G: DiGraph);
        dfs(G: DiGraph, v: number): void;
        order(): number[];
    }
    class StronglyConnectedComponents {
        private count;
        private marked;
        private id;
        constructor(G: DiGraph);
        dfs(G: DiGraph, v: number): void;
        componentId(v: number): number;
        componentCount(): number;
    }
    class KruskalMST {
        mst: Edge[];
        constructor(G: WeightedGraph);
    }
    class LazyPrimMST {
        mst: Edge[];
        private marked;
        private pq;
        constructor(G: WeightedGraph);
        visit(G: WeightedGraph, v: number): void;
    }
    class EagerPrimMST {
        mst: Edge[];
        private pq;
        private marked;
        constructor(G: WeightedGraph);
        visit(G: WeightedGraph, v: number): void;
    }
    class Dijkstra {
        private s;
        private marked;
        private edgeTo;
        private cost;
        private pq;
        constructor(G: WeightedGraph, s: number);
        relax(e: Edge): void;
        hasPathTo(v: number): boolean;
        pathTo(v: number): Edge[];
        distanceTo(v: number): number;
    }
    class BellmanFord {
        private s;
        private marked;
        private edgeTo;
        private cost;
        constructor(G: WeightedGraph, s: number);
        relax(e: Edge): void;
        hasPathTo(v: number): boolean;
        pathTo(v: number): Edge[];
        distanceTo(v: number): number;
    }
    class TopologicalSortShortestPaths {
        private s;
        private marked;
        private edgeTo;
        private cost;
        constructor(G: WeightedDiGraph, s: number);
        relax(e: Edge): void;
        hasPathTo(v: number): boolean;
        pathTo(v: number): Edge[];
        distanceTo(v: number): number;
    }
    class FordFulkerson {
        value: number;
        private marked;
        private edgeTo;
        private s;
        private t;
        constructor(G: FlowNetwork, s: number, t: number);
        hasAugmentedPath(G: FlowNetwork): boolean;
        minCut(G: FlowNetwork): FlowEdge[];
    }
}

declare module "js-graph-algorithms" {
  export = JsGraphs;
}
