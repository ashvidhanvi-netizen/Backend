import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-800 text-center my-5 p-4">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-yellow-400 mx-5 font-bold" : "text-white mx-5"
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                        isActive ? "text-yellow-400 mx-5 font-bold" : "text-white mx-5"
                    }
                >
                    Courses
                </NavLink>

                <NavLink
                    to="/assignments"
                    className={({ isActive }) =>
                        isActive ? "text-yellow-400 mx-5 font-bold" : "text-white mx-5"
                    }
                >
                    Assignments
                </NavLink>

                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? "text-yellow-400 mx-5 font-bold" : "text-white mx-5"
                    }
                >
                    Profile
                </NavLink>

            </nav>
        </>
    )
}

export default Navbar;