class Ball {
    constructor(canvas, mouse) {
        this.mouse = mouse;
        this.canvas = canvas;
        this.x = Math.floor(canvas.width / 2);
        this.y = Math.floor(canvas.height / 2);
        this.vX = 0;
        this.vY = 0;
        this.radius = (canvas.width > canvas.height ? canvas.height : canvas.width) / 10;
        this.bounce = 0.9;
        this.gravity = 10 / 40;
    }
    draw(context) { //draw in canvas
        context.fillStyle = "rgba(255,0,0,255)";
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill()
        context.stroke()
    }
    update() {
        this.vX += this.mouse.forceX * 0.05;
        this.vY += this.mouse.forceY * 0.05;
        this.mouse.forceX = 0;
        this.mouse.forceY = 0;

        //if its on the ground and has speed
        if (this.y >= canvas.height - this.radius && this.vY > 0) {
            this.vY *= -this.bounce;
        }

        //if it can descend, descend, else get to the ground
        if (this.y + this.vY < canvas.height - this.radius) {
            this.vY += this.gravity;
            this.y += this.vY;
        }
        
        //X movement
        if ((this.x <= 0 && this.vX < 0) || (this.x >= canvas.width && this.vX > 0)) {
            this.vX *= -this.bounce;
        }
        
        this.x += this.vX;
        this.y += this.vY;
    }
}