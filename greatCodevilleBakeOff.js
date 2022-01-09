const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  function ingredientCheck(bakery) {
    let possibleRecipes = [];
    for (let ingredient of bakery) {
      for (let i = 0; i < recipes.length; i++) {
        for (let x = 0; x < recipes[i].ingredients.length; x++) {
          if (ingredient === recipes[i].ingredients[x]) {
            possibleRecipes.push(recipes[i].name);
          }
        }
      }
    }
    return possibleRecipes;
  }
  let possibleA = ingredientCheck(bakeryA);
  let possibleB = ingredientCheck(bakeryB);

  for(let recipeA of possibleA){
    for (let recipeB of possibleB){
      if (recipeA === recipeB){
        return recipeA;
      }
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [{
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [{
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));