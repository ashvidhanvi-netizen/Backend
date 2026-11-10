import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Profile from "./pages/Profile";

const App = () => {
    return (
        <>
            <h1 className="text-3xl font-bold text-center my-5">
                Student Portal
            </h1>

            <Navbar />

            <Routes>

                <Route path="/" element={<Dashboard />} />

                <Route path="/courses" element={<Courses />} />

                <Route path="/assignments" element={<Assignments />} />

                <Route path="/profile" element={<Profile />} />

            </Routes>
        </>
    )
}

export default App;