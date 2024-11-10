import React,{useContext} from 'react'
import { LuShoppingBag } from "react-icons/lu";
import { FaApple } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CartContext } from '../components/CartContext';
import './Home.css'

function Home() {
  const { addToCart } = useContext(CartContext);
  const home = [
    { id: 1, name: 'Black pro', price: 1799, image: './product1.png'},
  ]  
  return (
    <div className='home' id='home'>
        <img src="./home.png" className="image" data-aos="fade-up" alt="Home Image" />
        <section className='description'data-aos='fade-right'>
          <h1 className='head-title'>Over Head</h1>
          <h2 className='head-subtitle'>JOEL Beats</h2>
          <h3>Overview</h3>
          <p>Enjoy award-winning Beats sound with wireless listening<br/> freedom and a sleek, 
            streamlined design with<br/> comfortable padded earphones, delivering first-rate<br/> playback.
          </p>
          
            {home.map((home) => (
               <button className="products-button1" onClick={() => addToCart(home)}>
                    <span class="button--flex1"><LuShoppingBag />  Add to Bag</span>
                    <span class="home__price">GHC{home.price}</span>
               </button>
               
            ))} 
              {/* <span class="button--flex"><LuShoppingBag />  Add to Bag</span> */}
              {/* <span class="home__price">GHC{home.price}</span> */}
            
        </section>
        <section className='sponsor'>
          <div className='sponsor-container'>
            <FaApple />
            <FaSpotify/>
            <FaAmazon/>
            <FaYoutube/>
          </div>
        </section>
    </div>
  )
}

export default Home; 