//1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

// function getProperties(jsObject) {
//   for (let key of Object.keys(jsObject)) {
//     console.log(key);
//   }
// }
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

// getProperties(student);

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

// function delProp(jsObject , prop){
//     console.log("Before deletion :- " + Object.keys(jsObject));
//     delete jsObject[prop];
//     console.log("After deletion :- " + Object.keys(jsObject));
// }

// delProp(student, "rollno");

//3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

// function getLength(jsObject) {
//   console.log("Lenght of JSObject : ",Object.keys(jsObject).length);
// }

// getLength(student);

//4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

function printName()

var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
