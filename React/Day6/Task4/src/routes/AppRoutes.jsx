import { Routes, Route } from 'react-router-dom';
import StudentList from '../pages/StudentList';

const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<StudentList />} />
            </Routes>
        </>
    );
};

export default AppRoutes;