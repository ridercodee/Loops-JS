// Creating arrays
let arr1 = [];
let arr2 = ["Item1", "Item2"];
let arr3 = new Array();
let arr4 = new Array("Item1", "Item2");

// Accessing values
let names = ["mehboob", "rohan", "Rider", "rossi"];
console.log(`Names Length: ${names.length}`);
console.log(`First Name: ${names[0]}`);
console.log(`Second Name: ${names[1]}`);
console.log(`Thired Name: ${names[2]}`);
console.log(`Fourth Name: ${names[3]}`);

// Searching for values
const includesRider = names.includes("Rider");
console.log(`Include Rider: ${includesRider}`);
const includeKhan = names.includes("Khan");
console.log(`Includes Khan : ${includeKhan}`);

const  mehboobindex = names.indexOf("mehboob");
console.log(`Mehboob Index: ${mehboobindex}`);

// Adding values - at the end
names.push("Mike");
console.log(names);

// Adding values - at the beginning
names.unshift("Dj");
console.log(names);

// Adding value - at a specific index
names.splice(1, 0, "tyson");
console.log(names);

// Removing value - at the beginning
names.shift();
console.log(names);

// Arrays and object 
const obj1 = { 
  firstName: "mehboob",
  lastName: "rider"
};

const obj2 = { 
  firstName:  "mike",
  lastName: "tyson",
};

const obj3 = {
  firstName: "mehboob",
  lastName: "rider"
};

const employees = [ obj1, obj2 ];
console.log(`Is identical object in array: ${employees.includes(obj3)}`);

