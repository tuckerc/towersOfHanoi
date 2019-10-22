// new variable to store chosen pole's id
var fromPole = null;

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
    } else if (this.pole[fromPole].donuts.length === 0){
      return false;
    } else if (this.donuts[this.donuts.length-1].size > poles[fromPole].donuts[poles[fromPole].donuts.length-1].size) {
      return true;
    } else {
      return false;
    }
  };
  this.move = function () {
    if (fromPole === null){
      fromPole = this.id;
      //!!!!!!!!!!!!!!!!!!!!!
      //remove later !!!!!!!!
      //!!!!!!!!!!!!!!!!!!!!!
      render();
    }
    else if(this.isSmaller()) {
      this.donuts.push(poles[fromPole].donuts[poles[fromPole].donuts.length-1]);
      poles[fromPole].donuts.pop();
      render();
    }
  };
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



function render() {
  console.log(poles);
  console.log(fromPole);
}

render();
