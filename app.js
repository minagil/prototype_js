var Shape = function(width,height,color){
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = function(){
    console.log(`${this.color}으로 그릴거에요.`);
  }

  this.getArea = function(){
    return this.width * this.height;
  }
}


var Rectangle = function(){
  Shape.apply(this,arguments)
}
var Triangle = function(){
  var _this = this;
  Shape.apply(this,arguments);
  
  this.draw = function(){
    // Shape.draw.call()
    console.log("🔺");
  }
  
  this.getArea = function(){
    return (this.width * this.height) / 2;
  }
}

// Rectangle.prototype = new Shape();
Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

// var retangle = new Rectangle(100,100,'검정');
// retangle.draw();
// console.log(retangle.getArea());

var triangle = new Triangle(100,100,'빨강');
triangle.draw();
console.log(triangle.getArea());

/*
prototye method
*/
var Shape = function(width,height,color){
  this.width = width;
  this.height = height;
  this.color = color; 
}

Shape.prototype.draw = function(){
  console.log(`${this.color}으로 그릴거에요.`);
}

Shape.prototype.getArea = function(){
  return this.width * this.height;
}


var Rectangle = function(){
  Shape.apply(this,arguments)
}
var Triangle = function(){
  Shape.apply(this,arguments);
}


Rectangle.prototype = new Shape();
Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

Triangle.prototype.draw = function(){
  Shape.prototype.draw.call(this);
  console.log("🔺");
}

Triangle.prototype.getArea = function(){
  return (this.width * this.height) / 2;
}

var triangle = new Triangle(100,100,'빨강');
triangle.draw();
console.log(triangle.getArea());

var retangle = new Rectangle(100,100,'검정');
retangle.draw();
console.log(retangle.getArea());