class BOX{
    constructor(x,y,w,h){
        var options={
            friction:1,
            density:1,
            isStatic:true

          }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
       

        push();
        
        
        rectMode(CENTER);
      
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}