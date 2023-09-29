import Header from '../components/common/header';
import ProductDetailsView from '../components/productDetailsView';
import Category from '../components/common/category';
import Article from '../components/common/article';
import Footer from '../components/common/footer';


const ProductDetails = () => {
    return (
        <>
            <Header />
            <ProductDetailsView />
            <Category />
            <Article />
            <Footer />
        </>
    );
};

export default ProductDetails;