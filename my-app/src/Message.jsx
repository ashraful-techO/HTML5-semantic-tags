function Message({isLoggedIn}){
    return isLoggedIn ? <p>Welcome!</p> : <p>Please Log in</p>;
}

export default Message;