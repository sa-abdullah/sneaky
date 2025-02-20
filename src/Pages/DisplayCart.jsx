import Header from '../components/header'
import { useContext } from 'react'
import { CartContext } from '../components/CartContext'
import { FaTimes } from "react-icons/fa"
import { Link } from 'react-router-dom'

const DisplayCartPage = () => {
    const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext)

    const itemSubtotal = (initPrice, count) => (initPrice * count).toFixed(2)

    
    const totalCartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
      

    console.log(cart)
    
    return (
        <>  
            <Header />
            <div className="flex flex-col items-center w-[100vw] bg-[#FAF6E7] px-30 py-20 min-h-screen">
                <h2 className="text-6xl text-pink-700 font-semibold pb-10">Shopping Cart</h2>
                {cart.length === 0 ? (
                    <div>
                        <p className="my-20 text-xl w-full m-auto px-10 py-5">Your cart is empty</p>
                         <Link to="/products" className="my-20 text-xl w-full m-auto border-3 px-10 py-5 font-bold border-pink-700">Add Products Now!</Link>
                    </div>
                ) : (
                    <>
                    <ul className="w-full max-w-[800px]">
                        {cart?.length > 0 && cart.map((item, index) => (
                        <li key={index} className="flex items-center justify-between h-[200px] w-full bg-white p-4 rounded-2xl shadow-2xl px-5 py-5 mb-10 hover:border-3 hover:border-pink-700">
                            <div className="w-[130px] h-full object-contain">
                                <img src={item.image} alt="" className="w-fit h-[100%]"/>
                            </div>
                            <div className="w-[50%] flex flex-col justify-between text-lg">
                                <p>{item.title}</p>
                                <p>Color: <span className="font-semibold">Red</span></p>
                                <p>Size: <span className="font-semibold">45</span></p>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 bg-gray-300 rounded">-</button>
                                    <input type="number" min={1} value={item.quantity} onChange={(e) => {updateQuantity(item.id, Number(e.target.value))}} className="ml-2 w-16 text-center border rounded" />
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 bg-gray-300 rounded">+</button>
                                </div>
                                
                            </div>
                            <div className="flex flex-col justify-between h-full items-center w-[10%]">
                                <FaTimes className="hover:text-red-600" onClick={() => removeFromCart(item.id)}/>
                                <p className="font-semibold text-green-700">{`$${itemSubtotal(item.price, item.quantity)}`}</p>
                            </div>
                        </li>
                        ))}
                    </ul>
                    <div to="/products" className=" text-xl w-auto m-auto border-3 px-10 py-5 font-bold border-pink-700">Total: <span>${totalCartPrice}</span></div>
                    <Link to="/products" className="border-3 bg-pink-700 text-white font-semibold text-lg rounded-xl w-full my-20 text-center hover:text-pink-700 hover:bg-transparent hover:border-zinc-500 px-10 py-3 hover:shadow-xs">Add More Items</Link>
                    <div className="flex w-full justify-between">
                        <button className="border-3 bg-pink-700 text-white font-semibold text-lg rounded-xl hover:text-pink-700 hover:bg-transparent hover:border-zinc-500 px-10 py-3 hover:shadow-xs">CheckOut</button>
                        <button className="border-3 bg-pink-700 text-white font-semibold text-lg rounded-xl hover:text-pink-700 hover:bg-transparent hover:border-zinc-500 px-10 py-3 hover:shadow-xs" onClick={clearCart}>Delete All</button>
                    </div>
                    </>
                )}
            </div>
        </>
    )
}

export default DisplayCartPage