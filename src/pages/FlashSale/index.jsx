import flashsale from '../../css/FlashSale.module.css'
import mainImage from './main.jpg'
import { FlashContext } from '../../context/flashContext'
import image0 from './0.jpg'
import image1 from './1.jpg'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const FlashSale = () => {
    const navigate = useNavigate()

    // const colors = ['a', 'b', 'c']
    // const sizes = ['S', 'M', 'L']
    // const [activeColor, setActiveColor] = useState('')

    const { colors, sizes, activeColor, setActiveColor } = useContext(FlashContext)

    const handleColor = (color) => {
        setActiveColor(color)
    }

    const handleToBuy = () => {
        window.scrollTo(0, 0)
        localStorage.setItem('flashtoken', '123456')
        navigate('/flashorder')
    }

    return (
        <>
            <div className={flashsale.countdown}>
                <div className={flashsale.countdownLayout}>
                    <h3>限時⚡特賣</h3>
                    <p><i className="fa-regular fa-clock"></i>結束於</p>
                    <div className={flashsale.countdownDisplay}>
                        <div className={flashsale.hours}>
                            <p>0</p>
                            <p>0</p>
                        </div>
                        <div className={flashsale.minutes}>
                            <p>0</p>
                            <p>0</p>
                        </div>
                        <div className={flashsale.seconds}>
                            <p>0</p>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
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
                            {colors.map(color => (
                                <div onClick={() => handleColor(color)} key={color} className={color === activeColor ? flashsale.active : ''}><div></div></div>
                            ))}
                        </div>
                    </div>
                    <div className={flashsale.selectSize}>
                        <p>尺寸</p>
                        <div className={flashsale.size}>
                            {sizes.map(size => (
                                <div key={size}>{size}</div>
                            ))}
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
                    <div onClick={handleToBuy} className={flashsale.buy}>
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