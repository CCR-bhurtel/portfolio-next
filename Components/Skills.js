import React, { useEffect } from "react";
import * as PIXI from "pixi.js";

function Skills() {
  var data = [
    { name: "HTML", color: "linear-gradient(#2196f3,#e91e63)" },
    { name: "CSS", color: "linear-gradient(red,#f0f)" },
    { name: "Javascript", color: "linear-gradient(#2196f3,#e91e63)" },
    { name: "React.js", color: "linear-gradient(red,#f0f)" },
    { name: "Node.js", color: "linear-gradient(#2196f3,#e91e63)" },
    { name: "UI/UX", color: "linear-gradient(red,#f0f)" },
    { name: "Python", color: "linear-gradient(#2196f3,#e91e63)" },
    { name: "Next.js", color: "linear-gradient(red,#f0f)" },
    { name: "Redux.js", color: "linear-gradient(#2196f3,#e91e63)" },
  ];

  function getCoords(ev, canvas) {
    var rect = canvas.getBoundingClientRect();
    var x = ev.data.global.x - rect.left - rect.width / 2;
    var y = ev.data.global.y - rect.top - rect.height / 2;

    return [x, -y];
  }

  var balls = [];

  var renderer = PIXI.autoDetectRenderer(
    window.innerWidth,
    window.innerHeight,
    { transparent: true, antialias: true }
  );
  const canvasT = document.querySelector(".canvasSkills");
  canvasT.appendChild(renderer.view);

  var world = new p2.World({ gravity: [0, 0] });
  world.defaultContactMaterial.friction = 0.2;
  //means it never stops:
  world.defaultContactMaterial.restitution = 0.9;
  // world.defaultContactMaterial.stiffness = Number.MAX_VALUE;
  world.defaultContactMaterial.stiffness = 1e7;
  // Create a body for the cursor
  var mouseBody = new p2.Body();
  world.addBody(mouseBody);

  var stage = new PIXI.Container();
  stage.position.set(renderer.width / 2, renderer.height / 2);
  stage.scale.set(1, -1);

  //ceiling
  var planeShape = new p2.Plane();
  var ceiling = new p2.Body({
    position: [0, renderer.height / 2],
    angle: Math.PI,
    damping: 0,
  });
  ceiling.addShape(planeShape);
  world.addBody(ceiling);
  //floor
  planeShape = new p2.Plane();
  var floor = new p2.Body({
    position: [0, -renderer.height / 2],
    damping: 0,
  });
  floor.addShape(planeShape);
  world.addBody(floor);

  //left wall
  planeShape = new p2.Plane();
  wallLeft = new p2.Body({
    position: [-renderer.width / 2, 0],
    angle: -Math.PI / 2,
    damping: 0,
  });
  wallLeft.addShape(planeShape);
  world.addBody(wallLeft);

  //right wall
  planeShape = new p2.Plane();
  wallRight = new p2.Body({
    position: [renderer.width / 2, 0],
    angle: Math.PI / 2,
    damping: 0,
  });
  wallRight.addShape(planeShape);
  world.addBody(wallRight);

  var Ball = function (t, c, r, x) {
    this.init = function () {
      this.el = new PIXI.Container();
      this.el.scale.set(1, -1);
      this.baseRadius = this.radius = r;

      this.circle = new PIXI.Graphics();
      this.circle.beginFill(c);
      this.circle.drawCircle(0, 0, this.radius);
      this.circle.endFill();
      this.circle.interactive = true;
      this.circle.hitArea = new PIXI.Circle(0, 0, this.radius);
      this.el.hitArea = this.circle.hitArea;
      this.circle.scale.set(1, -1);
      this.el.addChild(this.circle);

      stage.addChild(this.el);

      var text = new PIXI.Text(t, {
        fontFamily: "Arial",
        fontSize: 14,
        fill: 0xffffff,
        align: "center",
        wordWrap: true,
      });
      text.anchor.set(0.5);
      this.el.addChild(text);

      var startX =
        Math.round(Math.random() * renderer.width) - renderer.width / 2;
      var startY =
        Math.round(Math.random() * renderer.height) - renderer.height / 2;

      this.shape = new p2.Circle({ radius: this.radius });
      this.body = new p2.Body({
        mass: 1e3,
        position: [startX, startY],
      });

      this.body.angularDamping = 0;
      this.body.damping = 0;
      this.body.addShape(this.shape);

      world.addBody(this.body);
    };

    this.update = function () {
      this.el.position.x = this.body.position[0];
      this.el.position.y = this.body.position[1];
      //this.el.rotation = this.body.angle;
    };

    var mouseConstraint;
    this.onPointerDown = function (ev) {
      if (mouseConstraint) {
        world.removeConstraint(mouseConstraint);
        mouseConstraint = null;
      }
      var coords = getCoords(ev, renderer.view);
      var localPointInBox = p2.vec2.create();
      this.body.toLocalFrame(localPointInBox, coords);

      mouseConstraint = new p2.RevoluteConstraint(mouseBody, this.body, {
        localPivotA: [0, 0],
        localPivotB: localPointInBox,
      });
      world.addConstraint(mouseConstraint);
    };

    this.onPointerMove = function (ev) {
      var coords = getCoords(ev, renderer.view);
      mouseBody.position[0] = coords[0];
      mouseBody.position[1] = coords[1];
    };

    this.onPointerUp = function (ev) {
      world.removeConstraint(mouseConstraint);
      mouseConstraint = null;
    };

    this.click = function () {
      this.enlarged = !this.enlarged;
      TweenMax.to(this, 0.2, {
        radius: this.enlarged ? this.baseRadius + 20 : this.baseRadius,
        onUpdate: this.updateRadius.bind(this),
        onComplete: this.updateRadius.bind(this),
      });
    };

    this.updateRadius = function () {
      this.shape.radius = this.radius;
      this.circle.clear();
      this.circle.beginFill(c);
      this.circle.drawCircle(0, 0, this.radius);
      this.circle.endFill();
      this.body.updateBoundingRadius();
      this.circle.hitArea.radius = this.radius;
    };

    this.init.call(this);
    this.circle.click = this.click.bind(this);
    this.el.interactive = true;
    this.el.on("pointerdown", this.onPointerDown.bind(this));
    this.el.on("pointermove", this.onPointerMove.bind(this));
    this.el.on("pointerup", this.onPointerUp.bind(this));
    this.el.on("pointerupoutside", this.onPointerUp.bind(this));
    this.el.on("pointercancel", this.onPointerUp.bind(this));
  };

  for (var i = 0; i < data.length; i++) {
    var ball = new Ball(data[i].name, data[i].color, 50, i);
    balls.push(ball);
  }

  window.addEventListener("resize", function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var halfWidth = width / 2;
    var halfHeight = height / 2;
    renderer.resize(width, height);
    floor.position[1] = -halfHeight;
    ceiling.position[1] = halfHeight;
    wallRight.position[0] = halfWidth;
    wallLeft.position[0] = -halfWidth;
    stage.position.set(halfWidth, halfHeight);
  });

  setInterval(() => {
    var index = Math.round(Math.random() * balls.length);
    var ball = balls[index];
    ball.body.applyForce([
      -ball.body.position[0] * 100,
      -ball.body.position[1] * 100,
    ]);
    //this.body.applyForce([-this.body.position[0] / 10000, -this.body.position[1] / 10000]);
  }, 5000);

  var fixedTimeStep = 1 / 60; // seconds
  var maxSubSteps = 10; // Max sub steps to catch up with the wall clock
  var lastTime;

  function animate(time) {
    requestAnimationFrame(animate);
    //var deltaTime = lastTime ? (time - lastTime) / 1000 : 0;
    world.step(fixedTimeStep);
    for (var i = 0; i < balls.length; i++) {
      balls[i].update();
    }
    renderer.render(stage);
    //lastTime = time;
  }
  useEffect(() => {
    animate();
  }, []);

  return (
    <div className="skills cavasSkills">
      <div className="about-title">
        <h3 className="about-head">About</h3>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Skills;
