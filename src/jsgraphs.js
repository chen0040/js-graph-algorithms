var jsgraphs = jsgraphs || {};

(function(jss){
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
    
    jss.DiGraph = DiGraph;
    
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
    
    

})(jsgraphs);

if(module) {
	module.exports = jsgraphs;
}