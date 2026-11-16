import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

const App = () => {

    return (
        <>
            <Navbar />

            <Header />

            <AppRoutes />

            <Footer />
        </>
    );
};

export default App;