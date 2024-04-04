class Circle {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }

  move(xOffset, yOffset) {
    this.xPos += xOffset;
    this.yPos += yOffset;
    console.log();
  }

  get surface() {
    function calculateArea(myRadius) {
      return Math.PI * myRadius ** 2;
    }
    // let myRadius = 5;
    console.log(calculateArea(5));
  }
}

let circle = new Circle(5, 5, 10);
console.log(circle);
