import Article from "../components/common/article";
import Category from "../components/common/category";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import "../styles/homepage.css";

const Homepage = () => {
    return (
        <>  
            <Header />
            <div className="relative">
                <img className="relative desktop" src="/assets/home/desktop/image-hero.jpg"/>
                <img className="relative mobile" src="/assets/home/mobile/image-header.jpg"/>
                <img className="relative tablet" src="/assets/home/tablet/image-header.jpg"/>
                <div className="absolute hero-content-align">
                    <h1 className="font-['manrope'] tracking-[1rem] text-[#f1f1f1]">NEW PRODUCT</h1>
                    <h2 className="font-['manrope'] text-[#fafafa] text-[3rem] tracking-[.50rem] font-bold">XX99 MARK II HEADPHONES</h2>
                    <p className="text-[#f1f1f1] text-[1.1rem] w-[65%]">
                        Experience natural, lifelike audio and exceptional build 
                        quality made for the passionate music enthusuiast
                    </p>
                    <button className="uppercase bg-[#D87D4A] text-white px-7 py-3 text-[0.96rem] mt-5">see product</button>       
                </div>
            </div>

            <div className="category-align-content mt-[5rem]">
                <Category 
                    imageSrc="/assets/shared/desktop/image-category-thumbnail-headphones.png" 
                    imageAlt="headphone"
                    title="headphone"  
                />
                <Category 
                    imageSrc="/assets/shared/desktop/image-category-thumbnail-speakers.png" 
                    imageAlt="headphone"
                    title="headphone"
                />
                <Category 
                    imageSrc="/assets/shared/desktop/image-category-thumbnail-earphones.png" 
                    imageAlt="headphone"
                    title="headphone"
                />
            </div>

            <div className="features mb-[10rem]">
                <div className="bg-[#D87D4A] rounded-lg mb-5 zx9">
                    <img className="mobile" src="/assets/home/mobile/image-speaker-zx9.png" alt="speaker-zx9" />
                    <img className="h-[400px] desktop" src="/assets/home/desktop/image-speaker-zx9.png" alt="speaker-zx9" />
                    <img className="tablet" src="/assets/home/tablet/image-speaker-zx9.png" alt="speaker-zx9" />
                    <div className="zx9-content">
                        <h1 className="font-['manrope'] tracking-[1rem] uppercase font-bold text-[2rem] text-white tracking-wide leading-10 py-10">zx9 speaker</h1>
                        <p className="font-['manrope'] text-[#FAFAFA]">
                            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                        </p>
                        <button className="uppercase bg-[#000000] text-white px-7 py-3 mt-5 text-[0.96rem]">see product</button>
                    </div>
                </div>

                <div className="relative rounded-lg mb-5">
                    <img className="relative rounded-lg mobile w-[100%]" src="/assets/home/mobile/image-speaker-zx7.jpg" alt="speaker-zx7" />
                    <img className="relative rounded-lg desktop w-[100%]" src="/assets/home/desktop/image-speaker-zx7.jpg" alt="speaker-zx7" />
                    <img className="relative rounded-lg tablet w-[100%]" src="/assets/home/tablet/image-speaker-zx7.jpg" alt="speaker-zx7" />
                    <div className="absolute top-[30%] left-[10%]">
                        <h1 className="font-['manrope'] uppercase text-[2rem] text=black">ZX7 Speaker</h1>
                        <button className="font-['manrope'] uppercase bg-transparent border-2 text-black border-slate-700 px-7 py-3 mt-5 text-[0.96rem]">see product</button>
                    </div>
                </div>

                <div className="display mb-5">
                    <img className="rounded-lg mobile" src="/assets/home/mobile/image-earphones-yx1.jpg" alt="earphones-yx1" />
                    <img className="rounded-lg desktop size" src="/assets/home/desktop/image-earphones-yx1.jpg" alt="earphones-yx1" />
                    <img className="rounded-lg tablet size" src="/assets/home/tablet/image-earphones-yx1.jpg" alt="earphones-yx1" />
                    <div className="p-10 bg-[#f1f1f1] rounded-lg size">
                        <h1 className="font-['manrope'] uppercase text-[2rem] text=black">YX1 Speaker</h1>
                        <button className="font-['manrope'] uppercase bg-transparent border-2 text-black border-slate-700 px-7 py-3 mt-5 text-[0.96rem]">see product</button>
                    </div>
                </div>
            </div>
            
            <div className="" >
                <Article />
            </div>
            <div className="" >
                <Footer />
            </div>
        </>
    );
};

export default Homepage;