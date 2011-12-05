var assert = require('assert');
var World  = require('../src/world.js');
var Cell   = require('../src/cell.js');

suite('World', function() {

    suite('#contains()', function() {

        test('should return false if the world does not contains the cell', function(){
            var w = new World();

            assert.ok(!w.contains(new Cell(0,0)));
        });

        test('should return true if the world contains the cell', function(){
            var w = new World();
            var c = new Cell(0,0);
            w.add(c);

            assert.ok(w.contains(c));
        });

        test('should return true if the world contains a cell with the same position', function(){
            var w = new World();
            w.add(new Cell(0,0));

            assert.ok(w.contains(new Cell(0,0)), "contains a cell with the same coords");
        });


    }),


    suite('#aliveNeighbors()', function(){

    	test('should return zero if the world is empty', function(){
    		var w = new World();
            
    		assert.equal(w.aliveNeighbors(new Cell(0,0)), 0);
    	});

        test('should return zero if the cell has no neighbors', function(){
            var w = new World();
            w.add(new Cell(10,10));

            assert.equal(w.aliveNeighbors(new Cell(0,0)), 0, "no alive neighbors");
        });

        test('should return the correct number of alive neighbors', function(){
            var w = new World();
            w.add(new Cell(-1,-1));
            w.add(new Cell(-1,0));
            w.add(new Cell(-1,1));
            w.add(new Cell(0,-1));
            w.add(new Cell(0,0));
            w.add(new Cell(0,1));
            w.add(new Cell(1,-1));
            w.add(new Cell(1,0));
            w.add(new Cell(1,1));

            assert.equal(w.aliveNeighbors(new Cell(0,0)), 9, "nine alive neighbors");
        });
    	
    });

    suite('#evolve()', function() {

        test('creates an oscillator pattern', function(){
            var w1 = new World();
            w1.add(new Cell(1, 0));
            w1.add(new Cell(1, 1));
            w1.add(new Cell(1, 2));

			var w2 = new World();
            w1.evolve(w2);

            assert.ok(w2.contains(new Cell(0, 1)), "oscillator 1st cell");
            assert.ok(w2.contains(new Cell(1, 1)), "oscillator 2nd cell");
            assert.ok(w2.contains(new Cell(2, 1)), "oscillator 3rd cell");
        });

    });

});