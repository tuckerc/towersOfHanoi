'use strict';
// new variable to store chosen pole's id
var fromPole = null;
// counter for moves
var moves = 0;

//constructor function for donuts
function Donut(size){
  this.size = size;
}
//constructor function for the poles.
function Pole(id){
  this.id = id;
  this.donuts =[];
  // comparison function to determine if legal move
  this.isSmaller = function (){
    if (poles[fromPole].donuts.length === 0){
      fromPole = null;
      alert('no donouts to move');
      return false;
    }
    else if(this.donuts.length === 0){
      return true;
    }
    else if (this.donuts[this.donuts.length-1].size > poles[fromPole].donuts[poles[fromPole].donuts.length-1].size) {
      return true;
    } else {
      fromPole = null;
      alert('you can\'t stack a big donut on a smaller donut');
      return false;
    }
  };
  // function to handle donut moves
  this.move = function () {
    
    var poleNumber = Number(this.id[this.id.length - 1] - 1);
    if (fromPole === null){
      fromPole = poleNumber;
      //!!!!!!!!!!!!!!!!!!!!!
      //remove later !!!!!!!!pole1
      //!!!!!!!!!!!!!!!!!!!!!
      render();
    }
    else if(poles[poleNumber].isSmaller()) {
      poles[poleNumber].donuts.push(poles[fromPole].donuts[poles[fromPole].donuts.length-1]);
      poles[fromPole].donuts.pop();
      fromPole = null;
      moves++;
      render();
    }
  };
}

// checks to see if we have a winner
function isAWinner() {
  if(poles[1].donuts.length === 3 || poles[2].donuts.length === 3) {
    winnerWinner();
  }
}

// this is where we putt our animation for the winner
function winnerWinner() {
  alert(`Congratulations! You completed Towers Of Hanoi level ${poles.length} in ${moves} moves!`);
}

function reset() {
  for (var i = 0; i < poles.length; i++) {
    poles[i].donuts = [];
  }
  pole0.donuts.push(new Donut(3));
  pole0.donuts.push(new Donut(2));
  pole0.donuts.push(new Donut(1));
  moves = 0;
  fromPole = null;
  render();
}

function render() {
  document.getElementById('moves').textContent = `Moves: ${moves}`;
  isAWinner();
  console.log(poles);
  console.log(fromPole);
  console.log(moves);
}

// instantiate a new pole1
var pole0 = new Pole(0);
//populate the pole with 3 donuts at the beginning of page.
pole0.donuts.push(new Donut(3));
pole0.donuts.push(new Donut(2));
pole0.donuts.push(new Donut(1));

// instantiate a new poles 2 and 3/
var pole1 = new Pole(1);
var pole2 = new Pole(2);
var poles = [pole0,pole1,pole2];

// add pole event listeners
document.getElementById('post1').addEventListener('click', poles[0].move);
document.getElementById('post2').addEventListener('click', poles[1].move);
document.getElementById('post3').addEventListener('click', poles[2].move);
document.getElementById('reset-btn').addEventListener('click', reset);
document.getElementById('about').addEventListener('click', function() {
  document.location.assign('about.html');
});
document.getElementById('instructions').addEventListener('click', function() {
  document.location.assign('instructions.html');
});

render();

var post1El = document.getElementById('post1');

var donutThree = document.createElement('div')
donutThree.classList.add('donutThree');
donutThree.textContent = "BIG";
post1El.appendChild(donutThree);

var donutTwo = document.createElement('div')
donutTwo.classList.add('donutTwo');
donutTwo.textContent = "MEDIUM";
post1El.appendChild(donutTwo);

var donutOne = document.createElement('div')
donutOne.classList.add('donutOne');
donutOne.textContent = "SMALL";
post1El.appendChild(donutOne);

