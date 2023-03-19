const categories = document.querySelector('#categories');
const category = document.querySelectorAll('.item');

console.log(`Number of categories: ${category.length}`);

for (let item of category){
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
}