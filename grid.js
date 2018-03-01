var width_per_rectangle;
var height_per_rectangle;
var num_rectangles_wide;
var num_rectangles_tall;
var drawGridRects = function(num_rectangles_wide, num_rectangles_tall, boundingRect) {
     width_per_rectangle = boundingRect.width / num_rectangles_wide;
     height_per_rectangle = boundingRect.height / num_rectangles_tall;
    for (var i = 0; i < num_rectangles_wide; i++) {
        for (var j = 0; j < num_rectangles_tall; j++) {
            var aRect = new paper.Path.Rectangle(boundingRect.left + i * width_per_rectangle, boundingRect.top + j * height_per_rectangle, width_per_rectangle, height_per_rectangle);
            aRect.strokeColor = 'black';
            aRect.fillColor = 'white';
        }
    }
}

var bRect;
var fillRect = function() {
bRect = new paper.Path.Rectangle(1,1,width_per_rectangle-2,height_per_rectangle-2);
bRect.fillColor = 'blue';
}
/*var resetGrid = function(num_rectangles_wide, num_rectangles_tall, boundingRect) {
  width_per_rectangle = boundingRect.width / num_rectangles_wide;
  height_per_rectangle = boundingRect.height / num_rectangles_tall;
  for (var i = 0; i < num_rectangles_wide; i++) {
      for (var j = 0; j < num_rectangles_tall; j++) {
        var cRect = new paper.Path.Rectangle(boundingRect.left + i * width_per_rectangle, boundingRect.top + j * height_per_rectangle, width_per_rectangle, height_per_rectangle);
          cRect.fillColor = 'red';
      }
  }
}
