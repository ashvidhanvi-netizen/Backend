import { Link } from 'react-router-dom';

const Navbar = () => {

    return (

        <nav className="bg-yellow-600 text-white p-4 flex justify-between items-center">

        

            <div className="flex gap-6">

               
                <Link to="/" className="hover:text-yellow-300">
                    Employee Details
                </Link>

            </div>

        </nav>
    );
};

export default Navbar;