// TODO: Delete methods that are only meant to be private.
declare namespace Jss {
  function less(
    a1: any,
    a2: any,
    compare: (a1: any, a2: any) => number
  ): boolean;

  function exchange(a: any, i: number, j: number): void;

  class Stack<T> {
    push(a: T): void;
    pop(): T;
    size(): number;
    isEmpty(): boolean;
    peep(): T;
    toArray(): T[];
  }

  class Queue<T> {
    enqueue(item: T): number;
    dequeue(): T;
    size(): number;
    isEmpty(): boolean;
    toArray(): T[];
  }

  class MinPQ<T> {
    constructor(compare: (a1: number, a2: number) => number);
    enqueue(item: T): void;
    swim(k: number): void;
    delMin(): T;
    sink(k: number): void;
    size(): number;
    isEmpty(): boolean;
  }

  class QuickUnion {
    constructor(V: number);
    union(v: number, w: number): void;
    root(q: number): number;
    connected(v: number, w: number): boolean;
  }

  class IndexMinPQ {
    constructor(N: number, compare: (a1: number, a2: number) => number);
    insert(index: number, key: number): void;
    decreaseKey(index: number, key: number): void;
    minKey(): number;
    min(): number;
    delMin(): number;
    swim(k: number): void;
    sink(k: number): void;
    containsIndex(index: number): boolean;
    isEmpty(): boolean;
    size(): number;
  }

  type AnyGraph<T> =
    | Graph<T>
    | DiGraph<T>
    | WeightedGraph<T>
    | WeightedDiGraph<T>;

  class Graph<T> {
    constructor(V: number);
    addEdge(v: number, w: number): void;
    adj(v: number): T[];
    node(v: number): T;
    edge(v: number, w: number): Edge | null;
    V: number;
  }

  class DiGraph<T> {
    constructor(V: number);
    addEdge(v: number, w: number): void;
    adj(v: number): T[];
    node(v: number): T;
    edge(v: number, w: number): Edge | null;
    reverse(): DiGraph<T>;
    V: number;
  }

  class Edge {
    constructor(v: number, w: number, weight: number);
    either(): number;
    other(x: number): number;
    from(): number;
    to(): number;
  }

  class WeightedGraph<T> {
    constructor(V: number);
    addEdge(v: number, w: number): void;
    adj(v: number): T[];
    node(v: number): T;
    edge(v: number, w: number): Edge | null;
    V: number;
  }

  class WeightedDiGraph<T> {
    constructor(V: number);
    addEdge(v: number, w: number): void;
    adj(v: number): T[];
    node(v: number): T;
    edge(v: number, w: number): Edge | null;
    toDiGraph(): DiGraph<T>;
    V: number;
  }

  class FlowEdge {
    constructor(v: number, w: number, capacity: number);
    residualCapacityTo(x: number): number;
    addResidualFlowTo(x: number, deltaFlow: number): void;
    from(): number;
    to(): number;
    other(x: number): number;
  }

  class FlowNetwork<T> {
    constructor(V: number);
    node(v: number): T;
    edge(v: number, w: number): Edge | null;
    addEdge(e: Edge): void;
    adj(v: number): T[];
  }

  class DepthFirstSearch<T> {
    constructor(G: AnyGraph<T>, s: number);
    dfs(G: AnyGraph<T>, v: number): void;
    hasPathTo(v: number): boolean;
    pathTo(v: number): number[];
  }

  class BreadthFirstSearch<T> {
    constructor(G: AnyGraph<T>, s: number);
    hasPathTo(v: number): boolean;
    pathTo(v: number): number[];
  }

  class ConnectedComponents<T> {
    constructor(G: AnyGraph<T>);
    dfs(G: AnyGraph<T>, v: number): void;
    componentId(v: number): number;
    componetnCount(): number;
  }

  class TopologicalSort<T> {
    constructor(G: AnyGraph<T>);
    dfs(G: AnyGraph<T>, v: number): void;
    order(): T[];
  }

  class StronglyConnectedComponents<T> {
    constructor(G: AnyGraph<T>);
    dfs(G: AnyGraph<T>, v: number): void;
    componentId(v: number): number;
    componentCount(): number;
  }

  class KruskalMST<T> {
    constructor(G: AnyGraph<T>);
    mst: Edge[];
  }

  class LazyPrimMST<T> {
    constructor(G: AnyGraph<T>);
    visit(G: AnyGraph<T>, v: number): void;
    mst: Edge[];
  }

  class EagerPrimMST<T> {
    constructor(G: AnyGraph<T>);
    visit(G: AnyGraph<T>, v: number): void;
    mst: Edge[];
  }

  class Dijkstra<T> {
    constructor(G: AnyGraph<T>, s: number);
    relax(e: Edge): void;
    hasPathTo(v: number): boolean;
    pathTo(v: number): number[];
    distanceTo(v: number): number;
  }

  class BellmanFord<T> {
    constructor(G: AnyGraph<T>, s: number);
    relax(e: Edge): void;
    hasPathTo(v: number): boolean;
    pathTo(v: number): number[];
    distanceTo(v: number): number;
  }

  class TopologicalSortShortestPaths<T> {
    constructor(G: AnyGraph<T>, s: number);
    relax(e: Edge): void;
    hasPathTo(v: number): boolean;
    pathTo(v: number): number[];
    distanceTo(v: number): number;
  }

  class FordFulkerson<T> {
    constructor(G: AnyGraph<T>, s: number, t: number);
    hasAugmentedPath(G: AnyGraph<T>): boolean;
    minCut(G: AnyGraph<T>): Edge[];
    value: number;
  }
}

declare module "js-graph-algorithms" {
  export = Jss;
}
