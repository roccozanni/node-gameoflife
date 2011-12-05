var assert = require('assert');
var Cell   = require('../src/cell.js');

suite('Cell', function() {

    suite('#getHash()', function() {

        test('should return a unique hash based on coordinates', function(){
            
            var c1 = new Cell(0, 0);
            assert.equal(c1.getHash(), '0,0');

            var c2 = new Cell(1, 1);
            assert.equal(c2.getHash(), '1,1');

        });

    })

});