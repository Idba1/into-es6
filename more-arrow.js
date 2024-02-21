// single parameters

const nayok = {
    name: 'Ananta',
    age: 35,
    profession: "businessman",
    family:{
        wife: "Borsha",
        son: "jani na"
    }
}

const person = (nayok) => nayok.family.wife;
const wife = person(nayok);
console.log(wife);


const second = array => array[1];
const sec = second([4,3,45,5,6,7,7,6,3]);
console.log(sec)


const double = num => num*2;
const makeDouble = double(99);
console.log(makeDouble);



// No parameters
const getPi = () => Math.PI;
console.log(getPi());


// Large Arrow Function
const doCalculate = (k,h,m) => {
    const sum = k + h + m;
    const mult = k * h * m;
    const finalResult = sum+mult;
    return finalResult;
}
const result = doCalculate(5,6,4);
console.log(result);


const difference = (x, y) => x - y;
const multiply = (first, second , third) => first * second * third;

// single parameter or one parameter 
const getAge = (person) => person.age;
const student = { name: 'ananata', age: 45}
const age = getAge(student)
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5,9,88,2,13])
console.log(third)

const doubleIt = num => num * 2;

// no parameter
const getPI = () => Math.PI
console.log(getPI())

// large arrow function. if you want to get anything returned from this function. then you have to use the return keyword  
const doMath = (x, y, Z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult
    return result
}