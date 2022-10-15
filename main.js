// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// DOM selectors
let likeHearts = document.querySelectorAll("like-glyph");
let theHiddenDiv = document.getElementsById("modal");
let theHiddenMessage = document.getElementById("modal-message");

//Add Event listeners for clickable like hearts 
for (let eachHeart of likeHearts) {
  eachHeart.addEventListener("click", likeClickCallback);
};


//Add callback function for clicked like heart icons
function likeClickCallback(e) {
  let heart = e.target;
  alert("You clicked a heart");
  mimicServerCall()
    .then(function(serverMessage){
      alert(serverMessage);
      heart.innerText = FULL_HEART;
    })
    .catch(function(error) {
      alert("Something went wrong!");
      setTimeout(() => {theHiddenDiv.classList.add("hidden");
      theHiddenMessage.innerHTML ="";
      }, 5000);
      theHiddenDiv.classList.remove("hidden");
      theHiddenMessage.innerHTML = error;
      heart.innerText = EMPTY_HEART;
    });
  };

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
};
