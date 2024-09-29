// Select the theme selector dropdown
const themeSelector = document.querySelector('#theme-selector');

// Function to change theme
function changeTheme() {
    const body = document.body;
    const logo = document.querySelector('footer img'); 

    if (themeSelector.value === 'dark') {
        // Apply dark theme
        body.classList.add('dark');
        logo.src = 'images/byui-logo_white.png'; // Change to white logo for dark theme
    } else {
        // Apply light theme
        body.classList.remove('dark');
        logo.src = 'images/byui-logo_blue.webp'; // Change to blue logo for light theme
    }
}

// Listen for changes on the theme selector
themeSelector.addEventListener('change', changeTheme);