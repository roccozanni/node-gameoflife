
var Cell = function(pos_x, pos_y) {

    var x = pos_x,
        y = pos_y;
    
    return {

        getX: function() {
            return x;
        },

        getY: function() {
            return y;
        },

        getNeighbors: function() {
            return [
                new Cell(x-1, y-1),
                new Cell(x-1, y),
                new Cell(x-1, y+1),
                new Cell(x, y-1),
                new Cell(x, y),
                new Cell(x, y+1),
                new Cell(x+1, y-1),
                new Cell(x+1, y),
                new Cell(x+1, y+1)
            ];
        },
        
        getHash: function(){
            return x + ',' + y; 
        }   
            
    };

};

module.exports = Cell;