
const Header = () => {
    return (
        <>
            <header className="bg-black">
                <nav className=" bg-black flex flex-row justify-between px-5 py-8 items-center container mx-auto border-b-2">
                    <div className="flex flex-row items-center gap-12 lg:gap-[10vw]">
                        <img src="assets/shared/tablet/icon-hamburger.svg" alt="hambergur-menu" className=" w-4 h-4 lg:hidden" />
                        <img src="assets/shared/desktop/logo.svg" alt="audiophile-logo" className="hidden md:inline-block" />
                        <ul className="text-white uppercase flex-row gap-[4vw] font-bold hidden lg:flex">
                            <li className="hover:text-orange"><a href="#">home</a></li>
                            <li className="hover:text-orange"><a href="#">headphones</a></li>
                            <li className="hover:text-orange"><a href="#">speakers</a></li>
                            <li className="hover:text-orange"><a href="#">earphones</a></li>
                        </ul>
                    </div>
                    <img src="assets/shared/desktop/logo.svg" alt="audiophile-logo" className="md:hidden" />
                    <img src="assets/shared/desktop/icon-cart.svg" alt="cart" />
                </nav>
            </header>
        </>
    );
};

export default Header;