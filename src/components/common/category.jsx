const Category = () => {
    return (
        <>
            <section className='px-5 mt-20 mb-20 flex flex-col items-center md:flex-row md:justify-center md:gap-4 lg:gap-categoryGapClamp'>
                <div className="bg-[#F1F1F1] relative rounded-lg mb-14 w-[335px] md:w-[232px] lg:w-categoryWidthClamp">
                    <img src="assets\shared\desktop\image-category-thumbnail-headphones.png" alt="headphone" className="absolute w-36 top-[-1.90rem] left-1/2 -translate-x-1/2 lg:w-categoryImage" />
                    <div className="flex flex-col justify-center items-center pb-6 pt-24 lg:pt-categoryTop lg:pb-categoryBottom">
                        <h1 className="font-extrabold uppercase tracking-wider lg:text-clampStatus">headphones</h1>
                        <h6 className="flex flex-row items-center gap-2 text-[0.85rem] uppercase pt-3 font-bold text-gray-500 tracking-widest lg:text-buttonClamp">shop<img src="assets\shared\desktop\icon-arrow-right.svg" alt="arrow-right" className="w-2 h-3" /></h6>
                    </div>
                </div>
                <div className="bg-[#F1F1F1] relative rounded-lg mb-14 w-[335px] md:w-[232px] lg:w-categoryWidthClamp">
                    <img src="assets\shared\desktop\image-category-thumbnail-headphones.png" alt="headphone" className="absolute w-36 top-[-1.90rem] left-1/2 -translate-x-1/2 lg:w-categoryImage" />
                    <div className="flex flex-col justify-center items-center pb-6 pt-24 lg:pt-categoryTop lg:pb-categoryBottom">
                        <h1 className="font-extrabold uppercase tracking-wider lg:text-clampStatus">headphones</h1>
                        <h6 className="flex flex-row items-center gap-2 text-[0.85rem] uppercase pt-3 font-bold text-gray-500 tracking-widest lg:text-buttonClamp">shop<img src="assets\shared\desktop\icon-arrow-right.svg" alt="arrow-right" className="w-2 h-3" /></h6>
                    </div>
                </div>
                <div className="bg-[#F1F1F1] relative rounded-lg mb-14 w-[335px] md:w-[232px] lg:w-categoryWidthClamp">
                    <img src="assets\shared\desktop\image-category-thumbnail-headphones.png" alt="headphone" className="absolute w-36 top-[-1.90rem] left-1/2 -translate-x-1/2 lg:w-categoryImage" />
                    <div className="flex flex-col justify-center items-center pb-6 pt-24 lg:pt-categoryTop lg:pb-categoryBottom">
                        <h1 className="font-extrabold uppercase tracking-wider lg:text-clampStatus">headphones</h1>
                        <h6 className="flex flex-row items-center gap-2 text-[0.85rem] uppercase pt-3 font-bold text-gray-500 tracking-widest lg:text-buttonClamp">shop<img src="assets\shared\desktop\icon-arrow-right.svg" alt="arrow-right" className="w-2 h-3" /></h6>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Category;