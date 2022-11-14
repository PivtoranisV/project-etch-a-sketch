const board = document.querySelector('.board');
const boardSize = document.querySelector('input');

boardSize.addEventListener('change', (event) => makeBoard(event));

function makeBoard(event) {
  const size = Number(event.target.value);
  board.replaceChildren();

  for (let i = 0; i < size * size; i++) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    const cell = document.createElement('div');
    cell.addEventListener('mouseenter', () => {
      cell.style.backgroundColor = 'blue';
    });
    cell.classList.add('cell');
    board.appendChild(cell);
  }
}
