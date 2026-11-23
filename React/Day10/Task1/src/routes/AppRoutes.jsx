import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Employee from '../components/Employee';
import Product from '../components/Product';
import Student from '../components/Student';

const AppRoutes = () => {

    return (

        <Routes>

            <Route path="/" element={<Employee />} />

            <Route path="/product" element={<Product />} />

            <Route path="/student" element={<Student />} />

        </Routes>

    );

};

export default AppRoutes;