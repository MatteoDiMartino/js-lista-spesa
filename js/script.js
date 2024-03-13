const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

let containerLi = document.querySelector('#listContainer');
console.log (containerLi);

for (let i = 0; i < list.length; i++) {
    let elementList = list[i];

    let liItem = document.createElement('li');

    liItem.innerHTML = elementList;
    console.log (liItem);

    containerLi.append(liItem);
}