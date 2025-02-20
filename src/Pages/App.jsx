import Header from '../components/header'
import Footer from '../components/footer'
import ProductLists from './ProductLists'
import { useContext } from 'react'
import '../styles/App.css'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../components/CartContext'

// import woman  from '../assets/woman.png'
import man  from '../assets/man.png'



function App() {
  const { products } = useContext(CartContext);
  const navigate = useNavigate()
  
  return (
    <>
      <div>
        <Header />
        <div className="w-full h-full bg-[#FAF6E7] flex justify-between p-10 overflow-x-hidden">
          <div className="w-[50%] h-auto flex flex-col gap-[30px]">
            <h2 className="text-[70px] h-auto font-bold">Your Ultimate Online Store for All Your Needs</h2>
            <p className="text-5xl h-auto">Free Shipping on <span className="text-red-600">$99+</span> Orders!</p>
          </div>
          <div className="w-[35%] ">
            <div className="w-full"><img src={man} alt="" className="object-cover"/></div>
          </div>
        </div>
        <div className="h-auto bg-[#FEEB9D] px-30 py-20">
          <div className="text-center">
             <h2 className="text-[70px] font-semibold">What's Trendy Now!</h2>
             <p className="text-[20px]">Discover the Latest Products on Sneaky</p>
          </div>
          <div className="grid grid-cols-4 w-full my-[20px] gap-x-3 gap-y-7">
              <ProductLists productsToDisplay={products} showRandomSlice={true}  />
          </div>
          <div className="text-center">
              <button className="m-auto mt-10 bg-green-700 px-10 py-3 rounded-3xl text-white font-semibold hover:bg-transparent hover:text-green-700 hover:border-3 hover:border-green-700" onClick={() => navigate('/products')}>Show More</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
