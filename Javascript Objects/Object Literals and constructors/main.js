// Object Literal for creating objects
let car = {
  name: "Maruti 800",
  topSpeed: 89,
  run: function() {
    console.log("car is running");
  }
};



// Creating a constructor for bike
function Generalbike(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function() {
    console.log(`${this.name} Is Running`);
  };
  this.analyze = function() {
    console.log(
      `This Bike is slower by ${200 - this.topSpeed} Km/H than BMW`
    );
  };
}
car1 = new Generalbike("BMW", 180);
car2 = new Generalbike("HERO", 80);
car3 = new Generalbike("Royal Enfield", 200);
console.log(car1, car2, car3);

 