// import {useLoaderData} from 'react-router-dom';
import {useLoaderData} from 'react-router-dom';

const Users = () => {
    // const loadedUser = useLoaderData();
    const loaderUsers = useLoaderData();
    return (
        <div className='container'>
            Total User:{loaderUsers.length}
            <h2 className='text-5xl text-rose-700'> User page</h2>
            {
                loaderUsers.map( user => <p key={user._id} > {user.name} : {user.email} </p>)
            }
            {/* {
               loadedUser.map( user => <p key={user._id}> {user.name} : {user.email} {user._id}</p>)
            } */}
        </div>
    );
};

export default Users;