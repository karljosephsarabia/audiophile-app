import Banner from '../components/common/banner';
import ProductListView from '../components/productListView';
import Category from '../components/common/category';
import Article from '../components/common/article';
import { Outlet } from 'react-router-dom';

const ProductList = () => {
    return (
        <>
            <Banner />
            <ProductListView />
            <Category 
                imageSrc="/assets/shared/desktop/image-category-thumbnail-headphones.png" 
                imageAlt="headphone"
                title="headphone"
            />
            <Article />
            <Outlet />
        </>
    );
};

export default ProductList;