
import {Outlet} from 'react-router-dom';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold'> Home page</h2>
            <Outlet/>
        </div>
    );
};

export default Home;