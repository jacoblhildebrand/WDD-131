//select the button and menu
const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

// Add event listener to toggle the 'hide' class on menu items
menuButton.addEventListener('click', function() {
    navLinks.classList.toggle('hide');
});

function handleResize() {
    if (window.innerWidth > 1000) {
        navLinks.classList.remove('hide'); // Show menu if screen is wide
    } else {
        navLinks.classList.add('hide'); // Hide menu for small screens
    }
}

// Add event listener for window resize
window.addEventListener('resize', handleResize);

// Call handleResize when the page loads to apply the correct menu state
handleResize();

// Select the modal and close button
const viewer = document.querySelector('.viewer');
const viewerImg = document.querySelector('.viewer-img');
const closeViewerButton = document.querySelector('.close-viewer');

// Function to handle image click event
function viewHandler(event) {
    if (event.target.tagName === 'IMG') {
        // Get the clicked image src and alt attributes
        const imgSrc = event.target.src.replace('-sm.jpeg', '-full.jpeg'); // Swap to the full image
        const imgAlt = event.target.alt;

        // Set the modal image and alt text
        viewerImg.src = imgSrc;
        viewerImg.alt = imgAlt;

        // Show the modal
        viewer.classList.remove('hide');
    }
}

// Close the modal when the close button is clicked
function closeViewer() {
    viewer.classList.add('hide');
}

// Add event listeners
document.querySelector('.gallery').addEventListener('click', viewHandler);
closeViewerButton.addEventListener('click', closeViewer);