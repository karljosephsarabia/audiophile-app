import ProductGallery from "./main components/productGallery";
import ProductInfo from "./main components/productInfo";
import ProductSuggestion from "./main components/productSuggestion";

const Main = () => {
    return (
        <>
            <section className="px-5 mx-auto">
                <ProductInfo />
                <ProductGallery />
                <ProductSuggestion />
            </section>
        </>
    );
};

export default Main;
