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
    
    var poleNumber = Number(this.id[this.id.length - 1]);
    if (fromPole === null){
      fromPole = poleNumber;
      console.log('poleNumber', poleNumber)
      //!!!!!!!!!!!!!!!!!!!!!
      //remove later !!!!!!!!pole1
      //!!!!!!!!!!!!!!!!!!!!!
      // render();
    }
    else if(poles[poleNumber].isSmaller()) {
      poles[poleNumber].donuts.push(poles[fromPole].donuts[poles[fromPole].donuts.length-1]);
      var parentEl = document.getElementById('post'+ poles[poleNumber].id);
      var child = document.getElementsByClassName('donut' + poles[fromPole].donuts[poles[fromPole].donuts.length-1].size)[0];
      console.log('child','donut' + poles[fromPole].donuts[poles[fromPole].donuts.length-1].size);
      console.log('parent','post'+ poles[poleNumber].id);
      moves++;
      parentEl.appendChild(child);
      poles[fromPole].donuts.pop();
      fromPole = null;
      render();
    }
    isAWinner();
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
document.getElementById('post0').addEventListener('click', poles[0].move);
document.getElementById('post1').addEventListener('click', poles[1].move);
document.getElementById('post2').addEventListener('click', poles[2].move);
document.getElementById('reset-btn').addEventListener('click', reset);
document.getElementById('about').addEventListener('click', function() {
  document.location.assign('about.html');
});
document.getElementById('instructions').addEventListener('click', function() {
  document.location.assign('instructions.html');
});

render();

// function render(){
//   for (var i = 0 ; i < poles[0].donuts.length; i++){
//     var child = document.createElement
//     document.getElementById('post1').appendChild()
//   }
// }

var post0El = document.getElementById('post0');

var donut3 = document.createElement('div')
donut3.classList.add('donut3');
post0El.appendChild(donut3);

var donut2 = document.createElement('div')
donut2.classList.add('donut2');
post0El.appendChild(donut2);

var donut1 = document.createElement('div')
donut1.classList.add('donut1');
post0El.appendChild(donut1);

