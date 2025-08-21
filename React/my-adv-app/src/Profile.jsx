function Profile(){
    if(Math.random()> 0.8) throw new Error("Random crash!");

    return(
    <div>
        <h2>Welcome to your Profile</h2>
        <p>Only visible if logged in & lazy loaded!</p>
    </div>
);
}

export default Profile;

