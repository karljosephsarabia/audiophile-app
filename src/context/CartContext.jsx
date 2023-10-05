import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
export const CartProvider = (props) => {

    const [openModal, setOpenModal] = useState(false);
    const [cardData, setCardData] = useState([]);
    const [total, setTotal] = useState(0);

    // Load cart data and total from localStorage on component mount
    useEffect(() => {
        const storedData = localStorage.getItem('items');
        if (storedData) {
            try {
            const parsedData = JSON.parse(storedData);
            setCardData(parsedData);
            calculateTotal(parsedData);
            } catch (error) {
                console.error('Error parsing JSON from localStorage:', error);
            }
        }
    }, []);
  
    // Calculate the total based on the items
    const calculateTotal = (items) => {
        const newTotal = items.reduce((acc, item) => acc + item.price, 0);
        setTotal(newTotal);
    };
  
    // Add an item to the cart
    function handleAddToCartButton(item) {
        const isItemInCart = cardData.some((cartItem) => cartItem.id === item.id);
        if (!isItemInCart) {
            const updatedCardData = [...cardData, item];
            setCardData(updatedCardData);
            localStorage.setItem('items', JSON.stringify(updatedCardData));
            calculateTotal(updatedCardData);
        } else {
            alert('Item is already in the cart');
        }
    };
  
    // Remove an item from the cart
    function handleRemoveFromCart(index) {
        if (index >= 0 && index < cardData.length) {
            const updatedCardData = [...cardData];
            updatedCardData.splice(index, 1);
            setCardData(updatedCardData);
            localStorage.setItem('items', JSON.stringify(updatedCardData));
            calculateTotal(updatedCardData);
        }
    };

    // Count the cart
    const cartCount = cardData.length;

    return (
        <>
            <CartContext.Provider value={{
                openModal, setOpenModal,
                cardData, handleAddToCartButton, handleRemoveFromCart, cartCount, total, 
            }}>
                {props.children}
            </CartContext.Provider>
        </>
    );
}