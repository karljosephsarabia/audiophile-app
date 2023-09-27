import Header from '../components/common/header';
import Banner from '../components/common/banner';
import ProductListView from '../components/productListView';
import Category from '../components/common/category';
import Article from '../components/common/article';
import Footer from '../components/common/footer';

const ProductList = () => {
    return (
        <>
            <Header />
            <Banner />
            <ProductListView />
            <Category />
            <Article />
            <Footer />
        </>
    );
};

export default ProductList;