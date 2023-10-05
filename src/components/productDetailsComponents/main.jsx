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
            {itemView?.name && <section className="px-5 mx-auto">
                <ProductInfo item={itemView} status={itemView.new} />
                <ProductGallery item={itemView} />
                <ProductSuggestion item={itemView} data={data}/>
            </section>}
        </>
    );
};

export default Main;
