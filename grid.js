
var width_per_rectangle;
var height_per_rectangle;
var num_rectangles_wide;
var num_rectangles_tall;
var aRect;
var drawGridRects = function(num_rectangles_wide, num_rectangles_tall, boundingRect) {
     width_per_rectangle = boundingRect.width / num_rectangles_wide;
     height_per_rectangle = boundingRect.height / num_rectangles_tall;
    for (var i = 0; i < num_rectangles_wide; i++) {
        for (var j = 0; j < num_rectangles_tall; j++) {
            aRect = new paper.Path.Rectangle(boundingRect.left + i * width_per_rectangle, boundingRect.top + j * height_per_rectangle, width_per_rectangle, height_per_rectangle);
            aRect.strokeColor = 'black';
            aRect.fillColor = 'white';
        }
    }
}

// draw random rectangle //

var fillRandomRect = function(num_rectangles_wide, num_rectangles_tall) {
    // make sure if there's an empty space on the board
    var emptyRect=findFirstEmptyRect();
    if(!emptyRect) return;
    
    // choose random place 
    random_x = Math.floor(Math.random()*num_rectangles_wide);
    random_y = Math.floor(Math.random()*num_rectangles_tall);
    
    // check whether the place is already occupied, if so - find another one
    if(Board[random_x][random_y]) fillRandomRect(num_rectangles_wide, num_rectangles_tall);
    else {
        Board[random_x][random_y]="#0000ff";
        drawBoard();
    }
}

// draw a single rectangle in a given position //

var drawRect = function(position_x, position_y, color) {
            if (color=="#0000ff") {
                // fill with texture a static block
                ctx.fillStyle = ctx.createPattern(brickImage, "repeat");
            } else {
                ctx.fillStyle = color;
            }
            ctx.fillRect(position_x * width_per_rectangle, position_y * height_per_rectangle, width_per_rectangle, height_per_rectangle);
            
            // draw black outline
            ctx.strokeStyle=0;
            ctx.strokeRect(position_x * width_per_rectangle, position_y * height_per_rectangle, width_per_rectangle, height_per_rectangle);
}

// verify whether board's position is empty or not

var isRectEmpty = function(position_x, position_y) {
    //   get the rect's middle pixel 
    var pixeldata = ctx.getImageData(position_x * width_per_rectangle+width_per_rectangle/2,position_y * height_per_rectangle+height_per_rectangle/2,1,1).data; 

    //returns true if the pixel is white   
    return pixeldata[0]+pixeldata[1]+pixeldata[2]==255*3;
}


