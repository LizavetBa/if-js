(function main() {
    const calc = (p1, p2, ...args) => {
        let result = p1 + p2 || 1;

        for (let i = 0; i < args.length; i++) {
            result *= args[i];
        }
        return result;
    };

    function pow(x, n) {
        if (n === 1) {
            return x;
        } else {
            return x * pow(x, n - 1);
        }
    }

    const bob = (a) => a + 100;
    console.log(bob(1));

    const num1 = 2;
    const num2 = 3;
    const num3 = 4;
    const num4 = 5;

    const sum = calc(num1, num2, num3, num4);
    console.log(sum);
    console.log(pow(2, 6));
})();

//___________________________lesson cases

//task 5
function palindrome(str) {
    const pali = str.split('');
    const palindrome = true;

    for (let i = 0; i < pali.length; i++) {
        if (pali[i] !== pali[pali.length - 1 - i]) {
            return false;
        }
    }
    return palindrome;
}

console.log(palindrome('justify'));
console.log(palindrome('racecar'));
console.log(palindrome('level'));

// //task 6.1

const a = 12;
const b = 21;

const min = function (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

console.log(min(a, b));

// //task 6.2
const c = 87;
const y = 45;

const max = function (c, y) {
    if (y > c) {
        return false;
    } else {
        return c;
    }
};

console.log(max(c, y));

// // task 6.3

const array = [13, 7, 30, 55, 10, 34, 11, 2, 0, 79];
const arr = array.join(',');
console.log(arr.replaceAll('0', 'zero'));

//_______________________________lesson 4
//____________________task 7.1

function sum(arg, res = 0) {
    return arg === undefined ? res : (arg2) => sum(arg2, res + arg);
}

console.log(sum(5, 7));

// //example
// const cars = ['Mazda', 'Opel', 'BMW', 'Porsche'];
//
// for ( let car of cars){
// console.log(car);}
//
// //example
// console.log(0\1);
