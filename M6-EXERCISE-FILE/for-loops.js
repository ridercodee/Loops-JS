// Arrays of data
const names = ["Mehboob", "rider", "kim", "steve" ];

// For loop
for(let i = 0; i < names.length; i++) { 
  console.log(`Names: ${names[i]}`);
}

//Using a for..of loop
for ( let name of names) { 
  console.log(`Names: ${name}`);
}

// For ..in loops
const employee = employees[0];
for(let peoperty in employees) { 
  console.log(`${property}: ${employees[property]}`);
}
// Nesting for in inside of a for of
for (let emp of employees) { 
  For (let property in emp) { 
    console.log(`${property}: ${emp[property]}`);
  }
}
