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
      themeBut.style.backgroundColor = "white"
      themeBut.style.color = "black"
      return
   }
   
   themeBut.style.backgroundColor = "black"
   themeBut.style.color = 'aquamarine'
}


themeBut.addEventListener('click', changeTheme)


