import employees from './data.json' assert { type: 'json' }  

let i = 0;
while(employee[i]) { 
  console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
  i++;
}

// Do while loop
i = 0;
do { 
 console.log(`Names: ${employees[i].firstName} ${employees[i].lastName}`);
 i++;
} while(employees[i]);