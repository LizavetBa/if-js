// //________________________________arguments
function calc() {
    let acc = 1;
    for (let i = 0; i < arguments.length; i++) {
        acc *= arguments [i];
    }
    return acc;
}

const num1 = 1;
const num2 = 2;
const num3 = 3;
const num4 = 4;

const sum = calc(num1, num2, num3, num4);

console.log(sum);

//________________________________

function calc(p1,p2, ...args) {
    let acc = (p1 + p2) || 1;
    for (let i = 0; i < args.length; i++) {
        acc *= args [i];
    }
    return acc;
}

const numb1 = 1;
const numb2 = 2;
const numb3 = 3;
const numb4 = 4;

const summ = calc(numb1, numb2, numb3, numb4);

console.log(summ);
//________________________________

