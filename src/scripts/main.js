// // Lesson-4
//
function sum(x) {
    return function (y) {
        return x + y;
    };
}

console.log(sum(5)(2));
// //```````````````````````````````````````````````

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let i1 = 0;
let i2 = 0;
let i3 = 0;

const Monday = document.getElementById('Monday');
Monday.addEventListener('click', (event) => {
    event.target.style.color = getColor1(Monday);
});

const Tuesday = document.getElementById('Tuesday');
Tuesday.addEventListener('click', (event) => {
    event.target.style.color = getColor2(Tuesday);
});

const Wednesday = document.getElementById('Wednesday');
Wednesday.addEventListener('click', (event) => {
    event.target.style.color = getColor3(Wednesday);
});

function getColor1() {
    while (i1 < colors.length) {
        i1++;
        return colors[i1];
    }
    if (i1 === colors.length) {
        i1 = 0;
    }
    event.target.style.color = colors[i1];
}

function getColor2() {
    while (i2 < colors.length) {
        i2++;
        return colors[i2];
    }
    if (i2 === colors.length) {
        i2 = 0;
    }
    event.target.style.color = colors[i2];
}

function getColor3() {
    while (i3 < colors.length) {
        i3++;
        return colors[i3];
    }
    if (i3 === colors.length) {
        i3 = 0;
    }
    event.target.style.color = colors[i3];
}

// console.log(getColor1);
// // // //```````````````````````````````````````````````
// export const name = 'Elizabeth';
// export const age = 24;
//
// export function getAge(name, age) {
//     if (age > 18) {
//         return ` Hello, ${name}}, Congrats! `;
//     }
// }
//
// console.log(getAge);
// // //```````````````````````````````````````````````
//
// let counter = 0;
// const interval = setInterval(function () {
//     if (counter === 12) {
//         clearInterval(interval);
//     } else {
//         console.log(++counter);
//     }
// }, 1000);
// // //```````````````````````````````````````````````
// function welcome() {
//     console.log('Welcome to our website!');
// }
//
// setTimeout(welcome, 5000);
//
// console.log('2nd of May');
//
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function alarm(time) {
//     console.log('Wake up! It’s ' + time + " o'clock!");
//     // }
//     // setInterval(alarm, 3000, 6);
//     //
//     //
//     // const intervalId = setInterval(alarm, 3000);
//     // clearInterval(intervalId);
//
//     console.log(5);
//
//     function printOne() {
//         console.log(1);
//     }
//
//     console.log(9);
//
//     function printFour() {
//         console.log(4);
//     }
//
//     setTimeout(printSix, 3000);
//     setTimeout(printOne, 0);
//     setTimeout(printFour, 0);
//     setTimeout(printSeven, 2000);
//
//     function printSix() {
//         console.log(6);
//     }
//
//     function printSeven() {
//         console.log(7);
//     }
//
//     let multiplication = function (x, y) {
//         return x * y;
//     };
//
//     console.log(multiplication(8, 5));
//
//     (function () {
//         console.log('Breaking News!');
//     })();
//
// //     const cats = ['Persian Cats', 'Sphynx Cats', 'Scottish Fold Cats'];
// //     (function () {
// //         setTimeout(function () {
// //             getCatsMeaw(cats);
// //         }, 5000);
// //     })(cats);
// //
// //     let setSettingsVar = function () {
// //         return 'Settings have saved.';
// //     };
// // }
// // //an anonymous function that saved it in the variable setSettingsVar.
