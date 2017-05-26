var expect    = require("chai").expect;
var jsgraphs = require("../src/jsgraphs");

describe("Create t distribution", function() {
  describe("default constructor", function() {
    var distribution = new jsgraphs.TDistribution(10.0);
    it("has df of 10.0", function() {
    	expect(distribution.df).to.equal(10.0); 
      
    });
  });

  describe('run cumulative probability', function(){
    var distribution = new jsgraphs.TDistribution(10);
    it('has probability of 0.5 at t_df = 0', function(){
      expect(distribution.cumulativeProbability(0.0)).to.equal(0.5);
    });
    it('has t_df = 0 with probability of 0.5', function(){
      expect(distribution.invCumulativeProbability(0.5)).to.above(-0.001);
      expect(distribution.invCumulativeProbability(0.5)).to.below(+0.001);
    });
    it('should run correctly and ascendingly for Z on range p = 0 to p = 1.0', function(){
      var prevZ = -10000000;
      for(var p = 0.0; p < 1.0; p += 0.01) {
        var Z = distribution.invCumulativeProbability(p);
        expect(Z).to.above(prevZ);
        prevZ = Z;
      }
    })
  });


});