import Header from '../components/header' 
import Footer from '../components/footer'
import { useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { CartContext } from '../components/CartContext'
import { FaShoppingCart, FaStar } from 'react-icons/fa'

const ProductDetail = () => {
    const { id } = useParams()
    const { products, cart, addToCart } = useContext(CartContext)
    const navigate = useNavigate();

    const product = products.find((item) => item.id.toString() === id)

    if (!product || product.rating.count < 1) {return <p>Product not found.</p>}

    
    const isInCart = (productId) => cart.some((item) => item.id === productId)

    return (
        <>
            <Header />
            <div className="flex max-w-full justify-between py-20 px-10 bg-[#FAF6E7]">
                <div className="w-[45%] h-full flex flex-col gap-20">
                    <div><img src={product.image} alt="" className="object-cover w-full h-[50%]"/></div>
                    <div className="h-auto">
                        <Link to="/products" className="text-red-600 my-20 text-2xl font-semibold">View More</Link>
                    </div>
                </div>
                <div className="w-[49%]">
                    <h2 className="text-5xl font-semibold text-pink-700 mb-10">{product.title}</h2>
                    <p className="text-xl mb-5">{product.description}</p>
                    <p className="text-xl font-semibold text-green-700">${product.price}</p>
                    <StarRating rate={product.rating.rate}/>
                    <button className="w-full py-3 my-10 font-semibold text-2xl text-white bg-zinc-800 hover:border-3 hover:bg-transparent hover:text-black flex gap-2 justify-center items-center" onClick={(e) => {if (!isInCart(product.id)) addToCart(product); navigate("/cart")}}>{isInCart(product.id) ? "Item Added" : "Add to Cart"} <FaShoppingCart /></button>
                </div>
            </div>
            <Footer />
        </>
        
    )
}

const StarRating = ({ rate }) => {
  return (
    <div className="flex">
      {Array.from({ length: Math.round(rate) }).map((_, index) => (
        <FaStar key={index} className="fa fa-star text-black mr-[4px] my-5" />
      ))}
    </div>
  );
};

export default ProductDetail