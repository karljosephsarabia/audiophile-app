import { useContext, useEffect, useState } from "react";
import ProductGallery from "./main components/productGallery";
import ProductInfo from "./main components/productInfo";
import ProductSuggestion from "./main components/productSuggestion";
import { Context } from "../../context/context";

const Main = () => {

    const { data, selectedItem } = useContext(Context);
    const [itemView, setItemView] = useState([]);

    useEffect(() => {
        const filterData = () => data.forEach(item => {
            if (item.slug === selectedItem) {
                setItemView(item);
            }
        });

        filterData();
    }, []);

    return (
        <>
            {itemView?.name && <section className="px-5 mx-auto">
                <ProductInfo item={itemView} status={itemView.new} />
                <ProductGallery item={itemView} />
                <ProductSuggestion item={itemView} />
            </section>}
        </>
    );
};

export default Main;
