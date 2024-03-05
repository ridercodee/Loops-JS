// Creating a map
const map1 = new Map();
map1.set("firstName", "Mehboob");
map1.set("lastName", "Khan");
console.log(map1)

// Checking the size
console.log(`Map Size: ${map1.size}`);

// Accessing values 
console.log(map1.get("lastName"));

// Deleting values
map1.delete("firstName");
console.log(`Map Size: ${map1.size}`);

// Creating a set
const set1 = new Set();
set1.add("Rider");
console.log(set1);

// Checking the set size
console.log(`Set Size: ${set1.size}`);

// Adding complex values 
const team1 = new Set();
const emp1 = { 
  firstName: "mehboob",
  lastName: "khan"
};
team1.add(emp1);
console.log(`Set Size: ${team1.size}`);
