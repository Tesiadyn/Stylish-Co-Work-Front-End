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
    const [leftHours, setLeftHours] = useState(0)
    const [leftMinute, setLeftMinute] = useState(0)
    const [leftSecond, setLeftSecond] = useState(0)

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
            let timeRemainingOfStart = (startDate - currentDate) / 1000
            let timeRemainingOfEnd = (endDate - currentDate) / 1000
            if (currentDate >= startDate && currentDate <= endDate) {
                setFlashTime(true)
                setLeftHours(Math.floor(timeRemainingOfEnd / 3600))
                setLeftMinute(Math.floor(timeRemainingOfEnd / 60) % 60)
                setLeftSecond(timeRemainingOfEnd % 60)
            } else {
                setFlashTime(false)
                setLeftHours(Math.floor(timeRemainingOfStart / 3600))
                setLeftMinute(Math.floor(timeRemainingOfStart / 60) % 60)
                setLeftSecond(timeRemainingOfStart % 60)
            }
        }
    }, [currentTime])

    return (
        <>
            {currentTime &&
                <div className={flashsale.countdown}>
                    <div className={flashsale.countdownLayout}>
                        <h3>限時⚡特賣</h3>
                        <p><i className="fa-regular fa-clock"></i>{flashTime ? '結束於' : '開始於'}</p>
                        <div className={flashsale.countdownDisplay}>
                            <div className={flashsale.hours}>
                                <p>{leftHours.toString().padStart(2, '0')}</p>
                            </div>
                            <div className={flashsale.minutes}>
                                <p>{leftMinute.toString().padStart(2, '0')}</p>
                            </div>
                            <div className={flashsale.seconds}>
                                <p>{leftSecond.toString().padStart(2, '0')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {flashProduct &&
                <div className={flashsale.container}>
                    <div className={flashsale.mainImage}>
                        <img src={flashProduct.product.main_image} alt="main" />
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
                        <div onClick={handleToBuy} className={flashTime ? flashsale.buy : flashsale.message}>
                            <p>{flashTime ? '立即購買' : '即將開放搶購'}</p>
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