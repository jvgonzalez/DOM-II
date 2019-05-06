
// user gets thank you message for signing up
const signMeUpBtn = document.querySelector (".btn");
signMeUpBtn.addEventListener("click", function(){
    console.log("the user has signed up for fun in the sun");
    signMeUpBtn.textContent = "thanks for signing up"
});
  

// user gets alert to remember to sign up
const myFooter = document.querySelector (".footer");
myFooter.addEventListener("mouseover", function(){
   alert("Remember to sign up to get your 10% off code");
   console.log("user has been alerted");
});

// background turns black when an image is dragged
const drag = document.querySelector (".img-content");
drag.addEventListener("drag", function(){
   console.log("dragged image");
  document.body.style.background = "black";
});

// logo turns yellow when double clicked 
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mousedown", function(){
    console.log("logo clicked")
   logoHeading.style.color = "#F0E68C";
});

//user  double clicks an image to dissapear

const imgVanish = document.querySelector(".img-fluid");
imgVanish.addEventListener("click", function(){
   imgVanish.parentNode.removeChild(imgVanish);
});


// key down alert

const keyDwn = document.querySelector(".main-navigation");

keyDwn.addEventListener("keydown", function(event){
  alert("scroll down");
  console.log(`user is pressing ${event.code}`)
});

// user has been on the page for 2 minutes alert

// var audio = new Audio('fire.wav');
// window.onload = setTimeout(function(){
//    new Audio('fire.wav').play()
//    alert('You are the winner')
// }, 5000);



//  console log when user has scrolled down


let last_known_scroll_position = 0;
let ticking = false;


window.addEventListener('scroll', function(e) {
   last_known_scroll_position = window.scrollY;
 
   if (!ticking) {
     window.requestAnimationFrame(function() {
       console.log('hi')
       ticking = false;
     });
     
     ticking = true;
   }
 });
 

// notifies user goes offline

window.addEventListener('offline', function(){
   alert('offline')
 });



 // user almost signed up
signMeUpBtn.addEventListener('mouseover', function(){
 console.log('Hovered over sign me up')
});

