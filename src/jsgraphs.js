var jsgraphs = jsgraphs || {};

(function(jss){
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

})(jsgraphs);

if(module) {
	module.exports = jsgraphs;
}