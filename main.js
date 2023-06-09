import './style.css'

const dropzones = document.querySelectorAll('.dropzone')
const items = document.querySelectorAll('.drag-item')

let draggedItem = null;

function dragStart(e) {
  draggedItem = this;

  this.style.opacity = '0.4';
}

function dragEnd() {
  draggedItem = null;
  this.style.opacity = '1';
}

items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
})


function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
}

function dragLeave() {
}

function drop() {
  if (this === draggedItem.parentNode) return;

  this.appendChild(draggedItem);
  showMessage('Item dropped successfully!');
}

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragover', dragOver);
  dropzone.addEventListener('dragenter', dragEnter);
  dropzone.addEventListener('dragleave', dragLeave);
  dropzone.addEventListener('drop', drop);
})

const resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click', resetContainers);

function resetContainers() {
  dropzones[1].innerHTML = '';
  items.forEach(item => {
    dropzones[0].appendChild(item);
  });
  showMessage('Reset Successfully!');
}

// Show success message
function showMessage(message) {
  const successMessage = document.getElementById('successMessage');
  successMessage.textContent = message;
  successMessage.style.display = 'block'
  
  setTimeout(() => {
    successMessage.style.display = 'none'
  }, 3 * 1000)
}