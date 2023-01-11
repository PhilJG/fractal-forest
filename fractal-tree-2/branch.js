function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;

  //   moves the ends of the branch between -1 & 1
  this.jitter = function () {
    this.end.x += random(-0.5, 0.5);
    this.end.y += random(-0.5, 0.5);
  };

  this.show = function () {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  };
  this.branchA = function () {
    //Direction vector subtract end from the beginning
    var dir = p5.Vector.sub(this.end, this.begin);
    //Rotate direction vector right
    dir.rotate(PI / 4);
    //shrink directon
    dir.mult(0.67);
    // est new end point is the end point of previous vector with the diecrtion vector
    var newEnd = p5.Vector.add(this.end, dir);
    // right branc goes to the new end vector
    var b = new Branch(this.end, newEnd);

    return b;
  };
  this.branchB = function () {
    var dir = p5.Vector.sub(this.end, this.begin);
    // -PI = rotate to te left
    dir.rotate(-PI / 4);
    //shrink directon
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd);

    return b;
  };
}
