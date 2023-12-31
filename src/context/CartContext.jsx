import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();
export const CartProvider = (props) => {

    const [openModal, setOpenModal] = useState(false);
    const [cardData, setCardData] = useState([]);
    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(1);
    const [notif , setNotif] = useState(false);

    // Load cart data and total from localStorage on component mount
    useEffect(() => {
        const storedData = localStorage.getItem('items');
        if (storedData) {
            try {
            const parsedData = JSON.parse(storedData);
            localStorage.setItem('items', JSON.stringify(parsedData));
            setCardData(parsedData);
            calculateTotal(parsedData);
            } catch (error) {
                console.error('Error parsing JSON from localStorage:', error);
            }
        }
    }, []);
  
    // Calculate the total based on the items
    const calculateTotal = (items) => {
        const newTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(newTotal);
    };
  
    // Add an item to the cart
    function handleAddToCartButton(item) {
        const newItem = { ...item, quantity: count };
        const isItemInCart = cardData.some((cartItem) => cartItem.id === item.id);
        if (!isItemInCart) {
            setNotif(true);toastNotifysuccess();
            const updatedCardData = [...cardData, newItem];
            setCardData(updatedCardData);
            localStorage.setItem('items', JSON.stringify(updatedCardData));
            calculateTotal(updatedCardData);
        } else {
            toastNotifyError();
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

    // Handle the increment
    function handleInrcreement(product) {
        const updatedCardData = cardData.map((data) =>
            data.id === product.id ? { ...data, quantity: data.quantity + 1 } : data
        );
        setCardData(updatedCardData);
        localStorage.setItem('items', JSON.stringify(updatedCardData));
        calculateTotal(updatedCardData);   
    }

    // Handle thd decrement
    function handleDecreement(product) {
        if (product.quantity > 1) {
                const updatedCardData = cardData.map((data) =>
                data.id === product.id ? { ...data, quantity: data.quantity - 1 } : data
            );
            setCardData(updatedCardData);
            localStorage.setItem('items', JSON.stringify(updatedCardData));
            calculateTotal(updatedCardData);
        } else {
            return null;
        }
    }

    function toastNotifysuccess() {
        toast.success('Added to cart', {position: "top-right",autoClose: 2000,hideProgressBar: true,closeOnClick: true,
            pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",toastId: "toastId"
        });
    }

    function toastNotifyError() {
        toast.error('already in the cart', {position: "top-right",autoClose: 2000,hideProgressBar: true,closeOnClick: true,
            pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",toastId: "toastId"
        });
    }

    return (
        <>
            <CartContext.Provider value={{
                openModal, setOpenModal,
                cardData, handleAddToCartButton, handleRemoveFromCart, cartCount, total, setTotal, setCardData, calculateTotal,
                handleInrcreement ,handleDecreement, count, setCount, notif, setNotif, 
            }}>
                {props.children}
            </CartContext.Provider>
        </>
    );
}