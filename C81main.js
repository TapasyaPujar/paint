canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";
width_of_line=5;

var mouseEvent= "empty";
var last_position_of_x,last_position_of_y;

//codes for mousedown event

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown (e){
    console.log("mousedown event");
    mouseEvent="mousedown";

}
//codes for mouseup event

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    console.log("mouseup event");
    mouseEvent="mouseup";

}
//codes for mouseleave event

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave (e){
    console.log("mouseleave event");
    mouseEvent="mouseleave";

}


//codes for mousemove+mousedown
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
current_position_of_x=e.clientX-canvas.offsetLeft;
current_position_of_y=e.clientY-canvas.offsetTop;

if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    ctx.stroke();

    



}

last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;


}

//codes for touch events which will only work on mobile screen

var width=screen.width;
var new_canvas_width=screen.width-100;
var new_canvas_height=screen.height-300;

if(width<992){
    document.getElementById("myCanvas").width=new_canvas_width;
    document.getElementById("myCanvas").height=new_canvas_height;
    document.body.style.overflow="hidden";
}
//codes for touchstart event(click)
canvas.addEventListener("touchstart", My_touchstart);

function My_touchstart(e){
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
console.log("Last position of x and y coordinates are ");
console.log(last_position_of_x , last_position_of_y);
}

//codes for touchmove event
canvas.addEventListener("touchmove" , My_touchmove);
function My_touchmove(e){
current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
//codes to draw a line
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=8;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
ctx.stroke();

last_position_of_x=current_position_of_touch_x;
last_position_of_y=current_position_of_touch_y;


}

