  const btn = document.getElementById('passgen-btn');
  const container = document.getElementById('passgen-container');
  const frame = document.getElementById('passgen-frame');
  let loaded = false;

  btn.addEventListener('click', () => {
    if (!loaded) {
      // Set the src only once to avoid reloading
      frame.src = 'others/passgen/index.html';
      loaded = true;
    }
    // Toggle visibility
    if (container.style.display === 'none') {
      container.style.display = 'block';
      btn.textContent = '🔻 Hide PassGen';
    } else {
      container.style.display = 'none';
      btn.textContent = '⚡ PassGen';
    }
  });
