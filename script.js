/*document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", function () {
    console.log("Toggle button clicked");
    navLinks.classList.toggle("open");
  });
});*/
document.addEventListener("DOMContentLoaded", function () {
  const educationSection = document.querySelector("#education");
  const achievementSection = document.querySelector("#achievement");
  const skillsSection = document.querySelector("#skills");
  const windowHeight = window.innerHeight;

  function revealSection(section) {
    section.classList.add("active");
  }

  function checkScroll() {
    const educationOffsetTop = educationSection.offsetTop;
    const achievementOffsetTop = achievementSection.offsetTop;
    const skillsOffsetTop = skillsSection.offsetTop;

    if (window.scrollY > educationOffsetTop - windowHeight + 100) {
      revealSection(educationSection);
    }

    if (window.scrollY > achievementOffsetTop - windowHeight + 100) {
      revealSection(achievementSection);
    }

    if (window.scrollY > skillsOffsetTop - windowHeight + 100) {
      revealSection(skillsSection);
    }
  }

  window.addEventListener("scroll", checkScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.querySelector("#contact");
  const windowHeight = window.innerHeight;

  function revealSection(section) {
    section.classList.add("active");
  }

  function checkScroll() {
    const contactOffsetTop = contactSection.offsetTop;

    if (window.scrollY > contactOffsetTop - windowHeight + 100) {
      revealSection(contactSection);
    }
  }

  window.addEventListener("scroll", checkScroll);
});

