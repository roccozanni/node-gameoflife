
var Cell = require('./cell.js');

module.exports = function() {

    var cells = {},
        min_x, max_x,
        min_y, max_y;

    function _reset()
    {
        cells = {};

        min_x = Number.MAX_VALUE;
        min_y = Number.MAX_VALUE;

        max_x = Number.MIN_VALUE;
        max_y = Number.MIN_VALUE;
    };

    _reset();

    return {

        add: function(c) {

            var x = c.getX(), y = c.getY();

            min_x = Math.min(min_x, x);
            min_y = Math.min(min_y, y);
            max_x = Math.max(max_x, x);
            max_y = Math.max(max_y, y);

            cells[c.getHash()] = c;
        },

        contains: function(c) {
            return cells[c.getHash()] !== undefined;
        },

        reset: function() {
            _reset();
        },

        aliveNeighbors: function(c) {
            var n = c.getNeighbors();

            var alive = 0;
            for (var i = 0; i < n.length; i++) {
                alive += this.contains(n[i], n[i]) ? 1 : 0;
            }

            return alive;
        },

        evolve: function(w) {
            w.reset();

            for (var x = min_x - 1 ; x <= max_x + 1; x++) {
                for (var y = min_y - 1 ; y <= max_y + 1; y++) {

                    var cell        = new Cell(x, y);
                    var isAlive     = this.contains(cell);
                    var neighbors   = this.aliveNeighbors(cell);

                    if (neighbors === 3 || (isAlive && neighbors === 2)) {
                        w.add(cell);
                    }

                }
            }

        }
    };  

};