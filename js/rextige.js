// Hamburger menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger_btn = document.querySelector('.hamburger-btn')
  const mobile_menu = document.querySelector('.mobile-menu')

  hamburger_btn.addEventListener('click', () => {
    mobile_menu.classList.toggle('active')
  })
})