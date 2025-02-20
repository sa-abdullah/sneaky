import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import { Link } from 'react-router-dom'
import logo from '../assets/Sneak.png'

const Footer = () => {

    return (
        <>
            <section className="bg-[#FFFAF3] w-full flex flex-col items-center text-center border-2justify-between py-10 px-30">
                <p className="text-6xl font-semibold">Be the First to Know Our <span className="text-red-600">New Arrivals</span></p>
                <p className="text-2xl my-5">Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.</p>
                <div className="w-[50%] flex items-center mb-20">
                    <input type="email" id="email" placeholder="Enter your email address" className="w-[65%] text-xl p-2 m-2 align-center border-b-2 border-b-zinc-600 focus:outline-pink-700" />
                    <button className="m-auto bg-green-700 px-10 py-3 rounded-3xl text-white font-semibold hover:bg-transparent hover:text-green-700 hover:border-3 hover:border-green-700">Sign Up</button>
                </div>
                <p>Note: You can opt-out at any time. See our Privacy Policy and Terms.</p>
            </section>
            <section className="bg-[#FAF6E7] px-10 py-20 flex justify-between w-full">
                <div className="w-[60%] flex gap-20">
                    <ul className="flex flex-col gap-5 text-xl font-semibold">
                        <h3 className="text-3xl">Help</h3>
                        <Link className="hover:text-pink-700">Contact us</Link>
                        <Link className="hover:text-pink-700">Track Your Order</Link>
                        <Link className="hover:text-pink-700">FAQ</Link>
                    </ul>
                    <ul className="flex flex-col gap-5 text-xl font-semibold">
                        <h3 className="text-3xl">About Us</h3>
                        <Link className="hover:text-pink-700">Careers</Link>
                        <Link className="hover:text-pink-700">Company's Leadership</Link>
                    </ul>
                </div>
                <div className="w-[40%] flex flex-col gap-5">
                    <div className="text-pink-700 text-5xl font-bold mb-10">Sneak Into Sneaky!</div>
                    <div><img src={logo} alt="" /></div>
                    <p className="text-lg">Independent since 1906, we empower people through sport and craftsmanship to create positive change in communities around the world.</p>
                    <div className="flex gap-6 text-3xl ">
                        <a href="https://www.linkedin.com/in/salaudeenabdul/" target="_blank"><FaLinkedin className="hover:text-pink-700"/></a>
                        <a href="https://x.com/code_scribendi" target="_blank"><FaTwitter className="hover:text-pink-700"/></a>
                        <a href=""><FaFacebook className="hover:text-pink-700"/></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer