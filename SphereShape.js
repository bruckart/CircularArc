

class SphereShape
{
  constructor()
  {
    this.origin = new p5.Vector(0, 0, 0);

    this.mark1 = 0;
    this.mark2 = radians(120);
    this.mark3 = radians(240);
  }

  display()
  {
    push();
    stroke(255, 255, 255);
    strokeWeight(3);
    // console.log("this.origin: " + this.origin);


    let p1 = new p5.Vector(20 * cos(this.mark1) + this.origin.x,
                           20 * sin(this.mark1) + this.origin.y,
                           0);
    let p2 = new p5.Vector(20 * cos(this.mark2) + this.origin.x,
                           20 * sin(this.mark2) + this.origin.y,
                           0);
    let p3 = new p5.Vector(20 * cos(this.mark3) + this.origin.x,
                           20 * sin(this.mark3) + this.origin.y,
                           0);

    point(p1.x, p1.y, p1.z);
    point(p2.x, p2.y, p2.z);
    point(p3.x, p3.y, p3.z);



    this.mark1 += 0.01;
    if (this.mark1 >= TWO_PI) this.mark1 = 0;

    this.mark2 += 0.01;
    if (this.mark2 >= TWO_PI) this.mark2 = 0;

    this.mark3 += 0.01;
    if (this.mark3 >= TWO_PI) this.mark3 = 0;
    pop();


    let as1 = new ArcShape(this.origin, p1);
    as1.display();
    let as2 = new ArcShape(this.origin, p2);
    as2.display();
    let as3 = new ArcShape(this.origin, p3);
    as3.display();

    push();  
    stroke(255, 204, 204);
    strokeWeight(0.5);

    for (let i = 0; i < PI; i = i + 0.2)
    {
      for (let j = 0; j < TWO_PI; j = j + 0.2)
      {
        let x = 20 * cos(j) * sin(i) + this.origin.x;
        let y = 20 * sin(j) * sin(i) + this.origin.y;
        let z = 20 *          cos(i);
        point(x, y, z);
      }
    }

    pop();
  }
}
