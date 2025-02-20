import Header from '../components/header'
import Footer from '../components/footer'
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../components/CartContext";
import { useNavigate } from "react-router-dom"
import ProductLists from './ProductLists'
// import { Link } from 'react-router-dom'

const AllProductsPage = () => {
    const { products } = useContext(CartContext);
    const navigate = useNavigate();

    const [filteredProd, setFilteredProd] = useState([])

    useEffect(() => {
        setFilteredProd(products)
    }, [products])

    const namedSort = (tabCategory) => {
        if (tabCategory === "All") {
            setFilteredProd(products)
        } else {
           const filtered = products.filter(({category}) => category === tabCategory);
           setFilteredProd(filtered)
           console.log(filtered)
        }
    }

    const priceSort = (order) => {
        const sortedProducts = [...filteredProd].sort((a, b) => 
            order === "asc" ? a.price - b.price : b.price - a.price
        );
        setFilteredProd(sortedProducts);
    };

    const ratingSort = (order) => {
        const ratedProducts = [...filteredProd].sort((a, b) => 
            order === "high" ? b.rating.rate - a.rating.rate : a.rating.rate - b.rating.rate
        );
        setFilteredProd(ratedProducts)
    };
    

    return (
        <>
            <Header />
            <div className="bg-[#FAF6E7] min-h-screen p-10">
                <button onClick={() => navigate(-1)} className="bg-gray-500 text-white px-5 py-2 rounded-md mb-5 hover:bg-pink-600">Go Back</button>
                <h2 className="text-[50px] font-semibold mt-10 text-pink-700">All Products</h2>
                <hr className="mb-10"/>
                <section className="flex justify-between">
                    <div className="w-[20%]">
                        <details className="">
                            <summary className="list-none text-2xl text-green-700 px-3 py-2 border-b-2 font-semibold hover:text-white hover:bg-green-700 cursor-pointer">Product Type</summary>
                            <ul>
                                <li className="px-6 py-2 hover:bg-pink-700 hover:text-white" onClick={() => namedSort("men's clothing")}>Mens Clothing</li>
                                <li className="px-6 py-2 hover:bg-pink-700 hover:text-white" onClick={() => namedSort("women's clothing")}>Womens Clothing</li>
                                <li className="px-6 py-2 hover:bg-pink-700 hover:text-white" onClick={() => namedSort("electronics")}>Electronics</li>
                                <li className="px-6 py-2 hover:bg-pink-700 hover:text-white" onClick={() => namedSort("jewelery")}>Jewellery</li>
                                <li className="px-6 py-2 hover:bg-pink-700 hover:text-white" onClick={() => namedSort("All")}>All</li>
                            </ul>
                        </details>
                        <details className="">
                            <summary className="list-none text-2xl text-green-700 px-3 py-2 border-b-2 font-semibold hover:text-white hover:bg-green-700 cursor-pointer">Price</summary>
                            <ul>
                                <li className="px-6 py-2 hover:bg-pink-700 hover:text-white" onClick={() => priceSort("asc")}>Most Affordable</li>
                                <li className="px-6 py-2 hover:bg-pink-700 hover:text-white" onClick={() => priceSort("desc")}>Most Expensive</li>
                            </ul>
                        </details>
                        <details className="">
                            <summary className="list-none text-2xl text-green-700 px-3 py-2 border-b-2 font-semibold hover:text-white hover:bg-green-700 cursor-pointer">Ratings</summary>
                            <ul>
                                <li className="px-6 py-2 hover:bg-pink-700 hover:text-white"onClick={() => ratingSort("high")}>Highest Rated</li>
                                <li className="px-6 py-2 hover:bg-pink-700 hover:text-white"onClick={() => ratingSort("low")}>Lowest Rated</li>
                            </ul>
                        </details>
                    </div>

                    <div className="grid grid-cols-3 gap-6 w-[70%]">
                        <ProductLists productsToDisplay={filteredProd} />
                    </div>
                </section>
                
            </div>
            <Footer />
        </>
        
    );
};

export default AllProductsPage;
