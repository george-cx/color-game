var colors = generaterandomcolors(vr);
var vr = 6;
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("button");
// var easybtn = document.getElementById("easybtn");
// var hardbtn = document.getElementById("hardbtn");
var modebtn = document.querySelectorAll(".mode");
// easybtn.addEventListener("click", function(){
//     foreasy();
      
// })

// hardbtn.addEventListener("click", function(){
//     forhard();
  
// })

init();
function init(){
    for(var i=0; i < modebtn.length; i++){
        modebtn[i].addEventListener("click", function(){
            modebtn[0].classList.remove("selected");
            modebtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? vr =3: vr=6;
            reseter();
        })    
    }

    reset.addEventListener("click", function(){
    reseter()
})
for(i=0; i<squares.length ; i++){
    //it's a color giver
    squares[i].style.backgroundColor = colors[i];
    
    //add click listener
    squares[i].addEventListener("click", function(){
        //save clicked color in variable and check
        var clickedcolor = this.style.backgroundColor;
        //if clicked color is pickedcolor
        if( clickedcolor === pickedcolor) {
            messagedisplay.textContent = "Correct"; 
            celebrate(pickedcolor);
            h1.style.background = clickedcolor;
            reset.textContent = "Play Again"

        }
        else{
            this.style.backgroundColor = "#232323";
            messagedisplay.textContent = "Try Again";
        }
    })
}
reseter();
}




// function foreasy(){
//     //giving blue background when clicked
//     easybtn.classList.add("selected");
//     hardbtn.classList.remove("selected");
//     //giving new stats for easy mode
//     vr = 3;
//     colors = generaterandomcolors(vr);
//     pickedcolor = pickcolor();
//     //rgb text modify
//     colordisplay.textContent = pickedcolor;
//     //apply new colors
//     for(i=0; i<squares.length ; i++){
//         if (colors[i]){
//   //it's a color giver
//   squares[i].style.backgroundColor = colors[i];}
//   else{
//       squares[i].style.display = "none";
//   }
//         }
// }
// function forhard(){
//     easybtn.classList.remove("selected");
//     hardbtn.classList.add("selected");
//     //giving new stats for easy mode
//     vr = 6;
//     colors = generaterandomcolors(vr);
//     pickedcolor = pickcolor();
//     //rgb text modify
//     colordisplay.textContent = pickedcolor;
//     //apply new colors
//     for(i=0; i<squares.length ; i++){
//         squares[i].style.display = "block";
//   //it's a color giver
//   squares[i].style.backgroundColor = colors[i];}
// }

function reseter (){
    //start procces from zero 
   //generate colors
   colors = generaterandomcolors(vr);
   //pick from array randomly
   pickedcolor = pickcolor();
   //rgb text modify
   colordisplay.textContent = pickedcolor;
   //apply new colors
   for(i=0; i<squares.length ; i++){
       //it's a color giver
       if (colors[i]){
         //it's a color giver
         squares[i].style.display = "block";
          squares[i].style.backgroundColor = colors[i];}
          else{
             squares[i].style.display = "none";
          }
        }

   reset.textContent = "New Colors";
   h1.style.background = "steelblue";
   messagedisplay.textContent = "";
}

function celebrate(color){
    for(i=0; i<squares.length ; i++){
        //it's a color giver
        squares[i].style.backgroundColor = color;
}
}
function pickcolor(){
    //choose randomly from arrays by 
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generaterandomcolors(num) {
    //make empty array
    var arr = [];
    //fill that array with random colors
    for(var i=0; i < num; i++){
        arr.push(randomcolor());
    }
    //return array
    return arr;
}
 
function randomcolor() {
  //random choose "r" for rgb
  var R = Math.floor(Math.random() * 256);
  //random choose "g" for rgb
  var G = Math.floor(Math.random() * 256);
  //random choose "b" for rgb
  var B = Math.floor(Math.random() * 256);
  //getting random rgb '' spaces are important,before brackets
  return "rgb("+R+", "+G+", "+B+")";
}

