//Меню
isClicked = 1;
var mover = document.getElementById("mover");
var back = document.getElementById("background");
var indicat = document.getElementById("indicatorMenu");

var nav = document.getElementById("Navigation");

function goToPage(link) {
  window.location = link.getAttribute("href");
}

nav.addEventListener("click", function menuMover() {
  if (isClicked) {
    mover.style.transform = "translateY(0px)";
    back.style.opacity = "0.2";
    back.style.transform = "translateY(-200px)";
    body.style.overflow = "hidden";
    indicat.style.transform = "scale(0.8)";
    isClicked = 0;
  } else {
    mover.style.transform = "translateY(250px)";
    back.style.opacity = "1";
    back.style.transform = "translateY(0px)";
    body.style.overflow = "auto";
    indicat.style.transform = "scale(1)";
    isClicked = 1;
  }
});

var button1 = document.getElementById("servicis");

button1.addEventListener("click", function (event) {
  event.preventDefault();
  mover.style.transform = "translateY(250px)";
  back.style.opacity = "1";
  back.style.transform = "translateY(0px)";
  body.style.overflow = "auto";
  indicat.style.transform = "scale(1)";
  document
    .getElementById("services")
    .scrollIntoView({ block: "start", inline: "center", behavior: "smooth" });
  isClicked = 1;
  setTimeout(openPs, 1000);
});

var button2 = document.getElementById("partners");

button2.addEventListener("click", function (event) {
  event.preventDefault();
  document
    .getElementById("Cooperation")
    .scrollIntoView({ block: "start", inline: "center", behavior: "smooth" });
  mover.style.transform = "translateY(250px)";
  back.style.opacity = "1";
  back.style.transform = "translateY(0px)";
  body.style.overflow = "auto";
  indicat.style.transform = "scale(1)";
  isClicked = 1;
  setTimeout(
    (function (button2) {
      return function () {
        goToPage(button2);
      };
    })(button2),
    1000
  );
});

var button3 = document.getElementById("our_works");

button3.addEventListener("click", function (event) {
  event.preventDefault();
  document
    .getElementById("ourWorks")
    .scrollIntoView({ block: "start", inline: "center", behavior: "smooth" });
  mover.style.transform = "translateY(250px)";
  back.style.opacity = "1";
  back.style.transform = "translateY(0px)";
  body.style.overflow = "auto";
  indicat.style.transform = "scale(1)";
  isClicked = 1;
  setTimeout(
    (function (button3) {
      return function () {
        goToPage(button3);
      };
    })(button3),
    1000
  );
});

var button4 = document.getElementById("About_Us");

button4.addEventListener("click", function (event) {
  event.preventDefault();
  document
    .getElementById("AboutUs")
    .scrollIntoView({ block: "start", inline: "center", behavior: "smooth" });
  mover.style.transform = "translateY(250px)";
  back.style.opacity = "1";
  back.style.transform = "translateY(0px)";
  body.style.overflow = "auto";
  indicat.style.transform = "scale(1)";
  isClicked = 1;
  setTimeout(openAbout, 1000);
});

var button5 = document.getElementById("goToBlog");

button5.addEventListener("click", function (event) {
  event.preventDefault();
  document
    .getElementById("blog")
    .scrollIntoView({ block: "start", inline: "center", behavior: "smooth" });
  mover.style.transform = "translateY(250px)";
  back.style.opacity = "1";
  back.style.transform = "translateY(0px)";
  body.style.overflow = "auto";
  indicat.style.transform = "scale(1)";
  isClicked = 1;
  setTimeout(
    (function (button5) {
      return function () {
        goToPage(button5);
      };
    })(button5),
    1000
  );
});

//Попап
var body = document.getElementById("body");
var openPA = document.getElementById("servicisPop");

function closePs() {
  openPA.style.opacity = "0";
  openPA.style.pointerEvents = "none";
  openPA.style.display = "none";
  body.style.overflow = "auto";
}

function openPs() {
  openPA.style.display = "flex";
  openPA.style.opacity = "1";
  openPA.style.pointerEvents = "all";
  body.style.overflow = "hidden";
}

var aboutPop = document.getElementById("aboutPop");

function closeAbout() {
  aboutPop.style.opacity = "0";
  aboutPop.style.pointerEvents = "none";
  aboutPop.style.display = "none";
  body.style.overflow = "auto";
}

function openAbout() {
  aboutPop.style.display = "flex";
  aboutPop.style.opacity = "1";
  aboutPop.style.pointerEvents = "all";
  body.style.overflow = "hidden";
}
