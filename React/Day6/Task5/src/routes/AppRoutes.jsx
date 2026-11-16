import { Routes, Route } from 'react-router-dom';
import CourseDetails from '../pages/CourseDetails';

const AppRoutes = () => {

    return (
        <>
            <Routes>

                <Route path="/" element={<CourseDetails />} />

            </Routes>
        </>
    );
};

export default AppRoutes;