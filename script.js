const button = document.getElementById('changeColorBtn');
const body = document.body;

button.addEventListener('click', function() {
  if (body.style.backgroundColor === 'black') {
    body.style.backgroundColor = 'red';
  } else {
    body.style.backgroundColor = 'black';
  }
});
