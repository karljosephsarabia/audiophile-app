



const Banner = () => {

    return (
        <>
            <section className="min-h-[32vw] bg-black flex justify-center items-center md:min-h-[15.36rem] lg:min-h-[24vw]">
                <h1 className="uppercase font-bold text-white text-[6.4vw] tracking-[0.3rem] md:text-[2.75rem] lg:text-[4.3vw]">{location.pathname.replace('/', '')}</h1>
            </section>
        </>
    );
};

export default Banner;