let grid = document.querySelector('#grid');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button1.onclick = askUser;
button2.onclick = askUser;

function askUser() {
    let size = prompt("Choose pencil size, between 1 and 100");
    if (1 > size || size > 100 && typeof(size) !== "number") {
        askUser();
    }
    else {
        size = 101 - size;
        updateGrid (grid, size);
    }
}

function updateGrid (grid, size) {

    let gridChilds = '';
    let rows = '';

    for (let i = 0; i < size; i++) {
        gridChilds += `<div class="gridChild"></div>`;
    }

    for (let j = 0; j < size; j++) {
        rows += `<div class="row">${gridChilds}</div>`;
    }

    grid.innerHTML = rows;

    let points = document.querySelectorAll('.gridChild');
    for (let i = 0; i < points.length; i++) {
        points[i].addEventListener('mouseover', () => {
            points[i].style.background = 'black';
        })
    }
}

updateGrid(grid, 64);