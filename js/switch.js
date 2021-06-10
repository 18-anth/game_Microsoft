var img = document.getElementById("image");
var amarillo = document.getElementById("amarillo");
var verde = document.getElementById("verde");
var rojo = document.getElementById("rojo");


amarillo.onclick = function(){
    img.src = "/assets/home.jpg";
    document.getElementById("body").style.background= "linear-gradient(90deg,#c5a609, #fcd926, #ffe149)";
}

verde.onclick = function(){
    img.src = "/assets/img-1.jpg";
    document.getElementById("body").style.background= "linear-gradient(90deg,#298b02, #3acf00, #68ff2d)";
}

rojo.onclick = function(){
    img.src = "/assets/home.jpg";
    document.getElementById("body").style.background= "linear-gradient(90deg,#9c0707, #d00000, #e61515)";
}





