import { useContext } from "react";
import ProductGallery from "./main components/productGallery";
import ProductInfo from "./main components/productInfo";
import ProductSuggestion from "./main components/productSuggestion";
import { Context } from "../../context/context";
import { useParams } from "react-router-dom";

const Main = () => {

    const { data } = useContext(Context);
    const { id } = useParams();
    const itemView = data?.find(item => item.slug === id);


    return (
        <>

            <section className="px-5 mx-auto">
                {itemView ?
                    <div>
                        <ProductInfo item={itemView} status={itemView.new} />
                        <ProductGallery item={itemView} />
                        <ProductSuggestion item={itemView} data={data} />
                    </div>
                    :
                    <h1 className="mx-auto w-[335.2px] md:w-[728px] lg:w-productdetail lg:text-clampStatus font-semibold text-gray-400 uppercase mt-10 mb-10">Sorry, no product found in this category</h1>}
            </section>
        </>
    );
};

export default Main;
