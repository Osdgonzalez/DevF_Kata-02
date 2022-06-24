

/* Metodos tradicionales
let item1 = document.getElementById("item1");
let listItems = document.getElementsByClassName("item");
let listItemsByTag = document.getElementsByTagName("li");

console.log(listItemsByTag);

for(let i = 0; i < listItems.length; i++){
    //console.log(listItems[i]);
}*/

/*Metodos mas recientes
let itemQuerySelector = document.querySelector('.item');
let itemQuerySelectorAll = document.querySelectorAll('.item');

console.log(itemQuerySelectorAll);

itemQuerySelectorAll.forEach(item => {
    console.log(item);
});*/

let spanTag = document.createElement('span');

spanTag.id = "miSpan";
spanTag.style = 'color: red; background-color:blue;';

console.log(spanTag);