var employeeName = ['skptricks', 'sumit', 'amit', 'rakesh', 'anil'];
//                 [  0             1        2      3          4   ]

// Extract array element from index-2 
console.log(employeeName.slice(2));

// Extract array element from index 2 and n-1 index
console.log(employeeName.slice(2, 4));

// Extract array element from index 1 and n-1 index
console.log(employeeName.slice(1, 5));

// LAST INDEXED ELEMENT IS ALSO ADDED 


// 


// Syntax :
// //array.splice(starting element index, number of elements to remove);


var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'];

// removing by index
months.splice(6);
console.log(months)

// removing by index and number of element
months.splice(4, 3);
console.log(months)

// removing by index and number of element
months.splice(1, 3);
console.log(months)


var months = ['Jan','April', 'May', 'July'];

// adding by index, no element removed
months.splice(1, 0,'Feb', 'March');
console.log(months)

// adding by index, no element removed
months.splice(5, 0,'June');
console.log(months)

// adding by index , 5 elements removed
months.splice(2, 5,'Dec');
console.log(months)



