

const ProductDetailsView = () => {
    return (
        <>
            <section className="container px-5">
                <div>
                    <button className=" text-gray-400 font-semibold mt-5">Go Back</button>
                    <div>
                        <img src="assets\product-xx99-mark-two-headphones\mobile\image-product.jpg" alt="xx99-mark-two-headphones" className="rounded-lg my-5" />
                        <div>
                            <h6 className="uppercase text-orange font-semibold tracking-[0.6rem]">new product</h6>
                            <h1 className=" font-manrope font-bold text-[1.80rem] uppercase tracking-[0.1rem] leading-9 my-5">XX99 Mark II Headphones</h1>
                            <p className="text-[0.97rem]"> The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your
                                premium headphone experience by reproducing the balanced depth and precision of
                                studio-quality sound.</p>
                            <h3 className="font-bold text-[1.3rem] my-5">$ 2,999</h3>
                        </div>
                        <div className="flex flex-row gap-5">
                            <span className=" bg-[#F1F1F1]">
                                <button className="w-[38.72px] h-[48px]">-</button>
                                <input type="tel" name="quantity" className="text-center bg-[#F1F1F1] outline-none w-[38.72px] font-bold" defaultValue={0} min={0} max={99} maxLength={2} />
                                <button className="w-[38.72px] h-[48px]">+</button>
                            </span>
                            <button className="uppercase bg-orange text-white font-bold tracking-widest px-8 text-[0.90rem]">add to card</button>
                        </div>
                    </div>
                    <div className=" my-24">
                        <h1 className="uppercase font-bold text-[1.55rem]">features</h1>
                        <p className="whitespace-pre-line mt-5">Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetailsView;