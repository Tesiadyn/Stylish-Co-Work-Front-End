import { useState, useEffect, createContext } from "react";

export const FlashContext = createContext(null)

export const FlashContextProvider = ({ children }) => {

  const [flashProduct, setFlashProduct] = useState(null)
  const [currentTime, setCurrentTime] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://zackawesome.net/api/1.0/flashSale/event')
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json()
        setFlashProduct(data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/ip');
        if (!response.ok) {
          throw new Error('Failed to fetch time data');
        }
        const data = await response.json();
        setCurrentTime(data.datetime);
      } catch (error) {
        console.log(error);
      }
    };
  
    // 首次執行 fetchTime
    fetchTime();
  
    // 設定定時器，每隔一秒重新取得時間
    const interval = setInterval(fetchTime, 1000);
  
    // 在組件解除掛載時清除定時器
    return () => clearInterval(interval);
  }, []);

  const [activeColor, setActiveColor] = useState('')
  const [activeSize, setActiveSize] = useState('')

  return (
    <FlashContext.Provider
      value={{
        activeColor,
        setActiveColor,
        activeSize,
        setActiveSize,
        flashProduct,
        currentTime
      }}
    >
      {children}
    </FlashContext.Provider>
  )
}