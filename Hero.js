class Hero {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("Superhero.png")
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      imageMode(CENTER);
      //rect(pos.x, pos.y, this.width, this.height);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
      
    }
  };