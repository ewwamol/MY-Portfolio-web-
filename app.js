const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');
const portfolioList = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll(".nav-list li");
const box = document.querySelector(".box");

// Nav click events
navItems.forEach((nav, idx) => {
  nav.addEventListener('click', () => {
    document.querySelector('.nav-list li.active').classList.remove('active');
    nav.classList.add('active');

    box.style.transform = `rotateY(${idx * -90}deg)`;

    document.querySelector('.section.active').classList.remove('active');
    sections[idx].classList.add('active');

    // Action contact toggle
    if (sections[0].classList.contains('active')) {
      sections[4].classList.remove('action-contact');
    } else {
      sections[4].classList.add('action-contact');
    }
  });
});

// Resume list click events
resumeLists.forEach((list, idx) => {
  list.addEventListener('click', () => {
    document.querySelector('.resume-list.active').classList.remove('active');
    list.classList.add('active');

    document.querySelector('.resume-box.active').classList.remove('active');
    resumeBoxs[idx].classList.add('active');
  });
});

// Portfolio tab click events
portfolioList.forEach((list, idx) => {
  list.addEventListener('click', () => {
    document.querySelector('.portfolio-list.active').classList.remove('active');
    list.classList.add('active');

    document.querySelector('.portfolio-box.active').classList.remove('active');
    portfolioBoxs[idx].classList.add('active');
  });
});

// Page load — default to home section
window.addEventListener('load', () => {
  // Remove existing active classes
  navItems.forEach(nav => nav.classList.remove('active'));
  sections.forEach(section => section.classList.remove('active'));

  // Set home active
  navItems[0].classList.add('active');
  sections[0].classList.add('active');

  // Reset cube rotation
  box.style.transform = `rotateY(0deg)`;

  // Remove action-contact on load
  sections[4].classList.remove('action-contact');
});


