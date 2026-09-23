// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const navMenu = document.getElementById("navMenu")

const closeMobileMenu = () => {
  navMenu?.classList.remove("active")
  menuToggle?.classList.remove("active")
  menuToggle?.setAttribute("aria-expanded", "false")
}

menuToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("active")
  menuToggle.classList.toggle("active", isOpen)
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)))
})

// Close menu when nav link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu()

    document.querySelectorAll(".nav-link").forEach((navLink) => navLink.classList.remove("active"))
    link.classList.add("active")
  })
})

document.addEventListener("click", (event) => {
  const clickedInsideNav = event.target.closest(".navbar")
  if (!clickedInsideNav && navMenu?.classList.contains("active")) {
    closeMobileMenu()
  }
})

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTop")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop

  if (scrollToTopBtn) {
    if (currentScroll > 300) {
      scrollToTopBtn.classList.add("active")
    } else {
      scrollToTopBtn.classList.remove("active")
    }
  }
})

scrollToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
})

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href")
    if (!targetId || targetId === "#") {
      return
    }

    const target = document.querySelector(targetId)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  })
})

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".service-card, .case-card, .testimonial-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Expertise Timeline Interaction
document.querySelectorAll(".expertise-item").forEach((item, index) => {
  const activateExperience = function () {
    document.querySelectorAll(".expertise-item").forEach((el) => el.classList.remove("active"))
    document.querySelectorAll(".expertise-item").forEach((el) => el.setAttribute("aria-selected", "false"))
    document.querySelectorAll(".timeline-item").forEach((el) => el.classList.remove("active"))

    this.classList.add("active")
    this.setAttribute("aria-selected", "true")
    const timelineItems = document.querySelectorAll(".timeline-item")
    if (timelineItems[index]) {
      timelineItems[index].classList.add("active")
    }
  }

  item.addEventListener("click", activateExperience)
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      activateExperience.call(item)
    }
  })
})

// Contact Form Submission
const contactForm = document.getElementById("contactForm")
contactForm?.addEventListener("submit", (e) => {
  e.preventDefault()

  const nameField = document.getElementById("name")
  const emailField = document.getElementById("email")
  const messageField = document.getElementById("message")

  const name = nameField?.value.trim() || ""
  const email = emailField?.value.trim() || ""
  const message = messageField?.value.trim() || ""

  if (name && email && message) {
    console.log("[v0] Form submitted:", { name, email, message })
    alert("Thank you for your message! We will get back to you soon.")
    contactForm.reset()
  } else {
    alert("Please fill in all required fields.")
  }
})

// Active Navigation Link on Scroll
window.addEventListener("scroll", () => {
  let current = ""
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkHref = link.getAttribute("href")
    link.classList.remove("active")
    if (linkHref && linkHref === `#${current}`) {
      link.classList.add("active")
    }
  })
})
