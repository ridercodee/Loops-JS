let obj = { 
  firstName: "mehboob",
  lastName: "Khan",
}
let obj1 = { 
  firstName: "james",
  lastName: "steve",
}
const employees = [obj, obj1];

// Listing only one item
for(let i = 0; i < employees.length; i++) { 
  if(i === 1) { 
    break;
  }
  console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
}

// Serching only for first names that start with 'j'
for (let employee of employees) { 
  if(!employee.firstName.startsWith('J')) { 
    continue;
  }  
  console.log(`Name: ${employees.firstName} ${employees.lastName}`);
}
  
