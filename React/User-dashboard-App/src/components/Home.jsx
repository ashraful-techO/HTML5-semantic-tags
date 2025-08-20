import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
        <h2>🏠 Home Page</h2>
        <Link to="/users">Go to Users</Link>
        </>
    )
}

export default Home;