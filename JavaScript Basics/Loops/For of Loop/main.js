                            // for...of with Arrays
// array
const students = ['John', 'Sara', 'Jack'];

// using for...of
for ( let element of students ) {

    // display the values
    console.log(element);
}


                        // for...of with Strings
// string
const string = 'code';

// using for...of loop
for (let i of string) {
    console.log(i);
}

                         // for...of with Sets
// define Set
const set = new Set([1, 2, 3]);

// looping through Set
for (let i of set) {
    console.log(i);
}

                            // for...of with Maps
// define Map
let map = new Map();

// inserting elements
map.set('name', 'Jack');
map.set('age', '27');

// looping through Map
for (let [key, value] of map) {
    console.log(key + '- ' + value);
}