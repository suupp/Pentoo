
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
    position_x = Math.floor(Math.random()*num_rectangles_wide);
    position_y = Math.floor(Math.random()*num_rectangles_tall);
    drawRect(position_x, position_y, 'blue');
    Board[position_x][position_y]="#0000FF";
}

// draw a single rectangle in a given position //

var drawRect = function(position_x, position_y, color) {
            ctx.fillStyle = color;
            ctx.fillRect(position_x * width_per_rectangle, position_y * height_per_rectangle, width_per_rectangle, height_per_rectangle);
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


