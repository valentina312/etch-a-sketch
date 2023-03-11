const button = document.querySelector('button');
var sizeInput;

function changeGrid() {
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
}


button.addEventListener('click', changeGrid);



