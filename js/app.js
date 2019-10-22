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
  this.isSmaller = function (){
    if(this.donuts.length === 0){
      return true;
    } else if (poles[fromPole].donuts.length === 0){
      fromPole = null;
      alert('no donouts to move');
      return false;
    } else if (this.donuts[this.donuts.length-1].size > poles[fromPole].donuts[poles[fromPole].donuts.length-1].size) {
      return true;
    } else {
      fromPole = null;
      alert('you can\'t stack a big donut on a smaller donut');
      return false;
    }
    this.move = function(){
        if (fromPole === null){
            fromPole = this.id;
        } else if(this.isSmaller()) {
            this.donuts.push(poles[fromPole].donuts[poles[fromPole].donuts.length-1]);
            poles[fromPole].donuts.pop();
        }   
  };
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

function render() {
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
<<<<<<< HEAD



function render(){
  console.log(poles);
  console.log(fromPole);
}
=======
document.getElementById('post1').addEventListener('click', poles[0].move);
document.getElementById('post2').addEventListener('click', poles[1].move);
document.getElementById('post3').addEventListener('click', poles[2].move);

>>>>>>> 047c78da757053f0ab547bc569fdd00b72849d85
render();
