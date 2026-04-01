let body = document.body
let but = document.getElementById('randomButton')

function showRandom(){
   bat = document.createElement('p')
   bat.innerText = "Where did I come from?"
   
  body.appendChild(bat) 
   
}
but.addEventListener("click", showRandom)




