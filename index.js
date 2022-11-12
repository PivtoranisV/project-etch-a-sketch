const board = document.querySelector('.board');

makeBoard(16);

function makeBoard(size) {
  for (let i = 0; i < size * size; i++) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
  }
}
