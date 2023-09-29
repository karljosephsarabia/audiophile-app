
const ProductImageAndCartButton = () => {
    return (
        <>
            <div className="mx-auto w-[335.2px] md:flex md:flex-row md:w-[728px] md:mx-auto md:gap-[5.46rem] md:items-center lg:w-productdetail lg:text lg:gap-[7.5rem]">
                <img src="assets\product-xx99-mark-two-headphones\mobile\image-product.jpg" alt="xx99-mark-two-headphones" className="rounded-lg my-5 md:hidden" />
                <img src="assets\product-xx99-mark-two-headphones\tablet\image-product.jpg" alt="xx99-mark-two-headphones" className="rounded-lg my-[41px] hidden md:inline-block w-[300px] lg:hidden" />
                <img src="assets\product-xx99-mark-two-headphones\desktop\image-product.jpg" className="rounded-lg my-productDetailImage hidden lg:inline-block w-[460px]" />
                <div>
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
            </div>
        </>
    );
};

export default ProductImageAndCartButton;
