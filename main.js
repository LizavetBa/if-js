let user = 'John Doe';
console.log(user);

const student = 'Elizabeth';
console.log(student);

user = student;

console.log(user);
//result: Elizabeth;

//_____________________________

let test = 1;
test++; //result: 2;

console.log(test + '1'); //result:21;
console.log(test - 1); //result:1;
console.log(typeof test); //result:number;
//_____________________________

const example = 10;
let z = 2;
z++;
console.log(example % z); //result: 1;

//_____________________________

const a = 12;
const k = 11;

if (a === k) {
    console.log('done');
} else console.log('try again'); //result: try again;

//_____________________________

const man = { name: 'Joe', age: '32' };
const status = man.age <= 40 ? 'old' : 'young';
console.log(status); //result: old;

//_____________________________

let result = 1;
const arr = [2, 3, 5, 8];
for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
}
console.log(result); //result: 240
//_______________________________

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5 && arr2[i] < 10) {
        console.log(arr2[i]);
    }
}
//result:8,6
//_______________________________

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
        console.log(arr3[i]);
    }
}
//result:2,8,0,6,20
//_________________________________

function calc(n1, n2) {
    console.log(n1 * n2);
}

const x = 4;
const y = 6;

calc(x, y);

const square = function (number) {
    console.log(number * number);
};
square(y);
square(x);
