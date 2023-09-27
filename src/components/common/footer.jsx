const Footer = () => {
    return (
        <>
            <footer>
                <div className=" text-white bg-black flex flex-col items-center px-5 mt-24 relative">
                    <div className="border-t-4 border-[#D87D4A] w-28"></div>
                    <img src="assets/shared/desktop/logo.svg" alt="audiophile-logo" className="w-[143px] py-10" />
                    <ul className="uppercase text-center flex flex-col gap-3">
                        <li>home</li>
                        <li>headphones</li>
                        <li>speakers</li>
                        <li>earphones</li>
                    </ul>
                    <p className="text-center py-10 text-gray-500">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                        and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                        visit our demo facility - we’re open 7 days a week.</p>
                    <p className="text-gray-500">Copyright 2021. All Rights Reserved</p>
                    <div className="flex flex-row py-10 gap-4">
                        <img src="assets\shared\desktop\icon-facebook.svg" alt="facebook" />
                        <img src="assets\shared\desktop\icon-twitter.svg" alt="twitter" />
                        <img src="assets\shared\desktop\icon-instagram.svg" alt="instagram" />
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;