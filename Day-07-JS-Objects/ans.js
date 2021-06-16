// 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

function getProperties(jsObject) {
  for (let key of Object.keys(jsObject)) {
    console.log(key);
  }
}
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

getProperties(student);

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

function delProp(jsObject , prop){
    console.log("Before deletion :- " + Object.keys(jsObject));
    delete jsObject[prop];
    console.log("After deletion :- " + Object.keys(jsObject));
}

delProp(student, "rollno");

// 3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

function getLength(jsObject) {
  console.log("Lenght of JSObject : ",Object.keys(jsObject).length);
}

getLength(student);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

function printName(jsObject){
  let n = Object.keys(jsObject).length;
  console.log("Total No. Of Books :- ",n);
  for(let i=0; i<n ; i++){
    console.log("--------BOOK -",i,"---------");
    console.log("Books name     :  ", jsObject[i]['title']);
    console.log("Author's name  :  ", jsObject[i]['author']);
    console.log("Reading Status :  ", jsObject[i]['readingStatus']);
    console.log();
  }
}

var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

printName(library);

//5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased
class Cylinder {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }
  area() {
    return Math.PI * this.height * this.radius * 2;
  }
}
let h = 12;
let r = 3.3;
let cy = new Cylinder(h, r);
console.log(cy.area().toFixed(4));

//6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

let sortArray = (a, b) => {
  return b.libraryID - a.libraryID;
};
var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

console.log(library.sort(sortArray));
// let output = [
//   [object Object] {
//     author: "Walter Isaacson",
//     libraryID: 4264,
//     title: "Steve Jobs"
//   },
//   [object Object] {
//     author: "Suzanne Collins",
//     libraryID: 3245,
//     title: "Mockingjay: The Final Book of The Hunger Games"
//   },
//   [object Object] {
//     author: "The Road Ahead",
//     libraryID: 1254,
//     title: "Bill Gates"
//   }
// ];
