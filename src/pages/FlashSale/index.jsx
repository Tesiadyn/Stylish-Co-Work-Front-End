import flashsale from '../../css/FlashSale.module.css'
import mainImage from './main.jpg'
import { FlashContext } from '../../context/flashContext'
import image0 from './0.jpg'
import image1 from './1.jpg'
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const FlashSale = () => {
    const navigate = useNavigate()

    const { activeColor, setActiveColor, flashProduct, currentTime } = useContext(FlashContext)
    const [flashTime, setFlashTime] = useState(false)

    const handleColor = (color) => {
        setActiveColor(color)
    }

    const handleToBuy = () => {
        window.scrollTo(0, 0)
        localStorage.setItem('flashtoken', '123456')
        navigate('/flashorder')
    }

    useEffect(() => {
        if (flashProduct && currentTime) {
            const currentDate = new Date(currentTime)
            currentDate.setMilliseconds(0)
            const startDate = new Date(flashProduct.start_time)
            const endDate = new Date(flashProduct.end_time)
            startDate.setMilliseconds(0)
            endDate.setMilliseconds(0)
            let timeRemaining = endDate - currentDate
            console.log(timeRemaining)
            if(currentDate >= startDate && currentDate <= endDate){
                setFlashTime(true)
            }else{
                setFlashTime(false)
            }
        }
    }, [currentTime])

    // const haha = new Date()
    // console.log(haha.getMonth() + 1)
    // console.log(haha.getDate())
    // console.log(haha.getHours())
    // console.log(haha.getMinutes())


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
            {flashProduct &&
                <div className={flashsale.container}>
                    <div className={flashsale.mainImage}>
                        <img src={mainImage} alt="main" />
                    </div>
                    <div className={flashsale.introduction}>
                        <p className={flashsale.title}>{flashProduct.product.title}</p>
                        <p className={flashsale.date}>{flashProduct.product.id}</p>
                        <p className={flashsale.price}>TWD.{flashProduct.product.price}</p>
                        <div className={flashsale.hr}></div>
                        <div className={flashsale.selectColors}>
                            <p>顏色</p>
                            <div className={flashsale.colors}>
                                {flashProduct.product.colors.map(color => (
                                    <div onClick={() => handleColor(color.code)} key={color.code} className={color.code === activeColor ? flashsale.active : ''}><div style={{ backgroundColor: `#${color.code}` }}></div></div>
                                ))}
                            </div>
                        </div>
                        <div className={flashsale.selectSize}>
                            <p>尺寸</p>
                            <div className={flashsale.size}>
                                {flashProduct.product.sizes.map(size => (
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
                                {flashProduct.product.note}<br />
                                <br />
                                {flashProduct.product.texture}<br />
                                厚薄：薄<br />
                                彈性：無<br />
                                <br />
                                清洗：{flashProduct.product.wash}<br />
                                產地：{flashProduct.product.place}
                            </p>
                        </div>
                    </div>
                    <div className={flashsale.story}>
                        <div>
                            <p>更多產品資訊</p>
                            <div></div>
                        </div>
                        <p>{flashProduct.product.story}</p>
                    </div>
                    <div className={flashsale.images}>
                        {flashProduct.product.images.map(image => (
                            <div key={image}>
                                <img src={image} alt="0" />
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default FlashSale