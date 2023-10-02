
const ProductGallery = () => {
    return (
        <>
            <section className="my-24 flex flex-col gap-5 w-[335.2px] mx-auto md:w-[728px] md:flex-row lg:w-auto lg:justify-center">
                <div className="flex flex-col gap-5">
                    <img src="assets\product-xx99-mark-two-headphones\mobile\image-gallery-1.jpg" alt="xx99-mark-two-headphones" className="rounded-lg md:hidden" />
                    <img src="assets\product-xx99-mark-two-headphones\mobile\image-gallery-2.jpg" alt="xx99-mark-two-headphones" className="rounded-lg md:hidden" />

                    <img src="assets\product-xx99-mark-two-headphones\tablet\image-gallery-1.jpg" alt="xx99-mark-two-headphones" className="rounded-lg hidden md:block lg:hidden" />
                    <img src="assets\product-xx99-mark-two-headphones\tablet\image-gallery-2.jpg" alt="xx99-mark-two-headphones" className="rounded-lg hidden md:block lg:hidden" />

                    <img src="assets\product-xx99-mark-two-headphones\desktop\image-gallery-1.jpg" alt="xx99-mark-two-headphones" className="rounded-lg hidden lg:block lg:h-full" />
                    <img src="assets\product-xx99-mark-two-headphones\desktop\image-gallery-2.jpg" alt="xx99-mark-two-headphones" className="rounded-lg hidden lg:block lg:h-full" />
                </div>
                <img src="assets\product-xx99-mark-two-headphones\mobile\image-gallery-3.jpg" alt="xx99-mark-two-headphones" className="rounded-lg md:hidden" />
                <img src="assets\product-xx99-mark-two-headphones\tablet\image-gallery-3.jpg" alt="xx99-mark-two-headphones" className="rounded-lg hidden md:block md:w-[412px] lg:hidden" />
                <img src="assets\product-xx99-mark-two-headphones\desktop\image-gallery-3.jpg" alt="xx99-mark-two-headphones" className="rounded-lg hidden lg:block lg:w-productDetailBigImage" />
            </section>
        </>
    );
};

export default ProductGallery;