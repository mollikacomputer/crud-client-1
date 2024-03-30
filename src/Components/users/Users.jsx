// import {useLoaderData} from 'react-router-dom';
import {Link, useLoaderData} from 'react-router-dom';

const Users = () => {
    // const loadedUser = useLoaderData();
    const loaderUsers = useLoaderData();
    const handleDeleteUser = _id =>{
        console.log("Delete id:", _id);
        fetch(`http://localhost:5000/users/${_id}`, {method:"DELETE"})
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount >0){
                alert("One User Delete Successfully");
            }
        })
    };

    return (
        <div className='container'>
            Total User:{loaderUsers.length}
            <h2 className='text-5xl text-rose-700'> User page</h2>
            {/* {
                loaderUsers.map( user => <p key={user._id} > {user.name}: {user.email} </p>)
            }; */}
            {
                loaderUsers.map(user => <p key={user._id} > {user.name} : {user.email} and {user._id}
                <Link to={`/userupdate/${user._id}`}> 
                <btn className="btn" >Edit </btn> 
                </Link>
                onClick={()=>handleDeleteUser(user._id)} X
                </p>)
            }
        </div>
    );
};

export default Users;