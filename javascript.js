const container = document.querySelector("#container");

function newGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            column.appendChild(box);
            
            box.style.padding = `${400/gridSize}px`;
    
    
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = randomRGB();
            })
    
        }
    }
}

function randomRGB() {
    const num1 = (Math.floor(Math.random() * 255) + 1);
    const num2 = (Math.floor(Math.random() * 255) + 1);
    const num3 = (Math.floor(Math.random() * 255) + 1);

    return `rgb(${num1}, ${num2}, ${num3})`;
}

newGrid(16);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let inputSize = 101;
    while (inputSize > 100 || inputSize == null || inputSize == "") {
        inputSize = prompt("Enter the size of the grid:\n(Cannot be greater than 100)");
    }
    const columns = document.getElementsByClassName("column");
    while (columns.length > 0) {
        columns[0].parentNode.removeChild(columns[0]);
    }

    newGrid(inputSize);
})