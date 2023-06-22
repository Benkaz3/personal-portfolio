const navToggle = document.getElementById('nav-toggle')
const myLinks = document.getElementById('myLinks')

navToggle.addEventListener('click', () => {
  if(myLinks.style.display === 'block') {
    myLinks.style.display = 'none'
  } else {
    myLinks.style.display = 'block'
  }
})