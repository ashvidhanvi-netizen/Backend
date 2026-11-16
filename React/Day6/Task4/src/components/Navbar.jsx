import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <nav className="bg-yellow-600 text-white p-4">
                <div className="flex justify-between items-center">

                    <h1 className="text-xl font-bold">
                        Student Portal
                    </h1>

                    <Link to="/" className="bg-yellow-800 p-2 rounded-lg">
                        Student List
                    </Link>

                </div>
            </nav>
        </>
    );
};

export default Navbar;