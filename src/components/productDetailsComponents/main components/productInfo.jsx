const ProductInfo = () => {
    return (
        <>
            <div className="lg:flex lg:flex-col lg:justify-center">
                <section className="mx-auto w-[335.2px] md:flex md:flex-row md:w-[728px] md:gap-[5.46rem] md:items-center lg:w-auto lg:text lg:gap-productDetailTitleGap">
                    <img src="assets\product-xx99-mark-two-headphones\mobile\image-product.jpg" alt="xx99-mark-two-headphones" className="rounded-lg my-5 md:hidden" />
                    <img src="assets\product-xx99-mark-two-headphones\tablet\image-product.jpg" alt="xx99-mark-two-headphones" className="rounded-lg my-[41px] hidden md:inline-block w-[300px] lg:hidden" />
                    <img src="assets\product-xx99-mark-two-headphones\desktop\image-product.jpg" className="rounded-lg my-productDetailImage hidden lg:inline-block w-[460px]" />
                    <div className="lg:w-productdetailTitle">
                        <h6 className="uppercase text-orange font-semibold tracking-[0.6rem] md:text-[0.8rem] md:tracking-[0.55rem] lg:tracking-[0.49rem] lg:text-footerCategory">new product</h6>
                        <h1 className=" font-manrope font-bold text-[1.80rem] uppercase tracking-[0.1rem] leading-9 my-5 lg:text-clampTitle lg:my-productDetailTitle lg:leading-productDetailTitle">XX99 Mark II Headphones</h1>
                        <p className="text-[0.97rem] lg:text-clampDesc"> The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your
                            premium headphone experience by reproducing the balanced depth and precision of studio&#x2011;quality sound.
                        </p>
                        <h3 className="font-bold text-[1.3rem] my-5 lg:my-productDetailTitle">$ 2,999</h3>
                        <div className="flex flex-row gap-5">
                            <span className=" bg-[#F1F1F1]">
                                <button className="w-[38.72px] h-[48px]">-</button>
                                <input type="tel" name="quantity" className="text-center bg-[#F1F1F1] outline-none w-[38.72px] font-bold" defaultValue={1} min={0} max={99} maxLength={2} />
                                <button className="w-[38.72px] h-[48px]">+</button>
                            </span>
                            <button className="uppercase bg-orange text-white font-bold tracking-widest px-8 text-[0.90rem]">add to card</button>
                        </div>
                    </div>
                </section>
                <section className="w-[335.2px] mx-auto md:w-[728px] lg:flex lg:flex-row lg:my-24 lg:gap-productDetailTitleGap lg:mx-auto lg:w-productdetail">
                    <div className="my-24 md:w-[728px] md:mt-14 md:mb-24 lg:w-productFeature lg:my-0">
                        <h1 className="uppercase font-bold text-[1.55rem] md:text-[2.2rem] lg:text-productDetailFeature">features</h1>
                        <p className="whitespace-pre-line mt-5 lg:text-productDetailDesc">Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. \n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
                    </div>
                    <div className="md:flex md:flex-row md:gap-48 lg:flex-col lg:gap-0">
                        <h1 className="uppercase font-bold text-[1.55rem] md:text-[2.2rem] lg:text-productDetailFeature">in the box</h1>
                        <ul className="mt-5 flex flex-col gap-2 md:mt-2 lg:mt-5 lg:text-productDetailDesc">
                            <li><span className="text-orange font-bold me-5">1x</span>Headphone Unit</li>
                            <li><span className="text-orange font-bold me-5">2x</span>Replacement Earcups</li>
                            <li><span className="text-orange font-bold me-5">1x</span>User Manual</li>
                            <li><span className="text-orange font-bold me-5">1x</span>3.5mm 5m Audio Cable</li>
                            <li><span className="text-orange font-bold me-5">1x</span>Travel Bag</li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProductInfo;