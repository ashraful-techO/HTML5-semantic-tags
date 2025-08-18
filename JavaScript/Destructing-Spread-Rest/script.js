// const numbers = [1,2,3,4];
// //const names = ["Shanto", "Pranto", "Nabila", "Shatabdi"]
// const [a,b,c,d] = numbers;
// //const [e,f,g,h]= names;

// console.log(a,b,c,d);
// //console.log(e,f,g,h);

// const user = { name: "Shanto", age: 27 };
// const {name, age} = user;
// console.log(name,age);



// function sum(...numbers) {
//   return numbers.reduce((acc, n) => acc + n, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));

// function greet({name}){
//   console.log(`Hello ${name}`);
// }

// greet({name: "Shanto"});

// const nums = [1,25,4];
// console.log(Math.max(...nums)); //25


// function maxNumber(nums){
//   return Math.max(...nums);
// }

function sum(...numbers){
  return numbers.reduce((acc,n)=> acc+n,0);
}

console.log(sum(1,2,3));//6

const [first, ...rest1] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest1);  // [20, 30, 40]


const { name, ...rest } = { name: 'Sam', age: 30, city: 'NY' };
console.log(name); // Sam
console.log(rest); // { age: 30, city: 'NY' }

