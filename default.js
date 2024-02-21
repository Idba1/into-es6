function add (a=0,b=0){
    let result = a+b;
    console.log(a,b,result);
    return result;
}

// const sum = add (4);
const sum = add (4,9);

function fullName(first, last=''){
    const full = first + ' ' + last;
    console.log(full);
    return fullName;
}
fullName('Hero', 'Alam');


function friends(name=[]){

}

function person(name={}){
    
}