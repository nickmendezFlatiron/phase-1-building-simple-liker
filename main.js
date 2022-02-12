// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeGlyph = [...document.querySelectorAll('span.like-glyph')]

likeGlyph.forEach(heart =>{
  heart.addEventListener('click' , () => {
    console.log(heart.innerText)

    // Makes empty heart red and full when status is successful
    if(heart.innerText === EMPTY_HEART) {
      mimicServerCall()
      .then(() => {
        heart.innerText = FULL_HEART;
        heart.classList = 'activated-heart'
      })

      //makes eror message appear at failed status , disappears after 3 seconds
      .catch(() => { 
        let modal = document.querySelector('#modal')
        modal.classList.remove('hidden')
        setTimeout(timeOut, 3000)
    })
    } else {                                      // Changes full heart to empty
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
    
  })
})

function timeOut(){
  modal.classList = 'hidden'
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
