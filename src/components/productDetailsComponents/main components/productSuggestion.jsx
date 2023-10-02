const ProductSuggestion = () => {
    return (
        <>
            <section className="w-[335.2px] mx-auto md:w-[728px] lg:w-auto">
                <h1 className="uppercase text-center font-bold text-[1.55rem] md:text-[2.2rem] lg:text-productDetailFeature">you may also like</h1>
                <div className="flex flex-col gap-11 mt-11 mb-36 md:flex-row md:gap-4 lg:gap-categoryGapClamp lg:justify-center">
                    <div className="flex flex-col items-center lg:w-categoryWidthClamp">
                        <img src="assets\shared\mobile\image-xx99-mark-one-headphones.jpg" alt="xx99-mark-one-headphones" className="rounded-lg md:hidden" />
                        <img src="assets\shared\tablet\image-xx99-mark-one-headphones.jpg" alt="xx99-mark-one-headphones" className="rounded-lg hidden md:block lg:hidden" />
                        <img src="assets\shared\desktop\image-xx99-mark-one-headphones.jpg" alt="xx99-mark-one-headphones" className="rounded-lg hidden lg:block" />
                        <h3 className="uppercase text-center font-bold text-[1.5rem] my-4 lg:text-productDetailSuggestion">xx99 mark i</h3>
                        <button className="uppercase bg-orange text-white font-bold tracking-widest text-[0.75rem] py-3 w-[145px] lg:text-productDetailSuggestionBtn lg:w-productdetailSuggestionBtn">see product</button>
                    </div>
                    <div className="flex flex-col items-center lg:w-categoryWidthClamp">
                        <img src="assets\shared\mobile\image-xx99-mark-one-headphones.jpg" alt="xx99-mark-one-headphones" className="rounded-lg md:hidden" />
                        <img src="assets\shared\tablet\image-xx99-mark-one-headphones.jpg" alt="xx99-mark-one-headphones" className="rounded-lg hidden md:block lg:hidden" />
                        <img src="assets\shared\desktop\image-xx99-mark-one-headphones.jpg" alt="xx99-mark-one-headphones" className="rounded-lg hidden lg:block" />
                        <h3 className="uppercase text-center font-bold text-[1.5rem] my-4 lg:text-productDetailSuggestion">xx99 mark i</h3>
                        <button className="uppercase bg-orange text-white font-bold tracking-widest text-[0.75rem] py-3 w-[145px] lg:text-productDetailSuggestionBtn lg:w-productdetailSuggestionBtn">see product</button>
                    </div>
                    <div className="flex flex-col items-center lg:w-categoryWidthClamp">
                        <img src="assets\shared\mobile\image-xx99-mark-one-headphones.jpg" alt="xx99-mark-one-headphones" className="rounded-lg md:hidden" />
                        <img src="assets\shared\tablet\image-xx99-mark-one-headphones.jpg" alt="xx99-mark-one-headphones" className="rounded-lg hidden md:block lg:hidden" />
                        <img src="assets\shared\desktop\image-xx99-mark-one-headphones.jpg" alt="xx99-mark-one-headphones" className="rounded-lg hidden lg:block" />
                        <h3 className="uppercase text-center font-bold text-[1.5rem] my-4 lg:text-productDetailSuggestion">xx99 mark i</h3>
                        <button className="uppercase bg-orange text-white font-bold tracking-widest text-[0.75rem] py-3 w-[145px] lg:text-productDetailSuggestionBtn lg:w-productdetailSuggestionBtn">see product</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductSuggestion;