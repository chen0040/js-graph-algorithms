var expect    = require("chai").expect;
var jsgraphs = require("../src/jsgraphs");

describe("Create f distribution", function() {
  describe("default constructor", function() {
    var distribution = new jsgraphs.FDistribution(10.0, 15.0);
    it("has df1 of 10.0 and df2 of 15.0", function() {
    	expect(distribution.df1).to.equal(10.0); 
      expect(distribution.df2).to.equal(15.0); 
      
    });
  });

  describe('run cumulative probability', function(){
    var distribution = new jsgraphs.FDistribution(10.0, 15.0);
    it('has cumulativeProbability working', function(){
      for(var F=0.2; F < 10.0; F += 0.5){
        console.log(F + ': ' + distribution.cumulativeProbability(F));
      }
    });
  });


});