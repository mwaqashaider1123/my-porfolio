const navMenu = document.getElementById('nav_menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav_close');
const appIcon = document.getElementById('app_icon');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        appIcon.style.display = 'none'; // Hide app icon when navbar is shown
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        appIcon.style.display = 'block'; // Show app icon when navbar is hidden
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills-content');
const skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills() {
    const currentClass = this.parentNode.className;
    
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close';
    }
    
    if (currentClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open';
    } else {
        this.parentNode.className = 'skills-content skills-close';
    }
}      

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        // Toggle 'qulification-active' class on the target content
        if (target.classList.contains('qulification-active')) {
            target.classList.remove('qulification-active')
        } else {
            // Hide all tab contents
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('qulification-active')
            })

            // Show the target content
            target.classList.add('qulification-active')
        }

        // Toggle 'qulification-active' class on the clicked tab
        tabs.forEach(tab => {
            tab.classList.remove('qulification-active')
        })
        tab.classList.add('qulification-active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services-modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click',() => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click',() => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio-container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial-container", {
    loop: true,
    grabCursor:true,
    spaceBetween:48,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2, 
        }
    }
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]');
// const navLinks = document.querySelectorAll('.nav__menu a');

// function scrollActive() {
//     const scrollY = window.pageYOffset;

//     sections.forEach(current => {
//         const sectionId = current.getAttribute('id');
//         const navLink = document.querySelector('.nav__menu a[href="#' + sectionId + '"]');

//         if (isInViewport(current)) {
//             navLink.classList.add('active-links');
//         } else {
//             navLink.classList.remove('active-links');
//         }
//     });
// }

// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// window.addEventListener('scroll', scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
