function makeGrid(height, width) {
    for(let h = 0; h < height; h++) {
        let row = designCanvas.insertRow(h);//creates a row until the for loop is true
        for(let w = 0; w < width; w++) {
            let cell = row.insertCell(w);//creates a column until the for loop is true
            cell.addEventListener('click', (event) => {
                event.target.style.backgroundColor = color.value;

            })
        }
    }
}

var color = document.getElementById("colorPicker");
var gridSize = document.getElementById("sizePicker");
var gridHeight = document.getElementById("inputHeight");
var gridWidth = document.getElementById("inputWidth");
var designCanvas = document.getElementById("pixelCanvas");
//This code creates a grid according to the the users specifications

document.addEventListener('submit', (event) => {
    event.preventDefault();
    height = (inputHeight.value);
    width = (inputWidth.value);
    designCanvas.innerHTML = "";
    makeGrid(height, width);
})
