var expect    = require("chai").expect;
var jsgraphs = require("../src/jsgraphs");

describe("Create normal distribution", function() {
  describe("default constructor", function() {
    var distribution = new jsgraphs.NormalDistribution();
    it("has mean of 0.0 and sd of 1.0", function() {
    	
      console.log('lnconstant: ' + distribution.lnconstant);
    	expect(distribution.mean).to.equal(0.0);
    	expect(distribution.sd).to.equal(1.0);
    });

    it("has 50% cumulative area at Z = 0", function(){
      expect(distribution.cumulativeProbability(0.0)).to.above(0.4999);
      expect(distribution.cumulativeProbability(0.0)).to.below(0.5001);
    });

    it("has Z = 0 at 50%", function(){
      expect(distribution.invCumulativeProbability(0.5)).to.equal(0.0);
    });
  });

  describe("Constructor with arguments", function() {
    it("has user-defined mean and sd", function() {
    	var distribution = new jsgraphs.NormalDistribution(5.0, 12.0);
    	expect(distribution.mean).to.equal(5.0);
    	expect(distribution.sd).to.equal(12.0);
    });
  });
});