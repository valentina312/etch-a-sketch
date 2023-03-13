// Buttons selectors and variables
const sizeButton = document.querySelector('.change-size');
const clearButton = document.querySelector('.clear-draw')
var rainbowButton = document.querySelector('.rainbow-button');
var darkButton = document.querySelector('.dark-button');

var startingMode = 'black';

// Functions
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
    draw();
}

function createGrid(answer) {
    var gridContainer = document.getElementById('grid-container')
    let defaultSize = 16;
    if (answer) {
        defaultSize = answer
    }
    var boxWidth = 480 / defaultSize;
    for (let i = 0; i < defaultSize**2; i++) {
        var newDiv = document.createElement('div');
        newDiv.classList.add('box')
        newDiv.style.minWidth = `${boxWidth}px`;
        newDiv.style.minHeight = `${boxWidth}px`;
        gridContainer.appendChild(newDiv);            
    }
}


function deleteGrid() {
    let boxes = document.querySelectorAll('div.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].remove();
    }
}


function chooseRandomRgb() {
    var value = Math.floor(Math.random() * (256))
    return value;
}


function draw() {
    let boxGrid = document.querySelectorAll('.box');
    
    for (let i = 0; i < boxGrid.length; i++) {
        boxGrid[i].addEventListener('mouseover', colorChoice)
    }
}

function colorChoice(e) {
    switch (startingMode) {
      case "rainbow":
        e.target.style.backgroundColor = `rgb(${chooseRandomRgb()}, ${chooseRandomRgb()}, ${chooseRandomRgb()})`;
        break;
      case "black":
        e.target.style.backgroundColor = 'darkgray';
        break;
    }
}

function clearDraw() {
    let boxGrid = document.querySelectorAll('.box');
    for (let i = 0; i < boxGrid.length; i++) {
            boxGrid[i].style.backgroundColor = '';
        }
}




// Event Listeners
sizeButton.addEventListener('click', askSize);
clearButton.addEventListener('click', clearDraw);

rainbowButton.addEventListener('click', function() {
    startingMode = 'rainbow';
}
)

darkButton.addEventListener('click', function() {
    startingMode = 'black';
}
)

// Starting
createGrid(16);
draw();