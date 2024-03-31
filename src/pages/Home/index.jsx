import Carousel from './Carousel';
import Products from './Products';
import Banner from "./Banner";
import home from '../../css/Home.module.css'
import saleIcon from './flash-sale-icon.png'
import { useState } from 'react';

function Home() {
  const [removeIcon, setRemoveIcon] = useState(false)

  const handleRemoveIcon = () => {
    setRemoveIcon(true)
  }

  return (
    <>
      <Carousel />
      <Banner />
      <div style={{ display: removeIcon ? 'none' : 'block' }} className={home.icon}>
        <div className={home.iconLayout}>
          <div onClick={handleRemoveIcon} className={home.removeIcon}>
            <p>x</p>
          </div>
          <a href="./flashsale"><img src={saleIcon} alt="icon" /></a>
          <p className={home.timer}>00:00:00</p>        
        </div>
      </div>
      <Products />
    </>
  );
}

export default Home;
