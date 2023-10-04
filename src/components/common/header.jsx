import { useContext } from "react";
import { Context } from "../../context/context";
import { useNavigate } from "react-router-dom";


const Header = () => {

    const { menuNav } = useContext(Context);
    const navigate = useNavigate();

    return (
        <>
            <header className="bg-black">
                <nav className=" bg-black flex flex-row justify-between px-5 py-8 items-center container mx-auto border-b-2">
                    <div className="flex flex-row items-center gap-12 lg:gap-[10vw]">
                        <img src="assets/shared/tablet/icon-hamburger.svg" alt="hambergur-menu" className=" w-4 h-4 lg:hidden" />
                        <img src="assets/shared/desktop/logo.svg" alt="audiophile-logo" className="hidden md:inline-block" />
                        <ul className="flex-row gap-[4vw] font-bold hidden lg:flex ">
                            {menuNav.map((nav, index) =>
                                index < 4 && <li key={index}>
                                    <button className={`uppercase hover:text-orange ${nav.path === location.pathname ? 'text-orange' : 'text-white'}`} onClick={(e) => navigate(nav.path)}>{nav.title}</button>
                                </li>
                            )}
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