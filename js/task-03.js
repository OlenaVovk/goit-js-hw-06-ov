//Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

//Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

//Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.



const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulGalleryEl = document.querySelector('.gallery');

const imageEl = images.map(image => `<li class="item"><img src="${image.url}" alt="${image.alt}" width= "350" height = "210"/></li>`).join('');
ulGalleryEl.insertAdjacentHTML('beforeend', imageEl);

//images.forEach((image, i) => {
 // ulGalleryEl.insertAdjacentHTML('beforeend',`<li class="item"><img src="${images[i].url}" alt="${images[i].alt}" width= "400"/></li>`);
//}); - але додає не за 1 раз???

//const arrImg = [];
//images.forEach((image, i) => {
//  image = `<li class="item"><img src="${images[i].url}" alt="${images[i].alt}" width= "350" height = "210"/></li>`;
//  arrImg.push(image);
//  return arrImg;
//});
//const imageEl = arrImg.join('');
//ulGalleryEl.insertAdjacentHTML('beforeend', imageEl);