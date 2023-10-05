import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import ProductList from './pages/productList';
import ProductDetails from './pages/productDetails';
import { CartProvider } from './context/cartContext';
import PageNotFound from './pages/pageNotFound';
import { useContext } from 'react';
import { Context } from './context/context';
import Header from './components/common/header';
import Footer from './components/common/footer';

function App() {

  const { menuNav } = useContext(Context);

  return (
    <>

      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            {menuNav.map((menu, index) => index > 0 && index < 4 &&
              <Route exact path={menu.path} key={index} >
                <Route index element={<ProductList />} />
                <Route path=':id' element={<ProductDetails />} />
              </Route>
            )}
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
