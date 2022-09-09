const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector("#ingredients")
console.log(listEl);



// const newEl = [];




// for (const indredient of ingredients) {
//   const itemEl = document.createElement('Li')
//   itemEl.classList.add('item')
//   itemEl.textContent = `${indredient}`
//   newEl.push(itemEl)
// }

// console.log(newEl);

// listEl.append(...newEl)

const newElements = ingredients.map(ingredient => {
  const itemEl = document.createElement('Li')
  itemEl.classList.add('item')
  itemEl.textContent = `${ingredient}`
  return itemEl;
})

listEl.append(...newElements)

