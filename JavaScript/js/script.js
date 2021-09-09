// global scope (outside)



(function () {
    // function scope (hidden)
    var myDiv = document.querySelector('.my-div'),
    name = "me";

    myDiv.style.cssText = `
    width: 100px;
    height: 100px;
    background-color: red;
    `
;

//event listeners
myDiv.addEventListener("click",  (e) => {
     var target = e.target;

    //  console.log(e.offsetX);
    target.style.cssText += `background-color: blue;`;
});

// concatenating methods 2 ways to do the same thing
"Hello my name is "+name;

`Hello my name is ${name}`;

// objects
var myObject = {
    color: "red",
    width: 200,
    height: 200,
    position: {
        x : 120,
        y: 50
    }
    
};

// access the properties of the object
myObject.width; //200
myObject.position.x;

// variable types
var test; // value can change
let test; // value is block scoped
const test; // value is constant

// array take any data type
var arr = [1, 2, 3, "a", "b", "c"];

// iterate an array
/**
 * let i = 0;
 * defines a variable with the value of zero
 * 
 * i < arr.length;
 * i is less than the lenght of the array
 * 
 * i++ 
 * this increments i by `
 * 
 * until i is equal to the length of the array it will not stop
 */
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]) // output: 1, 2, 3, "a", "b", "c"
}
// do while loop
let i = 0;
do {
    i++;
}
while (arr < i)

// while loop
let i = 0;

while (i < arr.length) {
    i++;
}


/**
 * length measuers the lenght of an array or string
 * 
 * var arr = [1, 2, 3, "a", "b", "c"];
 * the indexing iof this array is
 * 0 1 2 3 4 5
 */

var arr = [1, 2, 3, "a", "b", "c"];

// i want to find the letter "a" from the array
a[3]; // output : "a"

a[arr.length] // this will output an error. Beacuase there is no array element in position 6
a[arr.length -1] // output "c"

// give an array element a new value
arr[3] = 4; // change index 3 which is a to 4


// iteration objects
var object = {
    item1 : 1, 
    item2 : 2, 
    item3 : "a",
    item4 : "b"
};

for (let item in object) {
    console.log(item); // item 1 item 2
    console.log(object[item]) // output: 1 2 a b
}

// for of loop
var arr = [1, 2, 3, "a", "b", "c"];

for (item of arr){
    console.log(item); // output: 1 2 3
}

// operators
/** 
 * || = or
 * && = and
 * === strict equal to
 * == equal to
 * !== not equal to
 * > greater than
 * < less than
 * >= greater than or equal to
 * <= less than or equal to
 * 
 */


 // conditions
 var test = 1;
 
 //ternary
 test === 1 ? true : false;


// switch
var colour = "red";
switch(colour) {
    case "blue":
    found = true;
    break;
    case "red":
        found = true;
        break;
        default: 
        found = false;
}

// break keyword stops execution
// return also stops execution


} )();