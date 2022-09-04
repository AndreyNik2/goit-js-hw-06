const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients")
console.log(list);



for (const indredient of ingredients) {
  const itemEl = document.createElement('Li')
  itemEl.classList.add('item')
  itemEl.textContent = `${indredient}`
  list.append(itemEl)
}
