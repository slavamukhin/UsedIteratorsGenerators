// function* generator() {
//     yield 1;
// }
//
// let generator = function*() {
//     yield 1;
// };
//
// let obj = {
//     *generator() {
//         yield 1;
//     }
// };
//
// class SomeClass {
//     *generator() {
//         yield 1;
//     }
// }

// function* generateArray() {
//     yield* [1, 2, 3];
// }
//
// function* generator() {
//     yield 42;
//     yield* generateArray();
//     yield 43;
// }
//
// let iterator = generator();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

function* generator2() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch (e) {
        console.log(e)
    }
}

let iterator2 = generator2();
console.log(iterator2.next());
console.log(iterator2.throw(new Error('Error')));
console.log(iterator2.return());