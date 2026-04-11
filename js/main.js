let body = document.body
let but = document.getElementById('randomButton')

function cleanUpDammit(){
   setTimeout(() => {
      window.removeEventListener('DOMContentLoaded', lameIntro)
   }, 200);
}

function showRandom(){
   bat = document.createElement('p')
   bat.innerText = "Where did I come from?"
   
  body.appendChild(bat) 
   
}
but.addEventListener("click", showRandom)


function lameIntro(){
   const bruh = new SpeechSynthesisUtterance("Hola Goobers");
   bruh.rate = 1.2;
   window.speechSynthesis.speak(bruh);
   
   setTimeout(() => {
     cleanUpDammit() 
   }, 0);
}

window.addEventListener('DOMContentLoaded', lameIntro);

