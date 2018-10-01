// let symbol = Symbol('name');
// let symbol2 = Symbol('name');
// console.log(symbol);
// console.log(symbol2);
// console.log(symbol === symbol2);

// let symbol = Symbol.for('name');
// let symbol2 = Symbol.for('name');
// console.log(symbol);
// console.log(symbol2);
// console.log(symbol === symbol);

// let symbol = Symbol.for('name');
// let symbol2 = Symbol.for();
// let name = Symbol.keyFor(symbol);
// let name2 = Symbol.keyFor(symbol2);
// console.log(name);
// console.log(symbol2);
// console.log(name2);

let password = Symbol();
let user = {
    username: 'r2d2',
    [password]: 'c3po',
    password: 'new_c3po'
};
console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
// let password = user[Symbol.for('password')];
// console.log(password);
console.log(Object.getOwnPropertySymbols(user));

let object = {
    iterator: 0,
    [Symbol.iterator]() {}
};