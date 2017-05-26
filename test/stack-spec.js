var expect = require('chai').expect;
var jsgraphs = require('../src/jsgraphs');

describe('Stack operations', function(){
   describe('Stack push and pop', function(){
        
       
        it('should be able to push, peep and pop', function(){
            var stack = new jsgraphs.Stack();
            stack.push(10);
            expect(stack.size()).to.equal(1);
            expect(stack.peep()).to.equal(10);
            expect(stack.pop()).to.equal(10);
            expect(stack.size()).to.equal(0);
            expect(stack.isEmpty()).to.equal(true);
            for(var i = 0; i < 100; ++i) {
                stack.push(i);
                expect(stack.size()).to.equal(i+1);
            }
            var a = stack.toArray();
            for(var i = 0; i < 100; ++i) {
                expect(a[i]).to.equal(100 - i - 1);  
            }
            
            for(var i = 0; i < 100; ++i) {
                expect(stack.pop()).to.equal(100 - i - 1);
                expect(stack.size()).to.equal(100 -i - 1);
            }
            
        });
   });
});