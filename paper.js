class Paper {
    constructor(x, y) {
        var options  = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, PI*4, options);
        this.RADIUS = PI*4;

        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position
        ellipseMode(RADIUS);
        circle(pos.x, pos.y, this.RADIUS);
        push();
        translate(pos.x, pos.y);
        strokeWeight(4);
        stroke("green");
        fill(255);
        pop();
    }
}