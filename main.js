canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width= 100;
rover_height= 90;
rover_x= 10;
rover_y= 10;
img_array=["1.jpg", "2.jpg","3.jpg", "4.jpg", "5.jpg" ];
random_number=Math.floor(Math.random()*4);
background_img= img_array[random_number];
rover_img="rover.png";
function add(){
background_imgTag= new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src= background_img;

Rover_imgTag= new Image();
Rover_imgTag.onload=uploadRover;
Rover_imgTag.src= rover_img;


}
function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadRover(){
    ctx.drawImage(Rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown", my_keyDown)
function my_keyDown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=="38"){
    up();
    console.log("up");

}
if(keyPressed=="37"){
   Left();
    console.log("Left");
}
if(keyPressed=="39"){
    Right();
    console.log("Right");}

    if(keyPressed=="40"){
        Down();
        console.log("Down");}
    }
    function up(){
        if (rover_y>=0){
            rover_y= rover_y-10;
            console.log("When Up arrow is pressed, x=  " + rover_x + " y= "+ rover_y)
                uploadBackground();
                uploadRover();
        }
        
        
    }
    function Down(){
        if (rover_y<=500){
            rover_y= rover_y+10;
            console.log("When Down arrow is pressed, x=  " + rover_x + " y= "+ rover_y)
                uploadBackground();
                uploadRover();
        }
        
        
    }
    function Left(){
        if (rover_x>=0){
            rover_x= rover_x-10;
            console.log("When left arrow is pressed, x=  " + rover_x + " y= "+ rover_y)
                uploadBackground();
                uploadRover();
        }
        
        
    }
    function Right(){
        if (rover_x<=700){
            rover_x= rover_x+10;
            console.log("When Right arrow is pressed, x=  " + rover_x + " y= "+ rover_y);
                uploadBackground();
                uploadRover();
        }
        
        
    }