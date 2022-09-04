const amountOfCategories = document.querySelectorAll('li.item').length;
console.log(`Number of categories: ${amountOfCategories}`);
const elementsOfCategories = document.querySelectorAll('li.item')
console.log(elementsOfCategories);
for (const element of elementsOfCategories) {
    console.log(`Category: ${element.firstElementChild.innerHTML}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
}
