import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = (props) => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <CartContext.Provider value={{
                openModal, setOpenModal,
            }}>
                {props.children}
            </CartContext.Provider>
        </>
    );
}