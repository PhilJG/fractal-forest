var tree = [];
var leaves = [];

var count = 0;

function setup() {
  createCanvas(400, 400);
  //to store a point is to use a p5 vector object
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);
  //   spawns a new branch from branch.js
  root = new Branch(a, b);

  //root goes into the tree array
  tree[0] = root;
}

// on mouse click generate two branches on the root/tree[0]
function mousePressed() {
  //go backward through the array
  for (var i = tree.length - 1; i >= 0; i--) {
    //if tree[i] branch is not finished add branches
    if (!tree[i].finished) {
      // push  branch A & B tree[i])
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    //set tree [i] to finished so it will only grow branches once
    tree[i].finished = true;
  }
  //everytime clicked add 1
  count++;

  if (count === 6) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        // make a leaf a the end point of the 5th branch
        var leaf = tree[i].end.copy();
        // push leaf into leaves array
        leaves.push(leaf);
      }
    }
  }
}

function draw() {
  background(51);
  for (var i = 0; i < tree.length; i++) {
    // shows the branch
    tree[i].show();
    //jitters the branch
    // tree[i].jitter();
  }

  for (var i = 0; i < leaves.length; i++) {
    // create leaves with no stoke
    fill(127, 255, 0, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    //Move the leaves down (y) by a random amount
    leaves[i].y += random(0, 1);
    // leaves[i].x += random(1, 0);
  }
}
