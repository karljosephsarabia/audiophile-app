import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import ProductList from './pages/productList';
import ProductDetails from './pages/productDetails';
import PageNotFound from './pages/pageNotFound'
import { CartProvider } from './context/cartContext';

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/ProductList' element={<ProductList />} />
            <Route path='/ProductDetails' element={<ProductDetails />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
