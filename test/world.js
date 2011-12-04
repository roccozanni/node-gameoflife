var assert = require('assert');
var World  = require('../src/world.js');

suite('World', function() {

    suite('contains', function() {

        test('should return if the world contains a live cell at the specified position', function(){
            
            var w = new World();
            assert.ok(!w.contains(0,0), "not contains cell");

            w.add(0,0);
            assert.ok(w.contains(0,0), "contains cell");

        });

    }),


    suite('aliveNeighbors', function(){

    	test('should count the number of alive neighbors', function(){
    		var w = new World();
    		assert.equal(w.aliveNeighbors(0,0), 0, "no alive neighbors");

			w.add(10,10);
    		assert.equal(w.aliveNeighbors(0,0), 0, "no alive neighbors");

    		w.add(-1,-1);
    		w.add(-1,0);
    		w.add(-1,1);
    		w.add(0,-1);
    		w.add(0,0);
    		w.add(0,1);
    		w.add(1,-1);
    		w.add(1,0);
    		w.add(1,1);

    		assert.equal(w.aliveNeighbors(0,0), 9, "nine alive neighbors");

    	});
    	
    });

    suite('evolve', function() {

        test('oscillator', function(){
            
            var w1 = new World();
            w1.add(1, 0);
            w1.add(1, 1);
            w1.add(1, 2);

			var w2 = new World();
            w1.evolve(w2);

            assert.ok(w2.contains(0, 1), "oscillator 1st cell");
            assert.ok(w2.contains(1, 1), "oscillator 2nd cell");
            assert.ok(w2.contains(2, 1), "oscillator 3rd cell");

        });

    });

});