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
        // Update the cardData state with the new item
        if (item.key === item.key) {
            alert('error');
        } else {
            setCardData((prevData) => {
                const newData = [...prevData, item];
                // Store the updated CardData array in localStorage
                localStorage.setItem('items', JSON.stringify(newData));
                return newData;
            });
        }
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