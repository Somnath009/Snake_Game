const board = document.querySelector(".board");
const blockHeight = 30;
const blockWidth = 30;

const cols = Math.floor(board.clientHeight / blockHeight);
const rows = Math.floor(board.clientWidth / blockWidth);

for(let i = 0; i < cols * rows; i++){
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
}