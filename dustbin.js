class Dustbin
{
	constructor(x,y)
	{
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
        this.angle=0;	
        
		var options={
            isStatic:true
        }

		this.bottomBody=Bodies.rectangle(x, y, this.dustbinWidth, this.wallThickness, options);
        this.leftWallBody=Bodies.rectangle(x-this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options);
        Matter.Body.setAngle(this.leftWallBody, this.angle);
        this.rightWallBody=Bodies.rectangle(x+this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options)
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
        
		World.add(world, this.bottomBody);
		World.add(world, this.leftWallBody);
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
            var posRight=this.rightWallBody.position;
            
			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,20, 100);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,20, 100);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,200, 20);
    		pop()	
	}
}