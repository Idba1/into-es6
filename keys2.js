const actor = {
    name: 'Ananata',
    age: 30,
    phone: '01717653844',
    money: 124545121545
}

const keys = Object.keys(actor);
console.log(keys);


const values = Object.values(actor);
console.log(values);


const entries = Object.entries(actor);
console.log(entries);


// delete actor.age;
console.log(actor);

const {age, ...shortGlass} = actor;
console.log(shortGlass);

// Object.freeze(actor);
Object.seal(actor);
actor.money = 8742934974823491729183748324;
console.log(actor);