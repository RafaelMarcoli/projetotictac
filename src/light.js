function toggleMode() {
    const html = document.documentElement
  
    html.classList.toggle('light')
  }
  export function iniciarDarkMode() {
    document.getElementById("darkmode")
    .addEventListener('click', toggleMode)
  }
  