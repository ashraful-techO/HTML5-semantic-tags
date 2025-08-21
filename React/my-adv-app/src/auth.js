export async function loginUser(credentials){
    return new Promise((resolve)=>
    setTimeout(()=> resolve({token: "fake-jwt-token-123"}),500)
    );
}

export function saveToken(token){
    localStorage.setItem("token", token);
}

export function getToken(){
    return localStorage.getItem("token");
}
