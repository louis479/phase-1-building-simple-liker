// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll(".like-glyph"); // Select all heart elements
  hearts.forEach((heart) => {
    heart.addEventListener("click", handleHeartClick);// Attach click event listener
  });
});


function handleHeartClick(event) {
  const heart = event.target;
  mimicServerCall()
    .then(() => {
      if (heart.textContent === "♡") {
        heart.textContent = "♥";
        heart.classList.add("activated-heart");
      } else {
        heart.textContent = "♡";
        heart.classList.remove("activated-heart");
      }
    })
    .catch((error) => {
      const modal = document.getElementById("modal");
      modal.classList.remove("hidden");
      modal.textContent = error;
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 3000);
    });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
