
const AddUser = () => {
    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name, email}
        console.log(user);
        fetch('http://localhost:5000/users',{
            method: "POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user)
        }
        )
        .then(res => res.json())
        .then(data => {
            console.log('sent to server from client side', data);
            if(data.insertedId){
                alert("New user successfully added to server")
            }
        })
    }
    return (
        <div className="min-w-full">
            <h2> Add User Page</h2>
            <div className="cardcard w-96 bg-base-100 shadow-xl">

            <form onSubmit={handleAddUser} className="card-body">
                <label className="form-control w-full max-w-xs">
                    <input className="input input-bordered w-full max-w-xs my-5"  type="text" name="name" placeholder="name" />
                    <input className="input input-bordered w-full max-w-xs"  type="text" name="email" placeholder="email" id="" />
                    <input className="btn btn-active btn-neutral mt-5" type="submit" value="Add User" />
                </label>
            </form>

            </div>
        </div>
    );
};

export default AddUser;