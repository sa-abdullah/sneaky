import '../styles/App.css'

import shoe  from '../assets/blue_shoe.jpg'
import hanger  from '../assets/cloth_hanger.jpg'
import lShoe  from '../assets/leather_shoe.jpg'
import lShoe2  from '../assets/leather_shoes_2.jpg'
import sleeve  from '../assets/long_sleeve_top.jpg'
import watch  from '../assets/watch_car.png'
import women  from '../assets/women_in_store.jpg'
// import { useState } from 'react'

const HomeSlides = () => {

        // let currentIndex = 0
        // let offset = -currentIndex * 100;
        // const slideCount = document.querySelectorAll('.slide').length;
        // console.log(slideCount)
        // console.log(offset)
    
        // setInterval(() => {
        //   currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
        //   console.log(currentIndex)
        // }, 5000)

        // const slideStyle = {
        //     transform: `translateX(${offset}%)`
        // }
    
    
    return (
        <> 
            <div className="slides">
                <div className="slide" id=""><img src={shoe} alt="" /></div>
                <div className="slide" id=""><img src={bag} alt="" /></div>
                <div className="slide" id=""><img src={hanger} alt="" /></div>
                <div className="slide" id=""><img src={lShoe} alt="" /></div>
                <div className="slide" id=""><img src={sleeve} alt="" /></div>
                <div className="slide" id=""><img src={lShoe2} alt="" /></div>
                <div className="slide" id=""><img src={watch} alt="" /></div>
                <div className="slide" id=""><img src={women} alt="" /></div>
            </div>
            <button className="nav prev" id="prevBtn">&#9664;</button>
            <button className="nav next" id="nextBtn">&#9654;</button>
        </>
    )
}

export default HomeSlides 