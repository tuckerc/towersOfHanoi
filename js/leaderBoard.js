'use strict';

document.getElementById('about').addEventListener('click', function() {
  document.location.assign('about.html');
});
document.getElementById('instructions').addEventListener('click', function() {
  document.location.assign('instructions.html');
});

document.getElementById('index').addEventListener('click', function() {
  document.location.assign('index.html');
});

function displayBoard() {
  var table = document.getElementById('leaderBoard');
  var board = JSON.parse(localStorage.getItem('towersOfHanoi')).board;
  console.log(table);
  for(var i = 0; i < 10; i++) {
    var newTR = document.createElement('tr');
    var name = document.createElement('td');
    var moves = document.createElement('td');
    name.textContent = board[i].name;
    moves.textContent = board[i].moves;
    newTR.appendChild(name);
    newTR.appendChild(moves);
    table.appendChild(newTR);
  }
}

displayBoard();
