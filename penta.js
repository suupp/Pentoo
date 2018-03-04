// declare array where we store penta figures
var pentas = [];

// draw a pentamino figure. figure is an array of 5. return true if drawn successfully

var drawFigure = function(position_x, position_y, figure, color) {
// if color isn't passed with parameters, we use a random one
    if (color == null) var color = randomColor();

// check for board size fitment, return false if no fit
var fit = true;
  figure.forEach(function(element) {
        if (position_x+element[0]>BoardWidth-1 || position_x+element[0]<0) fit=false;
        if (position_y+element[1]>BoardHeight-1 || position_y+element[1]<0) fit=false;
    });

// exit if not fit
    if (!fit) return false;

// check for location fitment
figure.forEach(function(element) {
        if(!isRectEmpty(position_x+element[0],position_y+element[1])) fit=false;
    });

// exit if not fit
    if (!fit) return false;

// if the figure fits, draw it
    figure.forEach(function(element) {
        drawRect(position_x+element[0], position_y+element[1], color);
    });
// if the everything went successfull, we return true
    return true;
}

// wash out pentamino figure from the board

var clearFigure = function(position_x, position_y, figure) {
    drawFigure(position_x, position_y, figure, 'white');
}

// fill in the array with pentomino figures per https://en.wikipedia.org/wiki/Pentomino#Symmetry

// 4 vaiations of L figure 
pentas.push([[0,0], [1,0], [2,0], [3,0], [3,1]]);
pentas.push([[0,0], [0,1], [0,2], [0,3], [-1,3]]);
pentas.push([[0,0], [0,1], [1,1], [2,1], [3,1]]);
pentas.push([[0,0], [1,0], [0,1], [0,2], [0,3]]);

// 4 vaiations of mirrored L figure 

// 8 vaiations of F figure 

// 8 vaiations of N figure 

// 8 vaiations of P figure 

// 8 vaiations of Y figure 

// 4 vaiations of T figure 

// 4 vaiations of U figure 

// 4 vaiations of V figure 

// 4 vaiations of W figure

// 4 vaiations of Z figure

// 2 vaiations of I figure

// 1 vaiation of X figure

//console.log("debug");
//console.log(pentas);