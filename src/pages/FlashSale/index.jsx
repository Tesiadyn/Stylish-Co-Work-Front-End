import flashsale from '../../css/FlashSale.module.css'
import mainImage from './main.jpg'
import image0 from './0.jpg'
import image1 from './1.jpg'

const FlashSale = () => {
    return (
        <>
            <div className={flashsale.container}>
                <div className={flashsale.mainImage}>
                    <img src={mainImage} alt="main" />
                </div>
                <div className={flashsale.introduction}>
                    <p className={flashsale.title}>前開衩扭結洋裝</p>
                    <p className={flashsale.date}>201807201824</p>
                    <p className={flashsale.price}>TWD.799</p>
                    <div className={flashsale.hr}></div>
                    <div className={flashsale.selectColors}>
                        <p>顏色</p>
                        <div className={flashsale.colors}>
                            <div className={flashsale.active}><div></div></div>
                            <div><div></div></div>
                            <div><div></div></div>
                        </div>
                    </div>
                    <div className={flashsale.selectSize}>
                        <p>尺寸</p>
                        <div className={flashsale.size}>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                        </div>
                    </div>
                    <div className={flashsale.selectCount}>
                        <p>數量</p>
                        <div className={flashsale.count}>
                            <div>⚡</div>
                            <div>限購1次</div>
                            <div>⚡</div>
                        </div>
                    </div>
                    <div className={flashsale.buy}>
                        <p>立即購買</p>
                    </div>
                    <div className={flashsale.detail}>
                        <p>
                            實品顏色依單品照為主<br />
                            <br />
                            棉 100%<br />
                            厚薄：薄<br />
                            彈性：無<br />
                            <br />
                            清洗：手洗，溫水<br />
                            產地：中國
                        </p>
                    </div>
                </div>
                {/* <div className={flashsale.story}>
                    <div>
                        <p>更多產品資訊</p>
                        <div></div>
                    </div>
                    <p>O.N.S is all about options, which is why we took our staple polo shirt and upgraded it with slubby linen jersey, making it even lighter for those who prefer their summer style extra.breezy.</p>
                </div>
                <div className={flashsale.images}>
                    <div>
                        <img src={image0} alt="0" />
                    </div>
                    <div>
                        <img src={image1} alt="1" />
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default FlashSale