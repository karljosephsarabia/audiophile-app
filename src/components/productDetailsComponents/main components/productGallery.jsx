
const ProductGallery = ({ item }) => {

    return (
        <>
            <section className="my-24 flex flex-col gap-5 w-[335.2px] mx-auto md:w-[728px] md:flex-row lg:w-auto lg:justify-center">
                <div className="flex flex-col gap-5">
                    <img src={item.gallery.first.mobile} alt={item.slug} className="rounded-lg md:hidden" />
                    <img src={item.gallery.second.mobile} alt={item.slug} className="rounded-lg md:hidden" />

                    <img src={item.gallery.first.tablet} alt={item.slug} className="rounded-lg hidden md:block lg:hidden" />
                    <img src={item.gallery.second.tablet} alt={item.slug} className="rounded-lg hidden md:block lg:hidden" />

                    <img src={item.gallery.first.desktop} alt={item.slug} className="rounded-lg hidden lg:block lg:h-full" />
                    <img src={item.gallery.second.tablet} alt={item.slug} className="rounded-lg hidden lg:block lg:h-full" />
                </div>
                <img src={item.gallery.third.mobile} alt={item.slug} className="rounded-lg md:hidden" />
                <img src={item.gallery.third.tablet} alt={item.slug} className="rounded-lg hidden md:block md:w-[412px] lg:hidden" />
                <img src={item.gallery.third.desktop} alt={item.slug} className="rounded-lg hidden lg:block lg:w-productDetailBigImage" />
            </section>
        </>
    );
};

export default ProductGallery;