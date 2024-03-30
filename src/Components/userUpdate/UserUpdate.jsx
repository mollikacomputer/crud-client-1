import {useLoaderData} from 'react-router-dom';
const UserUpdate = () => {
    const loadedUser = useLoaderData();

    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updateUser = {name, email};
        const id = loadedUser._id;
        console.log(updateUser);

        fetch(`http://localhost:5000/users/${id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(updateUser)
        })
        .then(req => req.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert("One DAta successfully updated")
            }
        })

    }
    return (
        <div>
           
            {/* <h2> User Loader information of {loadedUser.name}, {loadedUser.email}</h2> */}
            <form onSubmit={handleUpdateUser} >
                <label className="form-control w-full max-w-xs">
                    <input className="input input-bordered w-full max-w-xs my-2 mt-5" type="text" name="name" defaultValue={loadedUser.name}  />
                    <input className="input input-bordered w-full max-w-xs my-2" type="email" name="email" defaultValue={loadedUser.email}  />
                    <input className="btn btn-active btn-neutral mt-5" type="submit" value="submit" />        
                </label>
                
            </form>
        </div>
    );
};

export default UserUpdate;