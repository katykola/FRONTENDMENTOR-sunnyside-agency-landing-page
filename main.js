// Udělej velikost div. header stejně velkou jako velikost .header-img

const header = document.querySelector('.header');
const headerImg = document.querySelector('.header-img');


window.addEventListener('load', () => {
    if (window.innerWidth < 378) {
        header.style.height = `${headerImg.clientHeight}px`;
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 378) {
        header.style.height = `${headerImg.clientHeight}px`;
    } else {
        header.style.height = 'auto'; // Optional: Reset height for larger screens
    }
});


// Udělej velikost sekce s textem na fotce stejně velkou jako velikost fotky

const sectionImg = document.querySelector('.section-img-content_image');
const sectionContents = document.querySelectorAll('.section-img-content_content');
const sectionContainers = document.querySelectorAll('.section-container');


window.addEventListener('load', () => { // On the load event, the height of the .header is set to match the height of the .header-img.
    sectionContainers.forEach(container => {
        container.style.height = `${sectionImg.clientHeight}px`;
    })
    sectionContents.forEach(section => {
        section.style.height = `${sectionImg.clientHeight}px`;
    })
});

window.addEventListener('resize', () => { // Added an event listener for resize to ensure the height is recalculated if the window size changes, keeping the height synchronized.
    sectionContainers.forEach(container => {
        container.style.height = `${sectionImg.clientHeight}px`;
    })
    sectionContents.forEach(section => {
        section.style.height = `${sectionImg.clientHeight}px`;
    })
});



//Menu 

const hamburger = document.getElementById('hamburger-icon');
const menu = document.getElementById('menu');
const navbar = document.querySelector('.navbar_one-row');
const arrowImg = document.getElementById('arrowImg');
const claim = document.querySelector('.header-claim');

window.addEventListener('load', () => {
    if(window.innerWidth <= 377){
        hamburger.style.display = 'block';
        hamburger.addEventListener('click', function(){
            menu.classList.add('menu-mobile');
            menu.classList.toggle('menu-hidden');
            arrowImg.classList.toggle('header-arrow_hidden');
            claim.classList.toggle('header-claim_hidden');
        })

    }else{
        navbar.appendChild(menu);
        menu.classList.remove('menu-hidden');
        menu.classList.add('menu-desktop');
    }
})


