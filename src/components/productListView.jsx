import { useContext } from "react";
import { Context } from "../context/context";
import { useLocation, useNavigate } from 'react-router-dom';

const ProductListView = () => {
    const { data } = useContext(Context);
    const location = useLocation();
    const newLocation = location.pathname.replace('/', '');
    const navigate = useNavigate();

    const handleOnSelect = (category, slug) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

        navigate(`${slug}`);
    };



    return (
        <>
            <section className="pt-[14.95vw] px-5 container flex flex-col items-center justify-center mx-auto md:pt-[114.82px] lg:pt-clampPaddingTop">
                {data?.filter(item => item.category === newLocation).map((newData, index) => index % 2 ?
                    <div className="flex flex-col items-center rounded-lg text-center w-[21rem] mb-28 md:w-auto lg:flex-row-reverse lg:text-start lg:gap-[10vw]" key={index}>
                        <img src={newData.categoryImage.mobile} alt={newData.slug} className="rounded-lg md:hidden" />
                        <img src={newData.categoryImage.table} alt={newData.slug} className="rounded-lg hidden md:inline-block lg:hidden" />
                        <img src={newData.categoryImage.desktop} alt={newData.slug} className="rounded-lg hidden lg:inline-block w-[30.1rem]" />
                        <div className="pt-[2rem] md:mx-[3rem] md:pt-[4.11rem] lg:pt-0 lg:mx-0 lg:w-widthClamp">
                            {newData.new && <h6 className="uppercase text-[#D87D4A] tracking-[0.6rem] font-semibold pb-[1.25rem] md:tracking-[0.7rem] lg:text-clampStatus lg:tracking-[0.625vw]">new product</h6>}
                            <h1 className="uppercase font-bold text-[2.2rem] leading-[2.75rem] md:text-[2.7rem] md:leading-[3.3rem] md:tracking-widest lg:text-clampTitle lg:leading-lineHeightClamp">{newData.name}</h1>
                            <p className="text-[0.96rem] py-6 md:text-[1.1rem] lg:text-clampDesc lg:py-paddingXClamp">{newData.description}</p>
                            <button className="uppercase bg-[#D87D4A] text-white px-7 py-3 text-[0.96rem] md:text-[1.1rem] md:px-8 lg:text-buttonClamp lg:px-paddingXClamp hover:bg-[#FBAF85]" onClick={() => handleOnSelect(newData.category, newData.slug)}>see product</button>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col items-center rounded-lg text-center w-[21rem] mb-28 md:w-auto lg:flex-row lg:text-start lg:gap-[10vw]" key={index}>
                        <img src={newData.categoryImage.mobile} alt={newData.slug} className="rounded-lg md:hidden" />
                        <img src={newData.categoryImage.table} alt={newData.slug} className="rounded-lg hidden md:inline-block lg:hidden" />
                        <img src={newData.categoryImage.desktop} alt={newData.slug} className="rounded-lg hidden lg:inline-block w-[30.1rem]" />
                        <div className="pt-[2rem] md:mx-[3rem] md:pt-[4.11rem] lg:pt-0 lg:mx-0 lg:w-widthClamp">
                            {newData.new && <h6 className="uppercase text-[#D87D4A] tracking-[0.6rem] font-semibold pb-[1.25rem] md:tracking-[0.7rem] lg:text-clampStatus lg:tracking-[0.625vw]">new product</h6>}
                            <h1 className="uppercase font-bold text-[2.2rem] leading-[2.75rem] md:text-[2.7rem] md:leading-[3.3rem] md:tracking-widest lg:text-clampTitle lg:leading-lineHeightClamp">{newData.name}</h1>
                            <p className="text-[0.96rem] py-6 md:text-[1.1rem] lg:text-clampDesc lg:py-paddingXClamp">{newData.description}</p>
                            <button className="uppercase bg-[#D87D4A] text-white px-7 py-3 text-[0.96rem] md:text-[1.1rem] md:px-8 lg:text-buttonClamp lg:px-paddingXClamp hover:bg-[#FBAF85]" onClick={() => handleOnSelect(newData.category, newData.slug)}>see product</button>
                        </div>
                    </div>

                )}
            </section>
        </>
    );
};

export default ProductListView;