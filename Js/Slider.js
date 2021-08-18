

var rotetet = 42;
var next = document.getElementById("sliderNext");
var back = document.getElementById("sliderBack");
var nav = document.getElementsByClassName("NavSlider")

 function SliderBack(){
  next.style.display = "flex";
  nav[0].style.height = "60%";
  nav[1].style.height = "60%";
  nav[2].style.height = "60%";
  nav[3].style.height = "60%";
  nav[4].style.height = "60%";
  var slider3D = document.getElementById("MainSlider");
  rotetet = rotetet +21;
  slider3D.style.transform = "translateX("+ rotetet + "%)"; // `rotateY(${rotetet}deg)`
  if (rotetet==42) {
   back.style.display = "none";
   nav[0].style.height = "100%";
 } else if (rotetet==21) {
   nav[1].style.height = "100%";
 }else if (rotetet==0) {
   nav[2].style.height = "100%";
 }
 else if (rotetet==-21) {
   nav[3].style.height = "100%";
 }
 else if (rotetet==-42) {
   nav[4].style.height = "100%";
 }
}

 function SliderNext(){
  back.style.display = "flex";
  nav[0].style.height = "60%";
  nav[1].style.height = "60%";
  nav[2].style.height = "60%";
  nav[3].style.height = "60%";
  nav[4].style.height = "60%";
  var slider3D = document.getElementById("MainSlider");
  rotetet = rotetet -21;
  slider3D.style.transform = "translateX("+ rotetet + "%)";
  if (rotetet==-42) {
   next.style.display = "none";
   nav[4].style.height = "100%";
 } else if (rotetet==21) {
   nav[1].style.height = "100%";
 }else if (rotetet==0) {
   nav[2].style.height = "100%";
 }
 else if (rotetet==-21) {
   nav[3].style.height = "100%";
 }
 else if (rotetet==-42) {
   nav[4].style.height = "100%";
 }
 }



var next = document.getElementById("sliderNext");











//
