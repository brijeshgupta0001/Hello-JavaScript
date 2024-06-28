// console.log("Hello Mister")
// console.log("Nothing")
// console.table([typeof(NaN),typeof(undefined),typeof(null)]);
// console.table(["hello","world","jhvj"]);
// let a = null;
// console.log(typeof(a));
// console.log(a);
// console.log(null);

// const id = Symbol('123');
// const userid = Symbol('123');
// console.log(id == userid);
// console.log(typeof id);
// console.log(id);
// console.log(userid);

const RandomNumber = 8764.65774
console.log(RandomNumber.toFixed(2));
console.log(RandomNumber.toPrecision(4));
console.log(RandomNumber.toPrecision(6));
console.log(RandomNumber.toString().length);

console.table([Math.round(RandomNumber),Math.ceil(RandomNumber),Math.floor(RandomNumber)])


const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);