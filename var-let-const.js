/* 
var : no reason to use var
let : allow it to reassign
const : do not allow it to reassign 
*/

let count = 0;
for(count ; count<=10; count++){
    console.log(count);
}

count = 50; //let : allow it to reassign
console.log(count);
// let count = 0;