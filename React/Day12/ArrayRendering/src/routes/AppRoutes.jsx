import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Task from '../components/Task';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Task/>} />
        </Routes>
    );
}

export default AppRoutes;