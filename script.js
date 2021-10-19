let grid = document.querySelector('#grid');

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