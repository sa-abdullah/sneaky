import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'
import logo from '../assets/Sneak.png'

const Header = () => {
    return (
        <div>
            <nav className="w-screen py-5 px-15 bg-[#FEEB9D] text-xl font-bold flex justify-between relative font-serif shadow-2xl">
                <div className="flex gap-[100px]">
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/products"><p>Products</p></Link>
                </div>
                <Link to="/cart"><FaShoppingCart className="text-zinc-800"/></Link>
                <Link to="/" className="absolute top-0 left-0 bottom-0 right-0 m-auto w-17 py-2"><img src={logo} alt="" /></Link>
            </nav>
        </div>
    )
}

export default Header