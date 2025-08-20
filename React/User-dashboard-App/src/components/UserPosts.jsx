import {useNavigate} from 'react-router-dom';

function UserPosts(){
    const navigate = useNavigate();

    return(
        <>
        <h3>📝 User Posts</h3>
        <button onClick={()=> navigate(-1)}>Go Back</button>
        </>
    )
}

export default UserPosts;