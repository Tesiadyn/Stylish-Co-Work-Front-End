import flashicon from '../../css/FlashIcon.module.css'
import saleIcon from './flash-sale-icon.png'
import { useState } from 'react';

const FlashIcon = () => {
    const [removeIcon, setRemoveIcon] = useState(false)
    
    const handleRemoveIcon = () => {
      setRemoveIcon(true)
    }

    return (
        <div style={{ display: removeIcon ? 'none' : 'block' }} className={flashicon.icon}>
            <div className={flashicon.iconLayout}>
                <div onClick={handleRemoveIcon} className={flashicon.removeIcon}>
                    <p>x</p>
                </div>
                <a href="./flashsale"><img src={saleIcon} alt="icon" /></a>
                {/* <p className={flashicon.timer}>00:00:00</p> */}
                <div className={flashicon.spinning}></div>
            </div>
        </div>
    )
}

export default FlashIcon