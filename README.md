# Overview

This repository contains a single [p5.js](https://p5js.org/) sketch that demonstrates drawing a circular arc that intersects 2 points. This sketch includes a sphere with 3 rotating points. The 3 rotating points include the intersecting arc (in green), as well as additinoal shapes which were used to demonstrate variant geometries.

The approach for constructing a circular arc includes finding the midpoint between the 2 specified points (pink), then drawing a circle upon the xy axis. Lastly, rotating that circle based upon the angle of rotation.


![CircularArc](/assets/screencapture.gif)



# Building
In order to operate this sketch, you must download the following dependencies, and place them in the "libraries" folder so that they are correctly references from the index.html file:
```
  <script language="javascript" type="text/javascript" src="libraries/p5.min.js"></script>
  <script language="javascript" type="text/javascript" src="libraries/p5.easycam.js"></script>
```


Then open the index.html file in your browser and observe the sketch.

# Dependencies
* [p5.js](https://github.com/processing/p5.js/)
* [p5.EasyCam](https://diwi.github.io/p5.EasyCam/)


# Contributions and Further Work
Please feel free to contribute to this sketch. 
For questions or comments, feel free to reach out to me on GitHub or my email at bruckart@gmail.com.

    1. Fork it ( https://github.com/bruckart/robot_planning_library.git)
    2. Create your feature branch (git checkout -b feature/fooBar)
    3. Commit your changes (git commit -am 'Add some fooBar')
    4. Push to the branch (git push origin feature/fooBar)
    5. Create a new Pull Request

Planned features include:
* Integration with a sound library in some capacity.
* Ability to move the sketch away from the origin.
