let body = document.body
let but = document.getElementById('randomButton')
let themeBut = document.getElementById('themeButton')

function showRandom(){
   bat = document.createElement('p')
   bat.innerText = "Where did I come from?"
   
  body.appendChild(bat) 
   
}
but.addEventListener("click", showRandom)


let isDark = true
function changeTheme(){
   if (isDark) {
      body.style.backgroundColor = "rgb(201, 201, 188)"
      body.style.color = "black"
      themeBut.textContent = "Dark?"
      isDark = false
      return
   }
   
   body.style.backgroundColor = "black"
   body.style.color = 'aquamarine'
   themeBut.textContent = "Light?"
   isDark = true
}

themeBut.addEventListener('click', changeTheme)


