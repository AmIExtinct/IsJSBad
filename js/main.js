let body = document.body
let but = document.getElementById('randomButton')
let themeBut = document.getElementById('switchTheme')

function showRandom(){
   bat = document.createElement('p')
   bat.innerText = "Where did I come from?"
   
  body.appendChild(bat) 
   
}
but.addEventListener("click", showRandom)

let isDark = true
function changeTheme(){
   if (isDark) {
      body.style.backgroundColor = "white"
      body.style.color = "black"
      isDark = false
      return
   }
   
   body.style.backgroundColor = "black"
   body.style.color = 'aquamarine'
   isDark = true
}


themeBut.addEventListener('click', changeTheme)


