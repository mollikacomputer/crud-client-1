// import {useLoaderData} from 'react-router-dom';
import {Link, useLoaderData} from 'react-router-dom';

const Users = () => {
    // const loadedUser = useLoaderData();
    const loaderUsers = useLoaderData();

    // const handleDeleteUser = _id =>{
    //     console.log("Delete 1st:", _id);
    //     fetch(`http://localhost:5000/users/${_id}`,{
    //         method:"DELETE",
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data._id);
    //         if(data.deletedCount > 0){
    //             alert('Delete successfully id', data._id)
    //         }
    //     })
    // }
    // const handleDeleteUser = _id =>{
    //     console.log('delete first comment', _id);
    //     fetch(`http://localhost:5000/users/${_id}`,{method:"DELETE"})
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log("2nd comment", data);
    //         if(data.deletedCount > 0){
    //             alert("One Data Successfully Delete")
    //         }
    //     });
    // }
    return (
        <div className='container'>
            Total User:{loaderUsers.length}
            <h2 className='text-5xl text-rose-700'> User page</h2>
            {
                loaderUsers.map( user => <p key={user._id} > {user.name} : {user.email} and {user._id}
                
                <Link to={'/userupdate'}> 
                <btn className="btn" >Edit </btn> 
                </Link>
                <Link to={`/users`}
                // onClick={()=>handleDeleteUser(user._id)}
                onClick={()=>handleDeleteUser(user._id)}
                > X </Link>
                </p>)
            }
            {/* {
               loadedUser.map( user => <p key={user._id}> {user.name} : {user.email} {user._id}</p>)
            } */}
        </div>
    );
};

export default Users;