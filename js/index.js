// Your code goes here

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


const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mousedown", function(){
    console.log("logo clicked")
   logoHeading.style.color = "#F0E68C";
});



