// let promises = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Success!");
//     },1000)
// });

// promises
//     .then((result)=> console.log("Result: ",result));

// const promise = new Promise((resolve, reject)=>{
//     let success = false;

//     setTimeout(()=>{
//         if(success){
//             resolve("Data fetch successful");
//         } else{
//             reject("Something went worong!");
//         }
//     },1000);
// });

// promise
// .then((result)=> console.log(result))
// .catch((error)=> console.log(error))
// .finally(()=> console.log("final"));

//async await

// const fetchData = async () => {
//     try {
//         const result = await promise; //wait untill promise
//         console.log(result);

//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchData();

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, name: "shanto", email: "jhon.doe@gmail.com" });
  }, 2000);
});

getUser.then((user) => console.log("User using then: ", user));

const showUser = async () => {
  try {
    const result = await getUser;
    console.log("Using async/await: ", result);
  } catch (error) {
    console.log(error);
  }
};

showUser();
