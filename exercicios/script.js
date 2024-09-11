const livros = document.getElementById('livros');
console.log(livros);

const gridSection = document.getElementsByClassName('grid-section livros');
console.log(gridSection);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const ul = document.querySelector('ul');
console.log(ul);

const links = document.querySelector('[href^="#"]');
console.log(links.href);

const img = document.querySelectorAll('.livros img');
console.log(img);


const arrayGrid = Array.from(gridSection)
console.log(arrayGrid);