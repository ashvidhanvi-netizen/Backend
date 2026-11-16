import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <nav className="bg-blue-800 text-white p-4">

                <div className="flex justify-between items-center">

                    <h1 className="text-xl font-bold">
                        SLA
                    </h1>

                    <Link to="/" className="bg-blue-600 p-2 rounded-lg">
                        Courses
                    </Link>

                </div>

            </nav>
        </>
    );
};

export default Navbar;