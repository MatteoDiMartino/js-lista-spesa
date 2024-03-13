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

let i = 0;

while (i < list.length) {
    let liItem = document.createElement('li');

    let iItem = list [i];

    liItem.innerHTML = iItem;

    console.log (liItem);

    i++

    containerUl.append(liItem);
}