import { useContext, useEffect, useState } from "react"
import { CartContext } from '../components/CartContext'
import { Link, useNavigate } from 'react-router-dom'


const ProductLists = ({ productsToDisplay, showRandomSlice = false }) => {
    const { cart, addToCart } = useContext(CartContext)
    const [startIndex, setStartIndex] = useState(0);
    const navigate = useNavigate();
    const [navigateOnAdd, setNavigateOnAdd] = useState(false);


    useEffect(() => {
        if (showRandomSlice && productsToDisplay.length > 8) {
          setStartIndex(Math.floor(Math.random() * (productsToDisplay.length - 7)));
        }
      }, [productsToDisplay, showRandomSlice]);

    const displayProd = showRandomSlice && productsToDisplay.length > 8 
    ? productsToDisplay.slice(startIndex, startIndex + 8) 
    : productsToDisplay;


    const isInCart = (productId) => cart.some((item) => item.id === productId)
    
    
    return (
        <>
            {displayProd.length > 0 && 
                displayProd.map((product) => {
                    return (
                        <Link to={`/detail/${product.id}`} key={product.id} className="flex flex-col justify-between h-[400px] bg-white rounded-xl py-5 hover:scale-110 hover:border-1 hover:border-pink-700 hover:shadow-2xl">
                            <div className="px-5">
                                <h3 className="text-2xl font-bold mb-3">{product.title.length > 15 ? product.title.slice(0, 15) : product.title}</h3>
                                <p>{product.description.length > 50 ? product.description.slice(0, 50) : product.description}</p>
                            </div>
                            <div>
                                <img src={product.image} alt={product.title} className="h-40 w-auto mx-auto" />
                            </div>
                            <div className="flex justify-between px-5 items-center">
                                <p className="text-green-700 text-xl font-semibold">${product.price.toFixed(2)}</p>
                                <button className="border-3 border-zinc-700 px-4 py-2 rounded-2xl hover:bg-pink-600 hover:border-white hover:text-white" onClick={(e) => {if (!isInCart(product.id)) {addToCart(product); setNavigateOnAdd(true)}; e.preventDefault(); if (navigateOnAdd) navigate("/cart")}}>{isInCart(product.id) ? "Item Added" : "Add Cart"}</button>
                            </div>
                        </Link>
                    
                )})}
        </>
    )
}



export default ProductLists;


