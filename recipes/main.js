import recipes from './recipes.mjs';

// Get the container where the recipe cards will be inserted
const recipeList = document.getElementById("recipe-list");

// Function to generate and display recipe cards
function displayRecipes() {
    // Clear any existing content in the container
    recipeList.innerHTML = '';

    // Loop through each recipe and create a card
    recipes.forEach(recipe => {
        // Create a div element to hold the recipe card
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        // Insert recipe data into the card
        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <img src="${recipe.image}" alt="${recipe.name}">
            <p class="description">${recipe.description}</p>
            <p>Rating: ${getRatingStars(recipe.rating)}</p>
        `;

        // Append the recipe card to the container
        recipeList.appendChild(recipeCard);
    });
}

// Function to generate stars based on recipe rating
function getRatingStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '⭐'; // Full star
        } else {
            stars += '☆'; // Empty star
        }
    }
    return stars;
}

// Call the function to display recipes when the page loads
window.addEventListener('DOMContentLoaded', displayRecipes);
