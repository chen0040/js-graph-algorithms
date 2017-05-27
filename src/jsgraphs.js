var jsgraphs = jsgraphs || {};

(function(jss){
    
    jss.less = function(a1, a2, compare) {
        return compare(a1, a2) < 0;
    };
    
    jss.exchange = function(a, i, j) {
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    };
    
    var StackNode = function (value) {
        this.value = value;
        this.next = null;
    };
    
    jss.StackNode = StackNode;
    
    var Stack = function() {
        this.N = 0;
        this.first = null;
    };
    
    Stack.prototype.push = function (a) {
        this.first = this._push(this.first, a);  
    };
    
    Stack.prototype._push = function(x, a) {
        if(x == null) {
            this.N++;
            return new jss.StackNode(a);
        }  
        var oldX = x;
        this.N++;
        x = new jss.StackNode(a);
        x.next = oldX;
        return x;
    };
    
    Stack.prototype.pop = function () {
        if (this.first == null) {
            return undefined;
        }  
        
        var oldFirst = this.first;
        var item = oldFirst.value;
        this.first = oldFirst.next;
        this.N--;
        
        return item;
    };
    
    Stack.prototype.size = function() {
        return this.N;  
    };
    
    Stack.prototype.isEmpty = function() {
        return this.N == 0;  
    };
    
    Stack.prototype.peep = function() {
        if (this.first == null) {
            return undefined;
        }  
        
        return this.first.value;
    };
    
    Stack.prototype.toArray = function() {
        var result = [];
        x = this.first;
        while (x != null) {
            result.push(x.value);
            x = x.next;
        }
        return result;
    };
    
    jss.Stack = Stack;
    
    var QueueNode = function(a) {
        this.value = a;  
        this.next = null;
    };
    
    jss.QueueNode = QueueNode;
    
    var Queue = function() {
        this.first = null;
        this.last = null;
        this.N = 0;
    };
    
    Queue.prototype.enqueue = function(item) {
        var oldLast = this.last;
        this.last = new jss.QueueNode(item);
        if(oldLast != null){
            oldLast.next = this.last;
        }
        if (this.first == null) {
            this.first = this.last;
        }
        this.N++;
    };
    
    Queue.prototype.dequeue = function() {
        if(this.first == null) {
            return undefined;
        }  
        
        var oldFirst = this.first;
        var item = oldFirst.value;
        this.first = oldFirst.next;
        
        if(this.first == null) {
            this.last = null;
        }
        
        this.N--;
        
        return item;
    };
    
    Queue.prototype.size = function() {
        return this.N;  
    };
    
    Queue.prototype.isEmpty = function() {
        return this.N == 0;
    };
    
    Queue.prototype.toArray = function() {
        var result = [];
        var x = this.first;
        while (x != null) {
            result.push(x.value);
            x = x.next;
        }
        return result;
    };
    
    jss.Queue = Queue;
    
    var MinPQ = function(compare) {
        this.s = [];
        this.N = 0;
        if(!compare) {
            compare = function(a1, a2) {
                return a1 - a2;
            };
        }
        this.compare = compare;
    };
    
    MinPQ.prototype.enqueue = function(item) {
        while(this.s.lengh <= this.N+1) {
            this.s.push(0);
        }   
        this.s[++this.N] = item;
        this.swim(this.N);
    };
    
    MinPQ.prototype.swim = function(k) {
        while (k > 1){
            var parent = Math.floor(k / 2);
            if(jss.less(this.s[k], this.s[parent], this.compare)){
                jss.exchange(this.s, k, parent);
                k = parent;
            } else {
                break;
            }
        }
    };
    
    MinPQ.prototype.delMin = function() {
        if(this.N == 0) {
            return undefined;
        }  
        
        var item = this.s[1];
        jss.exchange(this.s, 1, this.N--);
        this.sink(1);
        return item;
    };
    
    MinPQ.prototype.sink = function(k) {
        while(k * 2 <= this.N) {
            var child = 2 * k;
            if(child < this.N && jss.less(this.s[child+1], this.s[child], this.compare)){
                child++;
            }
            if(jss.less(this.s[child], this.s[k], this.compare)){
                jss.exchange(this.s, child, k);
                k = child;
            } else {
                break;
            }
        }  
    };
    
    MinPQ.prototype.size = function(){
        return this.N;
    };
    
    MinPQ.prototype.isEmpty = function() {
        return this.N == 0;
    };
    
    jss.MinPQ = MinPQ;
    
    var QuickUnion = function(V) {
        this.id = [];
        for (var v = 0; v < V; ++v) {
            this.id.push(v);
        }
    };
    
    QuickUnion.prototype.union = function(v, w) {
        var q = this.root(v);
        var p = this.root(w);
        
        if(p != q) {
            this.id[p] = q;
        }
    };
    
    QuickUnion.prototype.root = function(q) {
        while(this.id[q] != q) {
            q = this.id[q];
        }  
        return q;
    };
    
    QuickUnion.prototype.connected = function(v, w) {
        return this.root(v) == this.root(w);  
    };
    
    jss.QuickUnion = QuickUnion;
    
	var Graph = function (V) {
        this.V = V;
        this.adjList = [];
        for (var i = 0; i < V; ++i) {
            this.adjList.push([]);
        }
    };
    
    Graph.prototype.addEdge = function(v, w){
        this.adjList[v].push(w);
        this.adjList[w].push(v);
    };
    
    Graph.prototype.adj = function(v) {
        return this.adjList[v];  
    };
    
    jss.Graph = Graph;
    
    var DiGraph = function(V) {
        this.V = V;
        this.adjList = [];
        for (var v = 0; v < V; ++v){
            this.adjList.push([]);
        }
    };
    
    DiGraph.prototype.addEdge = function(v, w){
        this.adjList[v].push(w);
    };
    
    DiGraph.prototype.adj = function(v) {
        return this.adjList[v];  
    };
    
    DiGraph.prototype.reverse = function(){
        var g = new DiGraph(this.V);
        for (var v = 0; v < this.V; ++v) {
            var adj_v = this.adjList[v];
            for (var i = 0; i < adj_v.length; ++i){
                var w = adj_v[i];
                g.addEdge(w, v);
            }
        }
        return g;
    };
    
    jss.DiGraph = DiGraph;
    
    var Edge = function(v, w, weight) {
        this.v = v;
        this.w = w;
        this.weight = weight;
    };
    
    Edge.prototype.either = function() {
        return this.v;
    };
    
    Edge.prototype.other = function(x) {
        return x == this.v ? this.w : this.v;
    };
    
    Edge.prototype.from = function() {
        return this.v;
    };
    
    Edge.prototype.to = function() {
        return this.w;
    };
    
    jss.Edge = Edge;
    
    var WeightedGraph = function(V) {
        this.V = V;
        this.adjList = [];
        
        for ( var v = 0; v < V; ++v) {
            this.adjList.push([]);
        }
    };
    
    WeightedGraph.prototype.adj = function(v) {
        return this.adjList[v];  
    };
    
    WeightedGraph.prototype.addEdge = function(e) {
        var v = e.either();
        var w = e.other(v);
        this.adjList[v].push(e);
        this.adjList[w].push(e);
    };
    
    jss.WeightedGraph = WeightedGraph;
    
    var DepthFirstSearch = function(G, s) {
        this.s = s;
        var V = G.V;
        this.marked = [];
        this.edgeTo = [];
        for (var v = 0; v < V; ++v) {
            this.marked.push(false);
            this.edgeTo.push(-1);
        }
        
        this.dfs(G, s);
    };
    
    DepthFirstSearch.prototype.dfs = function (G, v) {
        this.marked[v] = true;
        var adj_v = G.adj(v);
        for (var i = 0; i < adj_v.length; ++i){
            var w = adj_v[i];
            if (!this.marked[w]){
                this.edgeTo[w] = v;
                this.dfs(G, w);
            }
        }
    };
    
    DepthFirstSearch.prototype.hasPathTo = function(v) {
        return this.marked[v];
    };
    
    DepthFirstSearch.prototype.pathTo = function(v) {
        var path = new jss.Stack();
        if(v == this.s) return [v];
        
        for(var x = v; x != this.s; x = this.edgeTo[x]) {
            path.push(x);
        }
        path.push(this.s);
        return path.toArray();
    };
    
    jss.DepthFirstSearch = DepthFirstSearch;
    
    var BreadthFirstSearch = function(G, s) {
        var V = G.V;
        this.s = s;
        
        var queue = new jss.Queue();
        queue.enqueue(s);
        this.marked = [];
        this.edgeTo = [];
        
        for(var v = 0; v < V; ++v) {
            this.marked.push(false);
            this.edgeTo.push(-1);
        }
        
        while (!queue.isEmpty()) {
            var v = queue.dequeue();
            this.marked[v] = true;
            var adj_v = G.adj(v);
            for (var i = 0; i < adj_v.length; ++i) {
                var w = adj_v[i];
                if(!this.marked[w]){
                    this.edgeTo[w] = v;
                    queue.enqueue(w);
                }
            }
        }
    };
    
    BreadthFirstSearch.prototype.hasPathTo = function(v) {
        return this.marked[v];
    };
    
    BreadthFirstSearch.prototype.pathTo = function(v) {
        var path = new jss.Stack();
        if(v == this.s) return [v];
        
        for(var x = v; x != this.s; x = this.edgeTo[x]) {
            path.push(x);
        }
        path.push(this.s);
        return path.toArray();
    };
    
    jss.BreadthFirstSearch = BreadthFirstSearch;
    
    var ConnectedComponents = function(G) {
        this.count = 0;
        var V = G.V;
        this.marked = [];
        this.id = [];
        for (var v = 0; v < V; ++v) {
            this.marked.push(false);
            this.id.push(-1);
        }
        
        for (var v = 0; v < V; ++v) {
            if(!this.marked[v]){
                this.dfs(G, v);
                this.count++;
            }
        }
    };
    
    ConnectedComponents.prototype.dfs = function(G, v) {
        this.marked[v] = true;
        this.id[v] = this.count;
        var adj_v = G.adj(v);
        
        for(var i = 0; i < adj_v.length; ++i){
            var w = adj_v[i];
            if(!this.marked[w]){
                this.dfs(G, w);
            }
        }
    };
    
    ConnectedComponents.prototype.componentId = function(v) {
        return this.id[v];
    };
    
    ConnectedComponents.prototype.componentCount = function(){
        return this.count;
    };
    
    
    jss.ConnectedComponents = ConnectedComponents;
    
    var TopologicalSort = function(G) {
        this.postOrder = new jss.Stack();
        this.marked = [];
        var V = G.V;
        for (var v = 0; v < V; ++v) {
            this.marked.push(false);
        }
        
        for (var v = 0; v < V; ++v) {
            if(!this.marked[v]) {
                this.dfs(G, v);
            }
        }
    };
    
    TopologicalSort.prototype.dfs = function(G, v) {
        this.marked[v] = true;
        var adj_v = G.adj(v);
        for (var i = 0; i < adj_v.length; ++i) {
            var w = adj_v[i];
            if(!this.marked[w]){
                this.dfs(G, w);
            }
        }
        this.postOrder.push(v);
    };
    
    TopologicalSort.prototype.order = function() {
        return this.postOrder.toArray();  
    };
    
    jss.TopologicalSort = TopologicalSort;
    
    var StronglyConnectedComponents = function(G) {
        var V = G.V;
        this.count = 0;
        this.marked = [];
        this.id = [];
        
        for(var v = 0; v < V; ++v) {
            this.marked.push(false);
            this.id.push(-1);
        }
        
        var order = new jss.TopologicalSort(G.reverse()).order();
        for( var i = 0; i < order.length; ++i) {
            var v = order[i];
            if(!this.marked[v]){
                this.dfs(G, v);
                this.count++;
            }
        }
    };
    
    StronglyConnectedComponents.prototype.dfs = function (G, v) {
        this.marked[v] = true;
        this.id[v] = this.count;
        var adj_v = G.adj(v);
        for (var i = 0; i < adj_v.length; ++i){
            var w = adj_v[i];
            if(!this.marked[w]){
                this.dfs(G, w);
            }
        }
    };
    
    
    StronglyConnectedComponents.prototype.componentId = function(v) {
        return this.id[v];
    };
    
    StronglyConnectedComponents.prototype.componentCount = function(){
        return this.count;
    };
    
    jss.StronglyConnectedComponents = StronglyConnectedComponents;
    
    var KruskalMST = function(G) {
        var V = G.V;
        var pq = new jss.MinPQ(function(e1, e2){
            return e1.weight - e2.weight;
        });
        for(var v = 0; v < G.V; ++v){
            var adj_v = G.adj(v);
            for (var i = 0; i < adj_v.length; ++i) {
                var e = adj_v[i];
                if(e.either() != v) {
                    continue;
                }
                pq.enqueue(e);
            }
        }
        
        this.mst = [];
        
        var uf = new jss.QuickUnion(V);
        while (!pq.isEmpty() && this.mst.length < V-1) {
            var e = pq.delMin();
            var v = e.either();
            var w = e.other(v);
            
            if(!uf.connected(v, w)){
                uf.union(v, w);
                this.mst.push(e);
            }
        }
    };
    
    
    
    jss.KruskalMST = KruskalMST;
    
    var LazyPrimMST = function(G) {
        var V = G.V;
        this.marked = [];
        for( var v = 0; v < V; ++v) {
            this.marked.push(false);
        }
        
        this.pq = new jss.MinPQ(function(e1, e2){
            return e1.weight - e2.weight;
        });
        
        this.mst = [];
        
        this.visit(G, 0);
        
        while(!this.pq.isEmpty() && this.mst.length < V-1) {
            var e = this.pq.delMin();
            var v = e.either();
            var w = e.other(v);
            if(this.marked[v] && this.marked[w]) continue;
            this.mst.push(e);
            if(!this.marked[v]) this.visit(G, v);
            if(!this.marked[w]) this.visit(G, w);
        }
    };
    
    LazyPrimMST.prototype.visit = function(G, v) {
        this.marked[v]  = true;
        var adj_v = G.adj(v);
        for (var i = 0; i < adj_v.length; ++i) {
            var e = adj_v[i];
            if(!this.marked[e.other(v)]){
                this.pq.enqueue(e);
            }
        }
    };
    
    jss.LazyPrimMST = LazyPrimMST;

})(jsgraphs);

if(module) {
	module.exports = jsgraphs;
}