// max number 
const maxNumber = Math.max(4,5,345,756, 232,65,565);
console.log(maxNumber);

const numbersArray = [324,766,24235,767,45];
const maxNumberArray = Math.max(...numbersArray);
console.log(maxNumberArray)


// Use spread operator to copy
const friends1 = [1,3,56,78,4,44,56,2,45];
const bondhu1 = [333,444,777,...friends1,66,2222,4555];
bondhu1.push(1000);
console.log(bondhu1);
console.log(friends1);


const max = Math.max(6, 23, 45, 1, 89, 23)
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers);
// console.log(...numbers)
console.log(arrayMax)

// use spread operator to copy
const friends = [4, 5, 87, 9];
const bondhu = friends;
const dosto = [...friends] // copy
console.log(dosto)
friends.push(100)
console.log(dosto)
console.log(friends)

// advanced 
const sonkha = [...friends, 9999] // add extra elements while copy
console.log(sonkha)