import { Routes, Route } from 'react-router-dom';
import Product from '../pages/Product';

const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Product />} />
            </Routes>
        </>
    );
};

export default AppRoutes;