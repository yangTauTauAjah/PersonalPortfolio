/* execute handler on partially rendering */
function executeOnVisible(element, onRenderIn, onRenderOut) {

  new IntersectionObserver(entry => {
    if (entry[0].isIntersecting) {
      onRenderIn()
    } else {
      onRenderOut()
    }
  }).observe(element)

}

/* execute handler on fully rendering */
function executeOnFirstRender(element, onRenderIn, onRenderOut) {

  document.addEventListener('scroll', () => {

    const box = element.getBoundingClientRect()

    if (
        box.top >= 0 &&
        box.bottom <= innerHeight 
        /* && box.left >= 0 &&
        box.right <= innerWidth */
    ) {
      onRenderIn();
    } else {
      onRenderOut()
    }

  })

}





const mainHeading = document.querySelector('#main-heading')
const nameElement = document.querySelector('#fullname')
const descriptionElement = document.querySelector('#description')

executeOnVisible(mainHeading,
  () => {
    nameElement.classList.remove('opacity-0')
    nameElement.classList.remove('-translate-x-1/4')

    descriptionElement.classList.remove('opacity-0')
    descriptionElement.classList.remove('translate-x-1/4')
  },
  () => {
    nameElement.classList.add('opacity-0')
    nameElement.classList.add('-translate-x-1/4')

    descriptionElement.classList.add('opacity-0')
    descriptionElement.classList.add('translate-x-1/4')
  }
)






const skillsList = document.querySelector("#skills ul")
const skillsItem = document.querySelectorAll("#skills li")

executeOnVisible(skillsList,
  () => {
    skillsItem.forEach(e => {
      e.classList.remove('opacity-0')
      e.classList.remove('-translate-x-1/2')
    })
  },
  () => {
    skillsItem.forEach(e => {
      e.classList.add('opacity-0')
      e.classList.add('-translate-x-1/2')
    })
  }
)






const testimonialsList = document.querySelector("#testimonials ul")
const testimonialsItem = document.querySelectorAll("#testimonials li")

executeOnVisible(testimonialsList,
  () => {
    testimonialsItem.forEach(e => {
      e.classList.remove('opacity-0')
      e.classList.remove('-translate-x-1/2')
    })
  },
  () => {
    testimonialsItem.forEach(e => {
      e.classList.add('opacity-0')
      e.classList.add('-translate-x-1/2')
    })
  }
)






const expertsList = document.querySelector("#experts ul")
const expertsItem = document.querySelectorAll("#experts li")

executeOnVisible(expertsList,
  () => {
    expertsItem.forEach(e => {
      e.classList.remove('opacity-0')
      e.classList.remove('translate-y-1/2')
    })
  },
  () => {
    expertsItem.forEach(e => {
      e.classList.add('opacity-0')
      e.classList.add('translate-y-1/2')
    })
  }
)






const socialsList = document.querySelector("#socials ul")
const socialsItem = document.querySelectorAll("#socials .item")

executeOnVisible(socialsList,
  () => {
    socialsItem.forEach(e => {
      e.classList.remove('opacity-0')
      e.classList.remove('translate-x-1/2')
    })
  },
  () => {
    socialsItem.forEach(e => {
      e.classList.add('opacity-0')
      e.classList.add('translate-x-1/2')
    })
  }
)