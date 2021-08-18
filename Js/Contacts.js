


var input = document.getElementsByClassName("form");
var line = document.getElementsByClassName("line");






function showInput(n) {
  for (var i = 0; i < input.length; i++) {
   input[i]==input[n];
}
 if(input[n].value!='') {
  line[n].style.width = "100%";
    line[n].style.opacity = "1";
} else if(input[n].value==''){
  line[n].style.width = "0%";
  line[n].style.opacity = "0";
}
}
