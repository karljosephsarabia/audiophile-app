const Footer = () => {
    return (
        <>
            <footer className="flex justify-center bg-black mt-footerTop">
                <div className="container text-white bg-black flex flex-col items-center px-5 relative w-[375px] md:w-full md:items-start">
                    <div className="border-t-4 border-[#D87D4A] w-footerLine"></div>
                    <div className="mt-14 lg:flex lg:flex-row lg:justify-between lg:w-full lg:mb-footerLogoBot lg:mt-footerLogoTop">
                        <img src="assets/shared/desktop/logo.svg" alt="audiophile-logo" className="w-[143px] h-[25px] lg:w-footerLogo lg:h-footerLogo" />
                        <ul className="uppercase text-center flex flex-col gap-7 tracking-widest my-10 md:flex-row lg:my-0 lg:text-footerCategory">
                            <li>home</li>
                            <li>headphones</li>
                            <li>speakers</li>
                            <li>earphones</li>
                        </ul>
                    </div>
                    <div className="lg:flex lg:flex-row lg:w-full lg:justify-between lg:items-end">
                        <p className="text-center text-gray-500 md:text-start lg:w-footerDesc lg:text-footerDesc">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                            and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                            visit our demo facility - we’re open 7 days a week.
                        </p>
                        <div className="lg:flex flex-row gap-4 justify-center hidden">
                            <img src="assets\shared\desktop\icon-facebook.svg" alt="facebook" className="w-[24px] h-[24px] lg:w-footerSocialMed lg:h-footerSocialMed" />
                            <img src="assets\shared\desktop\icon-twitter.svg" alt="twitter" className="w-[24px] h-[24px] lg:w-footerSocialMed lg:h-footerSocialMed" />
                            <img src="assets\shared\desktop\icon-instagram.svg" alt="instagram" className="w-[24px] h-[24px] lg:w-footerSocialMed lg:h-footerSocialMed" />
                        </div>
                    </div>
                    <div className="md:flex md:flex-row md:justify-between md:w-full md:pt-20 lg:pb-9">
                        <p className="text-gray-500 py-10 md:py-0 lg:text-footerDesc">Copyright 2023. All Rights Reserved</p>
                        <div className="flex flex-row gap-4 justify-center pb-9 lg:hidden">
                            <img src="assets\shared\desktop\icon-facebook.svg" alt="facebook" />
                            <img src="assets\shared\desktop\icon-twitter.svg" alt="twitter" />
                            <img src="assets\shared\desktop\icon-instagram.svg" alt="instagram" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;