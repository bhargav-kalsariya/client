import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import ProductDetail from './pages/productDetail/ProductDetail';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from './redux/categorySlice';
import Collection from './pages/collection/Collection';


function App() {

    const disPatch = useDispatch();
    useEffect(() => {
        disPatch(fetchCategories());
    }, [disPatch])

    return (
        <div className="App">

            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category/:categoryId?' element={<Collection />} />
                    <Route path='/products/:productId' element={<ProductDetail />} />
                </Routes>
                <Footer />
            </main>

        </div>
    );
}

export default App;
