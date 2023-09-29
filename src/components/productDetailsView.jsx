import BackButton from "./productDetailsComponents/back-button";
import ProductImageAndCartButton from "./productDetailsComponents/product-image-and-cart-button";

const ProductDetailsView = () => {
    return (
        <>
            <section className="container px-5 mx-auto">
                <BackButton />
                <ProductImageAndCartButton />
                <div className=" my-24 w-[335.2px] mx-auto md:w-[728px]">
                    <h1 className="uppercase font-bold text-[1.55rem]">features</h1>
                    <p className="whitespace-pre-line mt-5">Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
                </div>
            </section>
        </>
    );
};

export default ProductDetailsView;