/*-------------------------------- Constants --------------------------------*/



/*---------------------------- letiables (state) ----------------------------*/ 
let snakePositions = []
let direction = 'right'
let ratPosition = { x: 0, y: 0 }
let gameOver = false
let userInputs = []
let speed = 0.8
let intervalTime = 0
let interval = 0

//game board size (number of cells in grid)
//20x20 gameBoard = 400 cells
let width = 20 //cells
let height = 20 //cells

/*------------------------ Cached Element References ------------------------*/

const gameBoard = document.querySelector('.game-board')
const gameStatus = document.querySelectorAll('#message')


/*----------------------------- Event Listeners -----------------------------*/

window.addEventListener("keydown", function (event) { 
  if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) //move direction based on key pressed
  return

  event.preventDefault()
  
  if (event.key === "ArrowLeft") {
  direction = 'left'
  return
}

if (event.key === 'ArrowRight') {
	direction = 'right'
	return
}

if (event.key === 'ArrowUp') {
  direction = 'up'
  return
}

if (event.key === 'ArrowDown') {
  direction = 'down'
  return
}
console.log(direction)
})




/*-------------------------------- Functions --------------------------------*/

//first define the required variables to track game state
//store cached elements
//define required constants

init()


function init() {
  
  for (let i = 0; i < width * height; i++) {
	const inside = document.createElement('div')
	inside.classList.add('inside')

	const cell = document.createElement('div')
  cell.classList.add('cell')
	cell.appendChild(inside)
	gameBoard.appendChild(cell)
  }
  cells = document.querySelectorAll('.game-board .cell .inside')
  render()
}


function render() {
  for (let i = 0; i < width * height; i++) {
		cells[i].style.removeProperty('background-color')// makes old snake disappear 
	}
	for (const segment of snakePositions) {
		const cellIndex = segment.x + width * segment.y
		const snakeCell = cells[cellIndex]
		snakeCell.style.backgroundColor = 'black'//makes current snake show up 
	}
	const ratCellIndex = ratPosition.x + width * ratPosition.y
	const ratCell = cells[ratCellIndex]
	ratCell.innerText = '🐀'

}


function startGame() {
  snakePositions = [
		{ x: 6, y: 0 },
		{ x: 7, y: 0 },
		{ x: 8, y: 0 },
		{ x: 9, y: 0 },
	]
	direction = "right"
	intervalTime = 1000
	interval = setInterval(moveOutcome, intervalTime)
}

function moveOutcome() {
	let cells = document.querySelectorAll('.cell')
		move(cells)
	}



  window.tempSnakeRenderTest = function() {
  snakePositions = [
		{ x: 11, y: 0 },
		{ x: 12, y: 0 },
		{ x: 13, y: 0 },
		{ x: 14, y: 0 },
	]
  render();
};