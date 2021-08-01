const categoriesEl = document.querySelectorAll('.item');
console.log(categoriesEl)

const counCategoriesEl = `В списке ${categoriesEl.length} категории.`;
console.log(counCategoriesEl)

const titleEl = categories.querySelector('.item h2');

categoriesEl.forEach(category => {
  console.log('Категория:', titleEl.textContent);
  console.log('Количество элементов:', category.querySelectorAll('li').length);
});

