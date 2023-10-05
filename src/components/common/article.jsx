const Article = () => {
    return (
        <>
            <article className="flex justify-center">
                <div className="px-5 w-[335px] md:w-[768px] flex flex-col items-center lg:flex-row-reverse lg:w-auto lg:gap-articleColGap">
                    <img src="\assets\shared\mobile\image-best-gear.jpg" alt="best-gear" className="rounded-lg md:hidden" />
                    <img src="\assets\shared\tablet\image-best-gear.jpg" alt="best-gear" className="rounded-lg hidden md:inline-block lg:hidden" />
                    <img src="\assets\shared\desktop\image-best-gear.jpg" alt="best-gear" className="rounded-lg hidden lg:inline-block w-[470px]" />
                    <div className="text-center flex flex-col items-center lg:justify-center md:w-[36rem] lg:text-start lg:w-articleWidth">
                        <h1 className="uppercase font-bold text-[2rem] tracking-wide leading-10 py-10 md:text-[2.8rem] md:leading-[3.3rem] md:pt-14 lg:text-articleTitle lg:leading-articleTitle lg:tracking-articleTitle">Bringing you the <span className="text-[#D87D4A]">best</span> audio gear</h1>
                        <p className="md:w-[600px] lg:w-auto lg:text-articleDesc">Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                            earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                            rooms available for you to browse and experience a wide range of our products. Stop by our store
                            to meet some of the fantastic people who make Audiophile the best place to buy your portable
                            audio equipment.</p>
                    </div>

                </div>
            </article>
        </>
    );
};

export default Article;