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

function browserSpeak(msg, rate=1.2){
   const bruh = new SpeechSynthesisUtterance(msg)
   bruh.rate = rate
   bruh.volume = 1
   window.speechSynthesis.speak(bruh)
}

function onMouseEnter(){
   browserSpeak("what Are You Trying To do?")

   if (document.getElementById('catchButton') != null){
      let catchBut = document.getElementById('catchButton')
      catchBut.style.display = 'block'
   }
   let catchButton = document.createElement('button')
   catchButton.id = "catchButton"
   catchButton.classList.add('base-Style')
   document.body.appendChild(catchButton)
}

function onMouseLeave(){
   let catchButton = document.getElementById('catchButton')
   catchButton.style.display = 'none'
}

themeBut.addEventListener('click', changeTheme)
themeBut.addEventListener('mouseenter', onMouseEnter)
themeBut.addEventListener('mouseleave', onMouseLeave)
