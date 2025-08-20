import {useParams, NavLink, Outlet } from 'react-router-dom';


function UserLayout(){
   const {userId} = useParams();
    
    return(
        <>
        <h2>User Dashboard for ID: {userId}</h2>
        <nav>
            <NavLink to="profile">Profile</NavLink>
            &nbsp; &nbsp;<NavLink to="posts">Posts</NavLink>
        </nav>
        <hr />
        <Outlet/>
        </>
    )
}

export default UserLayout;