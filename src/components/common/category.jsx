const Category = (props) => {
    return (
        <>
            <section className='px-5 mt-20 mb-20'>
                <div className="bg-[#F1F1F1] relative rounded-lg mb-14">
                    <img src={props.imageSrc} alt={props.imageAlt} className="absolute w-36 top-[-1.90rem] left-1/2 -translate-x-1/2" />
                    <div className="flex flex-col justify-center items-center pb-6 pt-24">
                        <h1 className="font-extrabold uppercase tracking-wider">{props.title}</h1>
                        <h6 className="flex flex-row items-center gap-2 text-[0.85rem] uppercase pt-3 font-bold text-gray-500 tracking-widest">shop<img src="assets\shared\desktop\icon-arrow-right.svg" alt="arrow-right" className="w-2 h-3" /></h6>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Category;