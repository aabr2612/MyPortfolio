// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate')
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');
const root = document.documentElement;

const lightTheme = {
    '--bg-color': '#ffffff',
    '--second-bg-color': '#f5f5f5',
    '--text-color': '#1a1a1a',
    '--main-color': '#00abf0',
};

const darkTheme = {
    '--bg-color': '#000000',
    '--second-bg-color': '#181818',
    '--text-color': '#ededed',
    '--main-color': '#00abf0',
};

function applyTheme(theme, iconClass) {
    const themeVars = theme === 'light' ? lightTheme : darkTheme;
    for (const key in themeVars) {
        root.style.setProperty(key, themeVars[key]);
    }
    icon.className = iconClass;
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const current = localStorage.getItem('theme') || 'dark';
    if (current === 'light') {
        applyTheme('dark', 'bx bx-moon');
    } else {
        applyTheme('light', 'bx bx-sun');
    }
}

toggleBtn.addEventListener('click', toggleTheme);

window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme') || 'dark';
    const iconClass = saved === 'light' ? 'bx bx-sun' : 'bx bx-moon';
    applyTheme(saved, iconClass);
});
