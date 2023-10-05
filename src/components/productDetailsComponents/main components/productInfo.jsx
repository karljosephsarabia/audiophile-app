import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";

const ProductInfo = ({ item, status }) => {

    const {handleAddToCartButton} = useContext(CartContext);

    return (
        <>
            <div className="lg:flex lg:flex-col lg:justify-center">
                <section className="mx-auto w-[335.2px] md:flex md:flex-row md:w-[728px] md:gap-[5.46rem] md:items-center lg:w-auto lg:text lg:gap-productDetailTitleGap">
                    <img src={item.image.mobile} alt={item.slug} className="rounded-lg my-5 md:hidden" />
                    <img src={item.image.tablet} alt={item.slug} className="rounded-lg my-[41px] hidden md:inline-block w-[300px] lg:hidden" />
                    <img src={item.image.desktop} alt={item.slug} className="rounded-lg my-productDetailImage hidden lg:inline-block w-[460px]" />
                    <div className="lg:w-productdetailTitle">
                        {status && <h6 className="uppercase text-orange font-semibold tracking-[0.6rem] md:text-[0.8rem] md:tracking-[0.55rem] lg:tracking-[0.49rem] lg:text-footerCategory">new product</h6>}
                        <h1 className=" font-manrope font-bold text-[1.80rem] uppercase tracking-[0.1rem] leading-9 my-5 lg:text-clampTitle lg:my-productDetailTitle lg:leading-productDetailTitle">{item.name}</h1>
                        <p className="text-[0.97rem] lg:text-clampDesc">{item.description}</p>
                        <h3 className="font-bold text-[1.3rem] my-5 lg:my-productDetailTitle">$ {item.price.toLocaleString('en-US')}</h3>
                        <div className="flex flex-row gap-5">
                            <span className=" bg-[#F1F1F1]">
                                <button className="w-[38.72px] h-[48px]">-</button>
                                <input type="tel" name="quantity" className="text-center bg-[#F1F1F1] outline-none w-[38.72px] font-bold" defaultValue={1} min={0} max={99} maxLength={2} />
                                <button className="w-[38.72px] h-[48px]">+</button>
                            </span>
                            <button className="uppercase bg-orange text-white font-bold tracking-widest px-8 text-[0.90rem]"
                            onClick={() => handleAddToCartButton(item)}>add to card</button>
                        </div>
                    </div>
                </section>
                <section className="w-[335.2px] mx-auto md:w-[728px] lg:flex lg:flex-row lg:my-24 lg:gap-productDetailTitleGap lg:mx-auto lg:w-productdetail">
                    <div className="my-24 md:w-[728px] md:mt-14 md:mb-24 lg:w-productFeature lg:my-0">
                        <h1 className="uppercase font-bold text-[1.55rem] md:text-[2.2rem] lg:text-productDetailFeature">features</h1>
                        <p className="whitespace-pre-line mt-5 lg:text-productDetailDesc">{item.features}</p>
                    </div>
                    <div className="md:flex md:flex-row md:gap-48 lg:flex-col lg:gap-0">
                        <h1 className="uppercase font-bold text-[1.55rem] md:text-[2.2rem] lg:text-productDetailFeature">in the box</h1>
                        <ul className="mt-5 flex flex-col gap-2 md:mt-2 lg:mt-5 lg:text-productDetailDesc">
                            {item.includes.map((freeItem, index) =>
                                <li key={index}>
                                    <span className="text-orange font-bold me-5">{`${freeItem.quantity}x`}</span>{freeItem.item}
                                </li>
                            )}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProductInfo;