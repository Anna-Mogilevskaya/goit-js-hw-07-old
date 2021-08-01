const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const ingrListEl = document.querySelector('#ingredients');


  const ingrArrayEl = ingredients.map((ingr) => {
    const ingrItemEl = document.createElement('li');
    ingrItemEl.textContent = ingr;
    return ingrItemEl;
  });


ingrListEl.append(...ingrArrayEl);

