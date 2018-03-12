var pentas = [];

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// draw board from an image we store in Board array

var drawBoard = function() {
    var color;
    for (var position_x = 0; position_x < BoardWidth; position_x++)
        for (var position_y = 0; position_y < BoardHeight; position_y++) {
            if (Board[position_x][position_y]) color = Board[position_x][position_y]; else color='white';           drawRect(position_x, position_y, color);
        }
}

// draw a pentamino figure. figure is an array of 5. return true if drawn successfully

var drawFigure = function(position_x, position_y, figure, color) {
// if color isn't passed with parameters, we use a random one
    if (color == null) var color = randomColor();

// check for board boundaries fitment, return false if no fit
var fit = true;
  figure.forEach(function(element) {
        if (position_x+element[0]>BoardWidth-1 || position_x+element[0]<0) fit=false;
        if (position_y+element[1]>BoardHeight-1 || position_y+element[1]<0) fit=false;
    });

// exit if not fit
    if (!fit) return false;

// check for location fitment
figure.forEach(function(element) {
        if(Board[position_x+element[0]][position_y+element[1]]) fit=false;
    });

// exit if not fit
    if (!fit) return false;

// if the figure fits, draw it
    figure.forEach(function(element) {
        //drawRect(position_x+element[0], position_y+element[1], color);
        Board[position_x+element[0]][position_y+element[1]]=color;
    });
// if the everything went successfull, we return true
    return true;
}

// wash out pentamino figure from the board

var clearFigure = function(position_x, position_y, figure) {
    figure.forEach(function(element) {
        //drawRect(position_x+element[0], position_y+element[1], 'white');
        Board[position_x+element[0]][position_y+element[1]]=false;
    });
}

// search the board for a first available empty rect 

var findFirstEmptyRect = function() {
    for (line = 0; line < BoardHeight; line++) { 
        for (column = 0; column < BoardWidth; column++) {
            if(!Board[column][line]) return [column,line];
        }
    }
    // if empty rect not found (the board is fully filled) return false 
    return false;
}

// fill in the array with pentomino figures per https://en.wikipedia.org/wiki/Pentomino#Symmetry

// 4 vaiations of L figure
pentas.push([[0,0], [1,0], [2,0], [3,0], [3,1]]);
pentas.push([[0,0], [0,1], [0,2], [0,3], [-1,3]]);
pentas.push([[0,0], [0,1], [1,1], [2,1], [3,1]]);
pentas.push([[0,0], [1,0], [0,1], [0,2], [0,3]]);

// 4 vaiations of mirrored L figure
pentas.push([[0,0], [1,0], [2,0], [3,0], [3,-1]]);
pentas.push([[0,0], [0,1], [0,2], [0,3], [1,3]]);
pentas.push([[0,0], [1,0], [2,0], [3,0], [0,1]]);
pentas.push([[0,0], [1,0], [1,1], [1,2], [1,3]]);


// 8 vaiations of F figure
pentas.push([[0,0], [1,0], [1,-1], [2,-1], [1,1]]);
pentas.push([[0,0], [0,1], [-1,1], [1,1], [1,2]]);
pentas.push([[0,0], [0,1], [1,1], [1,2], [2,1]]);
pentas.push([[0,0], [0,1], [1,1], [0,2], [-1,2]]);
pentas.push([[0,0], [1,0], [1,-1], [2,0], [0,1]]);
pentas.push([[0,0], [1,0], [1,1], [2,1], [1,2]]);
pentas.push([[0,0], [1,0], [1,1], [1,-1], [2,1]]);
pentas.push([[0,0], [1,0], [1,1], [2,0], [2,-1]]);

// 8 vaiations of N figure
pentas.push([[0,0], [0,-1], [0,-2], [1,0], [1,1]]);
pentas.push([[0,0], [1,0], [1,-1], [2,-1], [3,-1]]);
pentas.push([[0,0], [1,0], [2,0], [2,-1], [3,-1]]);
pentas.push([[0,0], [0,1], [1,1], [1,2], [1,3]]);
pentas.push([[0,0], [1,0], [1,-1], [0,1], [0,2]]);
pentas.push([[0,0], [1,0], [2,0], [2,1], [3,1]]);
pentas.push([[0,0], [1,0], [1,1], [2,1], [3,1]]);
pentas.push([[0,0], [0,1], [1,0], [1,-1], [1,-2]]);

// 8 vaiations of P figure
pentas.push([[0,0], [1,0], [2,0], [0,1], [1,1]]);
pentas.push([[0,0], [1,0], [0,1], [1,1], [1,2]]);
pentas.push([[0,0], [1,1], [0,1], [0,1], [1,2]]);
pentas.push([[0,0], [1,0], [2,0], [1,-1], [2,-1]]);
pentas.push([[0,0], [0,-1], [0,-2], [1,-1], [1,-2]]);
pentas.push([[0,0], [1,0], [2,0], [1,1], [2,1]]);
pentas.push([[0,0], [1,0], [0,1], [1,1], [2,1]]);
pentas.push([[0,0], [0,1], [1,1], [1,0], [1,-1]]);

// 8 vaiations of Y figure
pentas.push([[0,0], [0,1], [0,2], [0,3], [1,2]]);
pentas.push([[0,0], [1,0], [2,0], [3,0], [1,1]]);
pentas.push([[0,0], [1,0], [2,0], [3,0], [2,-1]]);
pentas.push([[0,0], [0,1], [0,2], [0,3], [-1,1]]);
pentas.push([[0,0], [1,0], [2,0], [3,0], [2,1]]);
pentas.push([[0,0], [0,1], [0,2], [0,3], [-1,2]]);
pentas.push([[0,0], [0,1], [0,2], [0,3], [1,1]]);
pentas.push([[0,0], [0,1], [-1,1], [1,1], [2,1]]);

// 4 vaiations of T figure
pentas.push([[0,0], [1,0], [2,0], [1,1], [1,2]]);
pentas.push([[0,0], [0,1], [0,2], [-1,2], [1,2]]);
pentas.push([[0,0], [1,0], [2,0], [2,-1], [2,1]]);
pentas.push([[0,0], [0,1], [0,2], [1,1], [2,1]]);

// 4 vaiations of U figure
pentas.push([[0,0], [0,1], [1,1], [2,1], [2,0]]);
pentas.push([[0,0], [0,1], [1,0], [2,0], [2,1]]);
pentas.push([[0,0], [0,1], [0,2], [1,0], [1,2]]);
pentas.push([[0,0], [1,0], [1,1], [1,2], [0,2]]);

// 4 vaiations of V figure
pentas.push([[0,0], [0,1], [0,2], [1,2], [2,2]]);
pentas.push([[0,0], [1,0], [2,0], [2,-1], [2,-2]]);
pentas.push([[0,0], [0,1], [0,2], [1,0], [2,0]]);
pentas.push([[0,0], [1,0], [2,0], [2,1], [2,2]]);

// 4 vaiations of W figure
pentas.push([[0,0], [0,1], [1,1], [1,2], [2,2]]);
pentas.push([[0,0], [1,0], [1,-1], [2,-1], [2,-2]]);
pentas.push([[0,0], [1,0], [1,1], [2,1], [2,2]]);
pentas.push([[0,0], [0,1], [1,0], [1,-1], [2,-1]]);

// 4 vaiations of Z figure
pentas.push([[0,0], [1,0], [1,1], [1,2], [2,2]]);
pentas.push([[0,0], [0,1], [0,2], [-1,2], [1,0]]);
pentas.push([[0,0], [1,0], [2,0], [2,-1], [0,1]]);
pentas.push([[0,0], [0,1], [1,1], [2,1], [2,2]]);

// 2 vaiations of I figure
pentas.push([[0,0], [1,0], [2,0], [3,0], [4,0]]);
pentas.push([[0,0], [0,1], [0,2], [0,3], [0,4]]);

// 1 vaiation of X figure
pentas.push([[0,0], [1,0], [2,0], [1,-1], [1,1]]);

//console.log("debug");
//console.log(pentas);
