
/* <----------initial: get all nav element and pages----------> */
const NavbarElement = document.querySelector('#navbar')
const SidebarElement = document.querySelector('#sidebar')
const BackdropElement = document.querySelector('#backdrop')

const NavbarLink = NavbarElement.querySelectorAll('a')
const SidebarLink = SidebarElement.querySelectorAll('a')
const SidebarToggle = document.querySelector('#sidebar-toggle')

// const Nav = [...document.querySelectorAll('nav li a').values()]
const Page = [
  document.getElementById('home'),
  document.getElementById('about'),
  document.getElementById('skills'),
  document.getElementById('testimonials'),
  document.getElementById('socials')
]
/* <-----------------------------------------------------------> */



/* <---------------define all necessary function---------------> */
function clearClass() {
  NavbarLink.forEach(e => {
    e.classList.remove('selected')
  })

  SidebarLink.forEach(e => {
    e.classList.remove('selected')
  })
}

function showSideBar(bool) {
  if (bool) {
    document.documentElement.style.setProperty('overflow-y', 'hidden')
    BackdropElement.classList.remove('hidden')
    setTimeout(() => {
      SidebarElement.classList.add('show')
      setTimeout(() => {
        SidebarElement.focus()
      }, 100)
    }, 100)
  } else {
    document.documentElement.style.setProperty('overflow-y', 'initial')
    SidebarElement.classList.remove('show')
    setTimeout(() => {
      BackdropElement.classList.add('hidden')
    }, 100)
  }
}
/* <------------------------------------------------------------> */




SidebarLink.forEach(e => e.addEventListener('click', () => showSideBar(false)))
SidebarElement.addEventListener('focusout', () => showSideBar(false))
SidebarToggle.addEventListener('click', () => showSideBar(true))

document.onscroll = () => {

  const i = Page.findIndex(e => e.getBoundingClientRect().y === 0)

  if (i !== -1) {
    console.log('test')
    clearClass()
    NavbarLink[i].classList.add('selected')
    SidebarLink[i].classList.add('selected')
  }
  

}




document.querySelectorAll('.contact-btn').forEach(e => {
  e.onclick = () => {
    Page[-1].scrollIntoView()
  }
})
document.querySelectorAll('.view-portfolio-btn').forEach(e => {
  e.onclick = () => Page[-2].scrollIntoView()
})