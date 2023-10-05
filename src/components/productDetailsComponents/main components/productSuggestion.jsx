import { useNavigate } from 'react-router-dom';

const ProductSuggestion = ({ item, data }) => {
    const navigate = useNavigate();

    const handeOnClick = (slug) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        const findItem = data.find(item => item.slug === slug);

        navigate(`/${findItem.category}/${slug}`);

    };
    return (
        <>
            <section className="w-[335.2px] mx-auto md:w-[728px] lg:w-auto">
                <h1 className="uppercase text-center font-bold text-[1.55rem] md:text-[2.2rem] lg:text-productDetailFeature">you may also like</h1>
                <div className="flex flex-col gap-11 mt-11 mb-36 md:flex-row md:gap-4 lg:gap-categoryGapClamp lg:justify-center">
                    {item.others.map((other, index) =>
                        <div className="flex flex-col items-center lg:w-categoryWidthClamp" key={index}>
                            <img src={other.image.mobile} alt={other.slug} className="rounded-lg md:hidden" />
                            <img src={other.image.tablet} alt={other.slug} className="rounded-lg hidden md:block lg:hidden" />
                            <img src={other.image.desktop} alt={other.slug} className="rounded-lg hidden lg:block" />
                            <h3 className="uppercase text-center font-bold text-[1.5rem] my-4 lg:text-productDetailSuggestion">{other.name}</h3>
                            <button className="uppercase bg-orange text-white font-bold tracking-widest text-[0.75rem] py-3 w-[145px] lg:text-productDetailSuggestionBtn lg:w-productdetailSuggestionBtn" onClick={() => handeOnClick(other.slug)}>see product</button>
                        </div>)}
                </div>
            </section>
        </>
    );
};

export default ProductSuggestion;