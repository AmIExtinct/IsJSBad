var body = document.body
var but = document.getElementById('themeButton')


function switchTheme(){
   bat = document.createElement('p')
   bat.innerText = "Where did I come from?"
   
  body.appendChild(bat) 
   
}
but.addEventListener("click", switchTheme)


