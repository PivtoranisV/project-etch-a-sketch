const board = document.querySelector('.board');
const boardSize = document.querySelector('input');
const colorSelector = document.querySelector('#color');
const clearBoard = document.querySelector('.clear');
const rangeInputs = document.querySelectorAll('input[type="range"]');

boardSize.addEventListener('change', () => makeBoard());

clearBoard.addEventListener('click', () => {
  document
    .querySelectorAll('.cell')
    .forEach((cell) => (cell.style.backgroundColor = 'white'));
});

rangeInputs.forEach((input) => {
  input.addEventListener('input', handleInputChange);
});

function makeBoard() {
  board.replaceChildren();

  const size = Number(boardSize.value);

  for (let i = 0; i < size * size; i++) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);

    cell.addEventListener('mouseenter', () => {
      if (colorSelector.value !== 'multicolor') {
        cell.style.backgroundColor = colorSelector.value;
      } else {
        cell.style.backgroundColor =
          '#' +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
      }
    });
  }
}

function handleInputChange(event) {
  let target = event.target;
  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
}
