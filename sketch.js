function setup() {
  createCanvas(800,600)
  background(200,105,68)
  frameRate(50)
}

function draw() {
  
  translate(width/2,height/2)

    //if(frameCount<=160){
        
        var alp = PI/80;
      
        var x = cos(frameCount*alp);
        var y = sin(frameCount*alp);
    
        line(300,0,x*300,y*300)
        stroke(lerpColor(color(10,160,60),color(0,28,160),frameCount%320/160))
     
    }



