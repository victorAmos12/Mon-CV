const sections = document.querySelectorAll('.section');
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Animation on scroll
const showSection = (sections) => {
    sections.classList.add('visible');
};

const hideSection = (sections) => {
    sections.classList.remove('visible');
};

function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

const onScroll = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            showSection(section);
        } else {
            hideSection(section);
        }
    });
};

function handleScroll() {
    const sect = document.querySelectorAll('.section');
    sect.forEach(section => {
        if(isVisible(section)){
            section.classList.add('visible');
        }else{
            section.classList.remove('visible');
        }
    });
}


window.addEventListener('scroll',handleScroll);
window.addEventListener('scroll', onScroll);
onScroll();
handleScroll();
