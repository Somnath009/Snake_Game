const board = document.querySelector(".board");
const blockHeight = 80;
const blockWidth = 80;

const blocks = [];
const snake = [
  {
    x: 1,
    y: 3,
  },
  {
    x: 1,
    y: 4,
  },
  {
    x: 1,
    y: 5,
  },
];
let direction = "down"

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {

    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);

    block.innerHTML = `${row}-${col}`

    blocks[`${row}-${col}`] = block;
  }
}

function render(){
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill")
  })
}

setInterval(() => {
  let head = null;

  if(direction == "left"){
    head = { x: snake[0].x, y: snake[0].y - 1}
  } else if(direction == "right"){
    head = { x: snake[0].x, y: snake[0].y + 1}
  } else if(direction == "down"){
    head = { x: snake[0].x + 1, y: snake[0].y}
  } else if(direction == "up"){
    head = { x: snake[0].x - 1, y: snake[0].y}
  }

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill")
  })

  // snake.unshift(head)
  // snake.pop()


  render();
}, 300);

addEventListener("keydown", (dets) => {
  if(dets.key == "ArrowUp"){
    direction = "up";
  } else if(dets.key == "ArrowDown"){
    direction = "down";
  } else if(dets.key == "ArrowRight"){
    direction = "right";
  } else if(dets.key == "ArrowLeft"){
    direction = "left";
  }
})