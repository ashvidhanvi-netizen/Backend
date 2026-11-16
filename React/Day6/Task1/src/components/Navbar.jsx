import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
        <nav className = "bg-yellow-600 text-white p-4 flex justify-center items-center ">
            <Link to = "/">StudentProfile</Link>
            
        </nav>
        </div>
    );
};

export default Navbar;