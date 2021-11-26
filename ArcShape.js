

// This object is defined by 2 points delineating the arc. Note that the first
// point is the spherical origin.
class ArcShape
{
  constructor(pnt1, pnt2)
  {
    this.pnt1 = pnt1;
    this.pnt2 = pnt2;
  }

  display()
  {
    // console.log("this.start: " + this.start);
    // console.log("this.end:   " + this.end);

    // Draw a line between the 2 points.
    push();
    strokeWeight(0.7);
    stroke(102, 0, 102);
    line(this.pnt1.x, this.pnt1.y, this.pnt1.z,
         this.pnt2.x, this.pnt2.y, this.pnt2.z);
    pop();


    // Draw a half arc in yellow points along the xy axis.
    push();
    strokeWeight(2);
    stroke(255, 255, 166);
    for (let i = 0; i < PI; i = i + 0.2)
    {
      let x = cos(i) * 20 + this.pnt1.x;
      let y = sin(i) * 20 + this.pnt1.y;
      let z = 0;
      point(x, y, z);
    }
    pop();


    // Then draw a vertical half arc.
    push();
    stroke(255);
    strokeWeight(3);
    // Compute the angle based upon the this.start position.
    let a = atan(this.pnt2.y / this.pnt2.x);
    // console.log("a=" + degrees(a));
    if (this.pnt2.x < 0)
    {
      a += PI;
    }

    for (let j = 0; j < PI; j = j + 0.2)
    {
      let x = 20 * cos(a) * sin(j) + this.pnt1.x;
      let y = 20 * sin(a) * sin(j) + this.pnt1.y;
      let z = 20 *          cos(j);
      point(x, y, z);
    }
    pop();


    push();
    // Draw a midpoint circle.
    let mp = new p5.Vector(this.pnt2.x/2,
                           this.pnt2.y/2,
                           this.pnt2.z/2);
    stroke(255, 100, 255);
    strokeWeight(1);
    point(mp.x,
          mp.y,
          mp.z);

    strokeWeight(0.9);
    for (let i = 0; i < TWO_PI; i = i + 0.3)
    {
      let x = 10 * cos(i) + mp.x;
      let y = 10 * sin(i) + mp.y;
      let z = 10 * 0 + mp.z;
      point(x, y, z);
    }
    pop();


    // Draw a "vertical" circle much like the half arc above.
    push();
    strokeWeight(1);
    stroke(0, 255, 0);
    // TODO, you can rotate these limits to draw different parts of the arc.
    for (let j = -HALF_PI; j < HALF_PI; j = j + 0.2)
    {
      let x = 10 * cos(a) * sin(j) + mp.x + this.pnt1.x;
      let y = 10 * sin(a) * sin(j) + mp.y + this.pnt1.y;
      let z = 10 *          cos(j) + mp.z;
      point(x, y, z);
    }
    pop();
  }
}
