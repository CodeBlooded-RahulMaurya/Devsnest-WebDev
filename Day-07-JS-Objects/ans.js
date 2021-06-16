//1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

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
