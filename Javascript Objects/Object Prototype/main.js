// Object literal : Object.prototype
let obj = {
    name: "Akshay",
    profession: "Web Developer",
    address: "Mars"
}

function Obj(givenName,newaddress){
    this.name = givenName;
    this.address = newaddress
}

// Obj.prototype.getName = function (){
//     return this.name;
// }

// Obj.prototype.setName = function (newName){
//   this.name = newName;
  
// }

let obj2 = new Obj("Rahul","Earth");
console.log(obj2);
 