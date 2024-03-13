const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

console.log (list);

let containerUl = document.querySelector('#listContainer');
console.log (containerUl);

let i = 0;

while (i < list.length) {
    let liItem = document.createElement('li');

    let iItem = list [i];
    console.log (iItem);

    i++
}