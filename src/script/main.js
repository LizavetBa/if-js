// const obj1 = {
//   a: 'a',
//   b: {
//     a: 'a',
//     b: 'b',
//     c: {
//       a: 1
//     }
//   }
// };
// const obj2 = {
//   a: 'a',
//   b: {
//     b: 'b',
//     a: 'a',
//     c: {
//       a: 1
//     }
//   }
// };
// const obj3 = {
//   a: {
//     c: {
//       a: 'a'
//     },
//     b: 'b',
//     a: 'a'
//   },
//   b: 'b'
// };
// const deepEqual(obj1, obj2)
// {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   const keysCheck = keys1.map(Item => {
//     const value1 = object1[key];
//     const value2 = object2[key];
//     const typeOfObjects =
//       typeof value1 === 'object' && typeof value2 === 'object';
//     if (
//       (typeOfObjects && value1 !== value2) ||
//       (typeOfObjects && keys1.length !== keys2.length &&
//         value1 !== value2)
//     ) {
//       return false;
//     }
//   }
//   return true;
// }
//
// console.log(deepEqual(obj1, obj2));
// console.log(deepEqual(obj1, obj3));

//
//
//

//
//
//

// const factorial = (n) => {
//   if (n === 0) {
//     return 1;
//   }
//   else {
//     return n * factorial(n - 1);
//   }
// }
//
// console.log(factorial(3));

// function factorial(n, result){
//   result = result || 1;
//   if(!n){
//     return result;
//   }else{
//     return factorial(n-1, result*n);
//   }
// }
//
// console.log(factorial(6));
// function makeIterator(array){
//   let nextIndex = 0;
//
//   return {
//     next: function(){
//       return nextIndex < array.length ?
//         {value: array[nextIndex++], done: false} :
//         {done: true};
//     }
//   }
// }
// let it = makeIterator(['yo', 'ya']);
// console.log(it.next().value); // 'yo'
// console.log(it.next().value); // 'ya'
// console.log(it.next().done);  // true

// const fruits = ['apple','banana','peach'];
// fruits.forEach((item, i) => {
//   console.log(item,i);
// })

const mood = document.querySelector('*');
mood.classList.toggle('back');

const button = document.querySelector('#button');
button.addEventListener('click', function(){
  alert('Спасибо!')
})

button.onclick = function () {
    alert('Dont do it again!!!');
};
const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');

inputText.addEventListener('input', function () {
    console.log(inputText.value);
    textBlock.innerText = inputText.value;
});
const list = document.querySelector('#list');
list.addEventListener('click', function (event) {
    console.log(event.target);
    console.log(event);
});
