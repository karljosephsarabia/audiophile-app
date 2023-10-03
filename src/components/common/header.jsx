import { useContext } from "react";
import CartModal from "../cartModal";
import { CartContext } from "../../context/cartContext";

const Header = () => {

    const { setOpenModal } = useContext(CartContext);
    function handleCartButton() {
        setOpenModal(true);
    }

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
                    <div className="">
                        <button onClick={handleCartButton}>
                            <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z" fill="#FFF" fill-rule="nonzero"/></svg>
                        </button>
                    </div>
                    <CartModal />
                </nav>
            </header>
        </>
    );
};

export default Header;