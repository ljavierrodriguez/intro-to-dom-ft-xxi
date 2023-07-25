/* 

Simple
getElementById(id) = retorna el elemento segun el id dado ej: document.getElementById('titulo');

Array
getElementsByClassName(class) = retorna un conjunto de elementos segun las clase dada ej: document.getElementsByClassName('card'); 
getElementsByTagName(tag) = retorna un conjunto de elementos segun el tag o etiqueta dado document.getElementsByTagName('div');
getElementsByName(name) = retorna un conjunto de elementos segun el nombre dado  ej: document.getElementsByName('genero');

querySelector('selector_css');
querySelectorAll('selector_css');

createElement(tag) 
createTextNode(text)

*/


let box1 = document.getElementById('box1');
console.log(box1);

let box2 = document.getElementById('box2');
console.log(box2);


let items = document.getElementsByClassName('item')
console.log(items)

let divs = document.getElementsByTagName('div')
console.log(divs)


//box1.style.backgroundColor = '#cdcd34';
//box1.classList.add('card')
//box1.style.border = '5px solid red';

for(let i = 0; i < items.length; i++){
    items[i].style.border = '1px solid green';
}

let item2 = document.querySelector('.item');
console.log(item2)

let items2 = document.querySelectorAll('.item');
console.log(items2)

items2.forEach(function(item){
    console.log(item);
})

let itemsMapped = []

items2.forEach(function(item){
    item.style.borderRadius = '10px'
    item.style.border = '1px solid red'
    itemsMapped.push(item)
})

console.log(itemsMapped)

let box1ID = document.querySelector('#box1');


let allDivs = document.querySelectorAll('div')


let menu = document.querySelector('.navbar-nav > .dropdown > .dropdown-menu');

menu.style.backgroundColor = 'red';


let div = document.createElement('div');
div.id = "home";
div.style.border = '1px solid gray';
div.classList.add('container')

div.innerHTML = "<h1>Hola Mundo desde Javascript y DOM</h1>"

console.log(div);

document.querySelector('.register-form1').after(div);

