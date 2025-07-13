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
            sec.classList.add('show-animate');
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
    '--second-bg-color': '#f3f3f3',
    '--text-color': '#1a1a1a',
    '--main-color': '#00abf0',
};

const darkTheme = {
    '--bg-color': '#000000',
    '--second-bg-color': '#181818',
    '--text-color': '#ededed',
    '--main-color': '#00abf0',
};

// theme variable based on browser theme
let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

function applyTheme(theme, iconClass) {
    const themeVars = theme === 'light' ? lightTheme : darkTheme;
    for (const key in themeVars) {
        root.style.setProperty(key, themeVars[key]);
    }
    icon.className = iconClass;
    currentTheme = theme;
}

// set initial theme
applyTheme(currentTheme, currentTheme === 'dark' ? 'bx bx-moon' : 'bx bx-sun');

function toggleTheme() {
    if (currentTheme === 'light') {
        applyTheme('dark', 'bx bx-moon');
    } else {
        applyTheme('light', 'bx bx-sun');
    }
}

toggleBtn.addEventListener('click', toggleTheme);

// skill tab toggle
const toggleButtons = document.querySelectorAll('.toggle-option');
const switchSlider = document.getElementById('switch-slider');
const contentPanels = document.querySelectorAll('.skills-content');

// tab click handling
toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // remove active from all
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        // add active to clicked
        button.classList.add('active');

        // move slider
        switchSlider.style.left = index === 0 ? '3px' : '48.5%';

        // show selected content
        contentPanels.forEach(panel => panel.classList.remove('active'));
        const target = button.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});