import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

const App = () => {

    return (

        <div>

            <nav className="bg-gray-800 text-white p-4 flex justify-center gap-8">

                <Link to="/">Employee</Link>

                <Link to="/product">Product</Link>

                <Link to="/student">Student</Link>

            </nav>

            <AppRoutes />

        </div>

    );

};

export default App;