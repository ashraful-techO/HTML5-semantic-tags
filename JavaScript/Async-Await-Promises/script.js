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

// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ id: 1, name: "shanto", email: "jhon.doe@gmail.com" });
//   }, 2000);
// });

// getUser.then((user) => console.log("User using then: ", user));

// const showUser = async () => {
//   try {
//     const result = await getUser;
//     console.log("Using async/await: ", result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// showUser();

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Alice", email: "alice@gmail.com" });
//     }, 1500);
//   });
// }

// function getPosts() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { id: 101, title: "Post One" },
//         { id: 102, title: "Post Two" },
//       ]);
//     }, 1000);
//   });
// }


// async function loadData() {
//     try {
//         const [user, posts] = await Promise.all([getUser(),getPosts()]);

//         console.log("User: ",user);
//         console.log("Posts: ",posts);
//     } catch (error) {
//         console.log(error);
//     }
// }

// loadData();


// async function fetchUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!response.ok) {
//             throw new Error("failed to fetch user");
//         }

//         const users = await response.json();

//         users.forEach(user => {
//             console.log(`${user.name} - ${user.email}`);
//         });
//     } catch(error){
//         console.log("Error:", error.message);
//     }
// }

// async function fetchPosts() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//         if(!response.ok){
//             throw new Error("failed to fetch posts");
//         }

//         const posts = await response.json();

//         posts.slice(0, 5).forEach(posts=>{
//             console.log(`${posts.title} --- ${posts.body}---`);
//         })
        
//     } catch (error) {
//         console.log("Error: ",error.message);
//     }
// }

// fetchPosts();

async function fetchUserPosts() {
    try {
        
        const[usersRes,postsRes] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts")
        ]);

        if(!usersRes.ok || !postsRes.ok){
            throw new Error("Failed to fetch users or posts");
        }

        const users = await usersRes.json();
        const posts = await postsRes.json();

        const userMap = {};

        users.forEach(user=>{
            userMap[user.id] = user.name;
        });

        posts.slice(0,5).forEach(post=>{
            const author = userMap[post.userId] || "Unknown";
            console.log(`${post.title} --- ${author}`);
        })

    } catch (error) {
        console.error("Error:", error.message);
    }
}

fetchUserPosts();


// async function dataFetch() {

//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         if(!response.ok){
//             throw new Error("data fetch incomplete");
//         }

//         const users = await response.json();

//         users.filter(user => 
//             user.address.city === "South Christy"
//         )
//         .slice(0,5).forEach(user => {
//             console.log(`${user.name} lives in ${user.address.city}`);
//         });

//     } catch (error) {
//         console.log("Error: ",error.message);
//     }
    
// }

// dataFetch();