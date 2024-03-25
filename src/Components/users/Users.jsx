import {useLoaderData} from 'react-router-dom';
const Users = () => {
    const loadedUser = useLoaderData();

    return (
        <div>
            Total User:{loadedUser.length}
            <h2> User page</h2>
            {
               loadedUser.map( user => <p key={user._id}> {user.name} : {user.email} {user._id}</p>)
            }
        </div>
    );
};

export default Users;