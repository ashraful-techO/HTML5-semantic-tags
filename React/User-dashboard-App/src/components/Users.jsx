import {Link} from 'react-router-dom';

function Users(){
    const users = [
        {
            id: '1',
            name: 'Alice'
        },
        {
            id: '2',
            name: 'Bob'
        },
        {
            id: '3',
            name: 'Shanto'
        },
    ];
    return(
        <>
        <h2>👥 Users List</h2>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    <Link to={`/users/${user.id}/profile`}>{user.name}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Users;