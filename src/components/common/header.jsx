
const Header = () => {
    return (
        <>
            <header>
                <nav className=" bg-black flex flex-row justify-between px-5 py-8 items-center">
                    <img src="assets/shared/tablet/icon-hamburger.svg" alt="hambergur-menu" className=" w-4 h-4" />
                    <img src="assets/shared/desktop/logo.svg" alt="audiophile-logo" />
                    <img src="assets/shared/desktop/icon-cart.svg" alt="cart" />
                </nav>
            </header>
        </>
    );
};

export default Header;