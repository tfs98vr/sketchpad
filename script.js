const grid = document.getElementById('grid');
let btnColor = document.getElementById('color');
let btnRandom = document.getElementById('randomButton');
let btnClear = document.getElementById('clear');
let range = document.getElementById('range');
let rangeText = document.getElementById('textRange');
let currentMode;


rangeText.textContent = `${range.value} X ${range.value}`


//Grid generator
function gridSize(size) {
    let total = size * size;
    for (i = 0; i < total; i++) {
        let newDiv = document.createElement('div');
        newDiv.style.backgroundColor = 'white';
        grid.appendChild(newDiv);
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        range.addEventListener('change', function() {
            newDiv.remove()
        });
        newDiv.addEventListener('mouseenter', currentColor);

        //Clear function
        btnClear.addEventListener('click', function clear() {
            newDiv.style.backgroundColor = 'white';
        });
    }
}


function currentColor(e) {
    //Default mode
    colorPicker(e);
    if (currentMode === 'random') {
        random(e);
    } else if (currentMode ==='colorPicker') {
        colorPicker(e);
    };
}


function colorPicker(e) {
    e.target.style.backgroundColor = btnColor.value;
}


function random(e) {
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}


//Default grid size
gridSize(16);


btnRandom.addEventListener('click', () => currentMode = 'random');

btnColor.addEventListener('change', () => currentMode = 'colorPicker');

range.addEventListener('change', () => gridSize(range.value));

range.addEventListener('input', function() {
    rangeText.textContent = `${range.value} X ${range.value}`
});


