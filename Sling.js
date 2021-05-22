class Sling {
  constructor (bodyA , bodyB) {
    var options = {
      bodyA: bodyA, //the first term is the parameter and the second term is the variable
      bodyB: bodyB ,  
      stiffness: 0.04,
      length: 10
     }

    this.sling = Constraint.create(options); // creating constraint
    
    World.add(world,this.sling);
  }
 
  display() {
      var pA = this.sling.bodyA.position; // we are writing sling here so that it is connected to the body
      var pB = this.sling.bodyB.position;
      line(pA.x,pA.y,pB.x,pB.y);

  }



}