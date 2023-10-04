import { useRoutes } from 'react-router-dom';
import Homepage from './pages/homepage';
import ProductList from './pages/productList';
import ProductDetails from './pages/productDetails';
import PageNotFound from './pages/pageNotFound';
import { CartProvider } from './context/cartContext';
import PageNotFound from './pages/pageNotFound';
import { useContext } from 'react';
import { Context } from './context/context';
import Header from './components/common/header';
import Footer from './components/common/footer';

function App() {

  const { menuNav } = useContext(Context);

  const routes = useRoutes(menuNav.map((menu, index) => {
    if (index < 1) {
      return {
        path: menu.path,
        element: <Homepage />
      };
    }

    if (index > 0 && index < 4) {
      return {
        path: menu.path,
        element: <ProductList />
      };
    }

    if (index > 3) {
      return {
        path: menu.path,
        element: <PageNotFound />
      };
    }
  }));


  return (
    <>

      <CartProvider>
        <Header />
        {routes}
        {/* <Route path='/ProductDetails' element={<ProductDetails />} /> */}
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
