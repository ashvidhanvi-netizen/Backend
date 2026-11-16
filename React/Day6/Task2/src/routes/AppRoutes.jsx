import { Routes, Route } from 'react-router-dom';

import Employee from '../pages/Employee';

const AppRoutes = () => {

    return (

        <Routes>

            <Route path="/" element={<Employee />} />

        </Routes>
    );
};

export default AppRoutes;