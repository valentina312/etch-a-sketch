const button = document.querySelector('button');

function askSize() {
    // Validating user input: answer must be a number less than 100
    let keepAsking = true;
    while (keepAsking) {
        var answer = prompt('Write a number to change the grid size:', '16');
        if (isNaN(answer) || answer == '') {
            alert('Please only write numbers.');
        } else if (answer > 100) {
            alert('Max size is 100.');
        } else {
            keepAsking = false;
        }
    }
    deleteGrid();
    createGrid(parseInt(answer));
}

function createGrid(answer) {
    var gridContainer = document.getElementById('grid-container')
    let defaultSize = 16;
    if (answer) {
        defaultSize = answer
    }
    let boxWidth = 960 / defaultSize;
    for (let i = 0; i < defaultSize**2; i++) {
        var newDiv = document.createElement('div');
        newDiv.classList.add('box')
        newDiv.style.minWidth = boxWidth;
        newDiv.style.minHeight = boxWidth;
        gridContainer.appendChild(newDiv);            
    }
}

function deleteGrid() {
    let boxes = document.querySelectorAll('div.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].remove();
    }
}
createGrid(16);
button.addEventListener('click', askSize);




