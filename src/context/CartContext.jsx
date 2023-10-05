import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = (props) => {

    const [openModal, setOpenModal] = useState(false);

    const [cardData, setCardData] = useState(() => {
        const storedData = localStorage.getItem('items');
        if (storedData) {
            try {
                return JSON.parse(storedData);
            } catch (error) {
                console.error('Error parsing JSON from localStorage:', error);
            }
        }
        return [];
    });

    function handleAddToCartButton(item) {
        const isItemInCart = cardData.some((cartItem) => cartItem.id === item.id);
        if (!isItemInCart) {
            setCardData((prevData) => {
                const newData = [...prevData, item];
                localStorage.setItem('items', JSON.stringify(newData));
                return newData;
            });
        } else {
            alert('Item is already in the cart');
        }
    };

    function handleRemoveFromCart(index) {
        setCardData((prevData) => {
            if (index >= 0 && index < prevData.length) {
                const newData = [...prevData];
                newData.splice(index, 1);
                localStorage.setItem('items', JSON.stringify(newData));
                return newData;
            }
            return prevData;
        });
    };

    return (
        <>
            <CartContext.Provider value={{
                openModal, setOpenModal,
                cardData, handleAddToCartButton, handleRemoveFromCart,
            }}>
                {props.children}
            </CartContext.Provider>
        </>
    );
}