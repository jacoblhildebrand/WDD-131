import { recipes } from './recipes.mjs'; 

console.log(recipes);

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function tagsTemplate(tags) {
  let html = '<ul class="recipe__tags">';
  tags.forEach(tag => {
    html += `<li>${tag}</li>`;
  });
  html += '</ul>';
  return html;
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += `<span aria-hidden="true" class="icon-star">${i <= rating ? '⭐' : '☆'}</span>`;
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <div class="recipe-card">
      <img src="${recipe.image}" alt="image of ${recipe.name}" />
      <div class="recipe-content">
        ${tagsTemplate(recipe.tags)}
        <h3><a href="#">${recipe.name}</a></h3>
        ${ratingTemplate(recipe.rating)}
        <p class="description">${recipe.description}</p>
      </div>
    </div>
  `;
}

function renderRecipes(recipeList) {
  const container = document.getElementById('recipe-container');
  let recipesHTML = '';
  recipeList.forEach(recipe => {
    recipesHTML += recipeTemplate(recipe);
  });
  container.innerHTML = recipesHTML;
}

function init() {
  const recipe = getRandomListEntry(recipes);
  console.log("Initializing...");
  renderRecipes([recipe]);
}

function filterRecipes(query) {
  return recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(query) ||
           recipe.description.toLowerCase().includes(query) ||
           recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query)) ||
           recipe.tags.some(tag => tag.toLowerCase().includes(query));
  }).sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault()
  const query = document.getElementById('search-input').value.toLowerCase();
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-button').addEventListener('click', searchHandler);
    init();
  });
// Initialize with a random recipe
init();
