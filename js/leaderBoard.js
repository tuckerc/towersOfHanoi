'use strict';

// add event listeners to nav buttons
document.getElementById('about').addEventListener('click', function() {
  document.location.assign('about.html');
});
document.getElementById('instructions').addEventListener('click', function() {
  document.location.assign('instructions.html');
});

document.getElementById('index').addEventListener('click', function() {
  document.location.assign('index.html');
});

// function to render the leader board
function displayBoard() {
  
  if(localStorage.getItem('towersOfHanoi')) {
    var board = JSON.parse(localStorage.getItem('towersOfHanoi')).board;
    var counter = 0;
    var index = 0;

    // three donuts table
    var table = document.getElementById('threeDonuts');
    while(counter < 10 && index < board.length) {
      if(board[index].donutCount === 3) {
        var newTR = document.createElement('tr');
        var name = document.createElement('td');
        var moves = document.createElement('td');
        name.textContent = board[index].name;
        moves.textContent = board[index].moves;
        newTR.appendChild(name);
        newTR.appendChild(moves);
        table.appendChild(newTR);
        counter++;
      }
      index++;
    }

    // four donuts table
    counter = 0;
    index = 0;
    table = document.getElementById('fourDonuts');
    while(counter < 10 && index < board.length) {
      if(board[index].donutCount === 4) {
        var newTR = document.createElement('tr');
        var name = document.createElement('td');
        var moves = document.createElement('td');
        name.textContent = board[index].name;
        moves.textContent = board[index].moves;
        newTR.appendChild(name);
        newTR.appendChild(moves);
        table.appendChild(newTR);
        counter++;
      }
      index++;
    }

    // five donuts table
    counter = 0;
    index = 0;
    table = document.getElementById('fiveDonuts');
    while(counter < 10 && index < board.length) {
      if(board[index].donutCount === 5) {
        var newTR = document.createElement('tr');
        var name = document.createElement('td');
        var moves = document.createElement('td');
        name.textContent = board[index].name;
        moves.textContent = board[index].moves;
        newTR.appendChild(name);
        newTR.appendChild(moves);
        table.appendChild(newTR);
        counter++;
      }
      index++;
    }
  }
}

displayBoard();
