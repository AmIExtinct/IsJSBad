let themeBut = document.getElementById('themeButton')

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
