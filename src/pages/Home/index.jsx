import Carousel from './Carousel';
import Products from './Products';
import home from '../../css/Home.module.css'
import saleIcon from './flash-sale-icon.png'

function Home() {
  return (
    <>
      <Carousel />
      <div className={home.icon}>
        <div className={home.iconLayout}>
          <div className={home.removeIcon}>
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
