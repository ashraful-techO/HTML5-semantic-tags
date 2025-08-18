// const nums = [2,4,6];
// //const doubled = nums.map(num=> num*2);

// // const even = nums.filter(num=> num%2 ===0);

// // function sum(nums){
// //     return nums.reduce((acc,curr)=>acc+curr,0);
// // }

// const users = [
//     {
//         id : 1,
//         name: "sujat"
//     },
//     {
//         id: 2,
//         name: "bob"
//     }
// ]

// const user = users.find(u=> u.id ===2);

// console.log(users);
// console.log(user);


const products = [
  { id: 1, name: "Laptop", price: 1200, category: "electronics", rating: 4.5 },
  { id: 2, name: "Phone", price: 800, category: "electronics", rating: 4.2 },
  { id: 3, name: "T-shirt", price: 25, category: "clothing", rating: 4.0 },
  { id: 4, name: "Shoes", price: 60, category: "clothing", rating: 3.8 },
  { id: 5, name: "Monitor", price: 300, category: "electronics", rating: 4.3 }
];

const upperCase = products.map(p=> p.name.toUpperCase());

const electronicsCat = products.filter(cat => cat.category === "electronics" && cat.rating>4.0);


const totalPrice = products.reduce((acc,n)=> acc+n.price,0);

const lowRating = products.find(low=> low.rating<4.0);

const findCloth = products.filter(cloth => cloth.category === "clothing" && cloth.rating>=4.0);

const findClothLower = findCloth.map(t=>t.name.toLowerCase());

console.log("Uppercase Names:", upperCase);
console.log("Filtered Electronics:", electronicsCat);
console.log(`Total Price:${totalPrice}/- BDT`);
console.log("Low Rated Product:", lowRating);
console.log("Filtered Clothing Names:", findClothLower);
