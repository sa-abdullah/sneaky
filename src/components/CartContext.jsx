import { createContext, useState, useEffect } from 'react'

const API_URL = "https://fakestoreapi.com/products"

const CartContext = createContext()
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([]) 

    useEffect(() => {
            fetch(API_URL)
                .then((res) => res.json())
                .then((data) => setProducts(data))
                .catch((error) => console.error("Error fetching data:", error))
        }, []);

    const addToCart = (product) => {
        setCart((prevCart) => 
            [...prevCart, { ...product, quantity: product.quantity ?? 1 }]
        )
    }
    const removeFromCart = (productId) => {
        setCart((prevCart) =>prevCart.filter((item) => item.id !== productId))
    }

    const clearCart = () => {
        setCart([])
    }

    const updateQuantity = (id, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) => 
                item.id === id ? { ...item, quantity: Math.max(newQuantity, 1)} : item
            )
        )
    }

    return (
        <CartContext.Provider value={{ cart, products, addToCart , removeFromCart, clearCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}
